import ironhack from '../images/ironhack-logo-xs.png'
import nav from '../images/menu-top-xs.png'

function Nav() {
    return (
        <div className='navBar'>
            <div className="img1"> <img src={ironhack} alt="" /> </div>
            <img src={nav} alt="" />
        </div>
    );
}


export default Nav;