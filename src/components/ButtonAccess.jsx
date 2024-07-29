import { Link } from "react-router-dom"

export const ButtonAccess = ({ name, link }) => {
    return (
        <>
            <Link className="btn btn-outline-primary m-2" to={link} role="button">{name}</Link>
        </>
    )
}