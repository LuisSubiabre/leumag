import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Form } from "react-bootstrap";

const Noticias = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            if (!hasMore) return;
            try {
                setLoading(true);
                const response = await axios.get(`https://portal.liceoexperimental.cl/wp-json/wp/v2/posts?page=${page}&per_page=10`);
                const postsData = await Promise.all(response.data.map(async (post) => {
                    const { featured_media: featuredMediaId, id, title, content, link } = post;
                    const featuredMediaResponse = featuredMediaId ? await axios.get(`https://portal.liceoexperimental.cl/wp-json/wp/v2/media/${featuredMediaId}`) : null;
                    const featuredMedia = featuredMediaResponse ? featuredMediaResponse.data.source_url : null;
                    return {
                        id,
                        title: title.rendered,
                        content: content.rendered.substring(0, 100) + '...',
                        link,
                        featuredMedia
                    };
                }));

                setPosts(prevPosts => [...prevPosts, ...postsData]);
                setPage(prevPage => prevPage + 1);
                setLoading(false);

                // Verificar si hay más posts para cargar
                if (postsData.length < 10) {
                    setHasMore(false);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop + 100 >= document.documentElement.offsetHeight && !loading) {
                fetchPosts();
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cargar los primeros posts al montar el componente
        fetchPosts();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [page, hasMore, loading]);

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container contenedor px-5">
            <Form className="mb-4">
                <Form.Control
                    type="text"
                    placeholder="Buscar noticias..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Form>
            <Row>
                <h2>Todas las noticias:</h2>
                {filteredPosts.map((post, index) => (
                    <Col md={4} key={index}>
                        <Card className="shadow mb-5 bg-body-tertiary rounded">
                            <Card.Body>
                                <Card.Title dangerouslySetInnerHTML={{ __html: post.title }}></Card.Title>
                                <Card.Text dangerouslySetInnerHTML={{ __html: post.content }}></Card.Text>
                                <div className='d-flex justify-content-end'>
                                    <Link to={`/Noticia/${post.id}`} className="btn btn-primary">Leer más</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                {loading && <p>Cargando...</p>}
                {!hasMore && <p>No hay más noticias para mostrar.</p>}
            </Row>
        </div>
    );
};

export default Noticias;
