import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const blogPost = new Schema({
    title: {type: String},
    description: {type: String},
    img: {type: String}
},{
    timestamps: true
}
)
const bPost = mongoose.model( 'bPost', blogPost)
export default bPost