// Imports for nav
import {Link, useMatch, useResolvedPath} from 'react-router-dom';
import './navbar.css';
import nav_logo from '../../assets/personal_logo.webp'


export default function Navbar() {

    return(
        <nav className="nav">
            <ul>
                {/* Active link */}
                <ActiveLink to="/">
                    <img src={nav_logo} className='nav_img' alt='letter b with a bee inside'></img>
                </ActiveLink>
            </ul>
        </nav>
    )
}
// Define active link to be used
function ActiveLink ({to, children,...props }) {
    const ResolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: ResolvedPath.pathname, end:true})
    return (
        <li className={isActive === to ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}