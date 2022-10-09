import {useEffect, useState } from "react";
import Actor from './Actor';
import Show from './Show';
function SearchBar(props){
    const [searchterm,setSearch]=useState("");
    return(
        <div className="serachbar">
                <input className="searchbox" type="text" onChange={(e)=>{setSearch(e.target.value)}} placeholder={"Search By "+props.name}
                /> 
            <div>
                   {
                    props.name==="Actor"?
                    <Actor searchvalue={searchterm}/>:<Show searchvalue={searchterm}/>
                   }
                
            </div>        
        </div>  
        
    )
}
export default SearchBar;