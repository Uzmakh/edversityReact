import classes from './index.module.css'
function Nav() {
    return (
        <nav>
            <h1 className={classes.logo}>Edverter</h1>
            <ul className={classes.list_items}>
                <li className={classes.list_item}>Home</li>
                <li className={classes.list_item}>Followers</li>
                <li className={classes.list_item}>Followings</li>
                <li className={classes.list_item}>Settings</li>
                <li className={classes.list_item}>Sign Out</li>
            </ul>
        </nav>)
}

export default Nav;