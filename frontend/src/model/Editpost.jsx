import { urlApi } from "./urlapi"


const Editpost = (id, data, callback) => {
  fetch(urlApi, {
    method:"put",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
    
  }).then(res => res.json())
  .then( data=>{
    callback()
  })
}

export default Editpost