import  bPost  from "../models/post.model.js";

export const allPosts = async(req,res)=>{
    const data = await bPost.find()
   
     res.json(data)
}
export const callPost = async (req,res)=>{
    const {id} = req.params;
    const data = await bPost.findById(id)

    res.json(data)
}
export const addPost = async (req,res) =>{
    const {title, description} = req.body;

    const newPost = await new bPost({title,description})
    await newPost.save()
    res.json('Agregado')

}
export const editPost = async (req,res)=>{
    const data = await req.body;
   await bPost.updateOne({_id: data.id}, data)
    res.json('editado')

}
export const delPost = async ( req,res)=>{
    const id = req.params.id;
    await bPost.remove({_id: id})
    res.json('Borrado')
}


