import { useState } from 'react';
import Card from 'react-bootstrap/Card';
function Show(props){
    const searchterm=props.searchvalue;
    const[data,setData]=useState([]);
    function update()
    {
        var url="";
          url=`https://api.tvmaze.com/search/shows?q=${searchterm}`;
        fetch(url).then((resp)=>{
            resp.json().then((result)=> setData(result));
        }).catch((e)=>{
            console.log("something wrong");
        });
    }
    update()
    return (
        <div className='showcontainer'>
            {
                data.map((item)=>{
                    if(item.show.summary!=null){
                        var blogs= item.show.summary;
                        blogs = blogs.replace(/<(.|\n)*?>/g, '');
                    }
                return(
                        <div>
                            <Card style={{ width: '260px', margin:"15px"}}>
                            {
                                    item.show.image!=null?(
                                        <Card.Img variant="top" src={item.show.image.medium} height="360" alt="No Image" />
                                    ):(
                                        <Card.Img variant="top" src="https://moviesked.ru/web/images/movie/noposter.jpg" height="360" width="260" alt="No Image"/>
                                    )
                            }
                            <Card.Body style={{backgroundColor:'black',margin:"0px"}}>
                                <Card.Title style={{textAlign:'center',fontSize:"20px",color:"white",textDecoration:'underline'}}>{item.show.name}</Card.Title>
                                <Card.Text style={{color:"white",margin:"10px",fontFamily:"Roboto",fontSize:"20px",height:"220px"}}>
                                    {blogs}
                                </Card.Text>       
                            </Card.Body>
                                                            
                        </Card>    
                        </div>             
                )
            }) 
        
        }
    </div>
    )
    

}
export default Show;