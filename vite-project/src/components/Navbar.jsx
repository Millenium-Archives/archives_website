import { Link, useMatch, useResolvedPath } from "react-router-dom"
import book from "../assets/images/book.png"
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav class="nav">
            <div><img class="logo" style={{ width: '50px', height: '50px' }} src={book}/></div>
            <div>
                <ul class="pages">
                    <CustomLink to="/" class="poppins-semibold">Home</CustomLink>
                    <CustomLink to="/about" class="poppins-semibold">About</CustomLink>
                    <CustomLink to="/progress" class="poppins-semibold">Progress</CustomLink>
                    <CustomLink to="/survey" class="poppins-semibold">Survey</CustomLink>
                </ul>
            </div>
        </nav>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return ( 
        <li className={ isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}