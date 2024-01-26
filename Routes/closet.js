import express from 'express';

import closetController from '../Controllers/closet.js';

const router = express.Router();

router.get('/:id', closetController.getCloset);
router.post('/addCloset', closetController.createCloset);
// shouldnt be needed
router.get('/category', closetController.getClosetCategory);

// check route below
router.get('/allItems', closetController.getAllItems);
// functioning route
router.post('/:closetId/addItem', closetController.addItem);
//functioning route
router.get('/:closetId/:category', closetController.getItemsByCategory);

export default router;











