import Listposts from "./Listposts";
import { urlApi } from "./urlapi"

Listposts
const Delpost = (id, setListPosts) => {
  
    fetch(`${urlApi}/${id}`,{method:"delete"})
    .then( res => res.json())
    .then( data => {
        console.log(data);
        Listposts(setListPosts)
    })
}

export default Delpost