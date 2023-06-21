import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>{
    return(
        <div className="header">
            <div>
                < img className="logo" src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-fast-delivery-service-sign-food-delivery-app-vector-logo-design-template-167491511.jpg"></img>
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

const styleCard={
    backgroundColor: "#f0f0f0",
};

const RestaurantCard=(props)=>{
    console.log(props);
    return(
        <div className="res-card" style={styleCard}>
            <img 
              className="res-logo"
              alt= "res-logo"
              src ="https://b.zmtcdn.com/data/pictures/chains/1/50691/ecfdc75d21bd7cd9d880f05c8382bc65.jpg"/>
            <h3> {props.resName} </h3>
            <h4>{props.cuisine}</h4>
            <h4>4.4 stars</h4>
            <h4>Delivery in 38 minutes</h4>
        </div>
    )
}


const Body = ()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resName="Meghana Foods" cuisine="Biryani, Continental, Chinese"/> 
                <RestaurantCard resName="KFC" cuisine="Burgers"/> 
            </div>
        </div>
    );
}

//Food ordering app(Visual in notes)
const AppLayout = ()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
       
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);