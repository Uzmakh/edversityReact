import './index.css'
function Nav() {
    return (
        <nav>
            <h1 className="logo">Edverter</h1>
            <ul className='list-items'>
                <li className='list-item'>Home</li>
                <li className='list-item'>Settings</li>
                <li className='list-item'>Followers</li>
                <li className='list-item'>Sign Out</li>
               </ul>
        </nav>)
}

export default Nav;