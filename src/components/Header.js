import {LOGO_URL} from "../utils/constants";

const Header=()=>{
    return(
        <div className="header">
            <div>
                < img className="logo" src={LOGO_URL}></img>
            </div>
            <div>
                < h1 className="name">Kartik's Food Delivery App</h1>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
                
            </div>

        </div>
    )
}

export default Header;