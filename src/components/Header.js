import '../App.css';
import './Header.css'
function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div id='happy' onClick={() => props.handleShow(false)}><b>Home</b></div>
            <div id='happy1' onClick={() => props.handleShow(true)}><b>Your Cart Lists</b>
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;
