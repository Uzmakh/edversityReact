import classes from './index.module.css'
import {Link} from 'react-router-dom'

function Nav() {
    const navLinks = [
        {
            placeholder: "Home",
            path: "/home",
        },
        {
            placeholder: "Followers",
            path: "/home/followers",
        },
        {
            placeholder: "Followings",
            path: "/home/followings",
        },
        {
            placeholder: "Settings",
            path: "/setting",
        },
        {
            placeholder: "Sign out",
            path: "/",
        },
    ];
    return (
        <nav>
            <h1 className={classes.logo}>Edverter</h1>
            <ul className={classes.list_items}>
          {navLinks.map((navlink, index) => (
            <li className={classes.list_item} key={index}>
              <Link to={navlink.path}>{navlink.placeholder}</Link>
            </li>
          ))}
            </ul>
        </nav>)
}

export default Nav;