
import { urlApi } from './urlapi';

const Addpost = async(data, callback) => {

fetch(urlApi, {
    method: 'post',
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
}).then(res => res.json())
.then(data => {
    console.log(data)
    callback()
})

}

export default Addpost