import { Link } from "react-router-dom"

export const ButtonAccess = ({ name, link, color = 'btn-custom btn-outline-primary' }) => {
    return (
        <>
            <Link className={`btn m-2 ${color}`} to={link} role="button">{name}</Link>
        </>
    )
}