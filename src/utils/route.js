import express from 'express';
let router = express.Router(); 

export const GET = (path, handler, config = {}) => router.get(path, handler);

export const POST = (path, handler, config = {}) => router.post(path, handler);


