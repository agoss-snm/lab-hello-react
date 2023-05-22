import one from '../images/icon1.png';
import two from '../images/icon2.png';
import tree from '../images/icon3.png';
import four from '../images/icon4.png'

function Nav() {
    return (
        <div className='flex'>
            <div> 
                <img src={one} alt="" /> 
                <h4>Declarative</h4>
                <p>React makes it painless to create interactive Uis.</p>
            </div>
           <div> 
            <img src={two} alt="" />
            <h4>Components</h4>
            <p>Build encapsulated components that manage their state.</p>
            </div>
           <div> 
            <img src={tree} alt="" />
            <h4>Single-Way</h4>
            <p>A set of immutable values are passed yo the component's</p>
            </div>
           <div> 
            <img src={four} alt="" />
            <h4>JSX</h4>
            <p>Statically-tyed designed to run on modern browsers</p>
            </div>
           
        </div>
    );
}


export default Nav;