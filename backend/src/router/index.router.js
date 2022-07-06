import express from 'express';
import { addPost, allPosts, callPost, delPost, editPost } from '../controllers/post.controller.js';

const router = express.Router();



router.get('/', allPosts)

router.get('/:id', callPost)

router.post('/', addPost)

router.put('/', editPost)

router.delete('/:id', delPost)

export default router