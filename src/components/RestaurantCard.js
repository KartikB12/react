import {CDN_URL} from "../utils/constants";

const styleCard={
    backgroundColor: "#f0f0f0",
};
const RestaurantCard=(props)=>{
    const {resData} = props;
    const{cloudinaryImageId,name,avgRating,cuisines,deliveryTime,costForTwo} = resData?.data;
    return(
        <div className="res-card" style={styleCard}>
            <img 
              className="res-logo"
              alt= "res-logo"
              src ={CDN_URL+resData.data.cloudinaryImageId}/>
            <h3> {name} </h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}/5 Stars</h4>
            <h4>Rs.{(costForTwo)/2} for two</h4>
            <h4>Delivery in {deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;