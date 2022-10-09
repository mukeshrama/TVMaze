import { useState } from "react";
import SearchBar from "../Components/SearchBar";
const Homepage=()=>{
    const[searchbar,setSearchbar]=useState("false");
    const[val,setValue]=useState("");
    console.log(val);
    return(
        <div className="homepage">
            <div className="radio-box">
            <input type="radio" value="Actor"  onClick={(e)=>{setSearchbar("true");setValue(e.target.value)}} className="radio-btn" name="search"/>Actor
            <input type="radio" value="Show"   onClick={(e)=>{setSearchbar("true");setValue(e.target.value)}} className="radio-btn" name="search"/>Show
            </div>
            <div>
                {
                    searchbar=="true"?<SearchBar name={val}/>:null
                }
            </div>
        </div>
        
    )
}

export default Homepage;