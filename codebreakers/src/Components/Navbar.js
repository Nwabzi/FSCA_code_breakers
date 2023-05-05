import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logoImage from "../images/logo.png"

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="site-title">
        <img  src={logoImage} className='logo-image' alt=""/>  
    
      </Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/business">Your business</CustomLink>
        <CustomLink to="/loans">Loans</CustomLink>
        <CustomLink to="/metrics">Market Analysis</CustomLink>
        <CustomLink to="/createbusiness">Create Business</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
