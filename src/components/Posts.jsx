import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Image } from "react-bootstrap";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://portal.liceoexperimental.cl/wp-json/wp/v2/posts?per_page=3');
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
                setPosts(postsData);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Mostrar mensaje de error al usuario
            }
        };

        fetchPosts();
    }, []);

    return (
        <Row>
            <h2>Últimas noticias:</h2>
            {posts.map((post, index) => (
                <Col md={4} key={index}>
                    <Card className="shadow mb-5 bg-body-tertiary rounded">
                        <Card.Img variant="top" src={post.featuredMedia} alt={post.title} />
                        <Card.Body>
                            <Card.Title dangerouslySetInnerHTML={{ __html: post.title }}></Card.Title>
                            <Card.Text dangerouslySetInnerHTML={{ __html: post.content }}></Card.Text>
                            <div className='d-flex justify-content-end'>
                                <Link to={`Noticia/${post.id}`} className="btn btn-primary">Leer más</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default Posts;
