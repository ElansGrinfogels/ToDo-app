import './index.css'


const Navbar = () => {

    return (
        <div className='navbar'>
            <h1>Elans Grinfogels ToDo App</h1>
            <ul>
                <li>
                <a href='/'>Home</a>
                </li>
                <li>
                <a href='/todoForm/new'>Create</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;