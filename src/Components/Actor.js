import { useState } from "react";
import Card from 'react-bootstrap/Card';
function Actor(props){
    const searchterm=props.searchvalue;
    const[data,setData]=useState([]);
    function update()
    {
        var url="";
        url=`https://api.tvmaze.com/search/people?q=${searchterm}`;
        fetch(url).then((resp)=>{
            resp.json().then((result)=> setData(result));
        }).catch((e)=>{
            console.log("something wrong");
        });
    }
    update();
    console.log(data);  
    return(
            <div className='showcontainer'>
            {    
                  data.map((item)=>
                  {
                      return(
                              <div>
                                  <Card style={{ width: '260px', margin:"15px"}}>
                                  {
                                          item.person.image!=null?(
                                              <Card.Img variant="top" src={item.person.image.medium} height="360" alt="No Image" />
                                          ):(
                                              <Card.Img variant="top" src="https://moviesked.ru/web/images/movie/noposter.jpg" height="360" width="260" alt="No Image"/>
                                          )
                                  }
                                      <Card.Body style={{backgroundColor:'black',margin:"0px"}}>
                                          <Card.Title style={{textAlign:'center',fontSize:"20px",color:"white",textDecoration:'underline'}}>{item.person.name}</Card.Title>     
                                      </Card.Body>
                                                                  
                                  </Card>    
                              </div>             
                      )
                  })        
                        
            }
            </div>
    )
}
 
export default Actor;