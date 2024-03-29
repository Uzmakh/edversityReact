import classes from './index.module.css';
import { Link } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function Nav() {
    const navigate = useNavigate();
    const navLinks = [
        {
            placeholder: "Home",
            path: "/home",
            isLink: true
        },
        {
            placeholder: "Followers",
            path: "/home/followers",
            isLink: true
        },
        {
            placeholder: "Followings",
            path: "/home/followings",
            isLink: true
        },
        {
            placeholder: "Settings",
            path: "/setting",
            isLink: true
        },
        {
            placeholder: "Sign out",
            path: "/",
            isLink: false
        },
    ];
    const logoutHandler = () => {
        signOut(auth)
            .then(() => {
                console.log("Signed out successfully");
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <nav>
            <h1 className={classes.logo}>Edverter</h1>
            <ul className={classes.list_items}>
          {navLinks.map((navlink, index) => (
              <li className={classes.list_item} key={index}>
                  {
                      navlink.isLink ? (
                  <Link to={navlink.path}>
                    className={ ({isActive}) => (isActive ? classes.active : '')}
                    {navlink.placeholder}</Link>
                      ) : <button className={classes.input_btn} onClick={logoutHandler}>Sign Out</button>
                  }
              
            </li>
          ))}
            </ul>
        </nav>)
}

export default Nav;