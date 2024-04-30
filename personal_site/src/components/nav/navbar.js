import {Link, useMatch, useResolvedPath} from 'react-router-dom';
import './navbar.css';

export default function Navbar() {

    return(
        <nav className="nav">
            <ul>
                {/* Active link */}
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/work">Work</ActiveLink>
            </ul>
        </nav>
    )
}

function ActiveLink ({to, children,...props }) {
    const ResolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: ResolvedPath.pathname, end:true})
    return (
        <li className={isActive === to ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}