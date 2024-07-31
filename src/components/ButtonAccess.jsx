import { Link } from "react-router-dom"

export const ButtonAccess = ({ name, link }) => {
    return (
        <>
            <Link className="btn btn-outline-primary btn-custom m-2" to={link} role="button">{name}</Link>
        </>
    )
}