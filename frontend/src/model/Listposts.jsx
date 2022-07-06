import { urlApi } from "./urlapi"



const Listposts = async (setListPosts) => {

    await fetch(urlApi,{method: "get"})
    .then(res => res.json())
    .then( data => {
        setListPosts(data)
    })
    .catch(err => console.log(err))
 
}

export default Listposts