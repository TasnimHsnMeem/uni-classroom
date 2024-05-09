import express from 'express';

import { PostController } from './post.controller';

const router = express.Router();

router.get('/', PostController.getAllPosts).post('/', PostController.createPost);

router.get('/:id', PostController.getSinglePost).patch('/:id', PostController.updatePost).delete('/:id', PostController.deleteSinglePost);

router.post('/upload', PostController.uploadImage);

export const PostRoutes = router;
