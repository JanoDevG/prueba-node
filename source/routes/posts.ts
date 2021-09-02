import express from 'express';
import controller from '../controllers/posts';

const router = express.Router();

router.get('/getIdFromPatent/:patent', controller.getId);
router.get('/getPatentFromId/:id', controller.getPatent);

export = router;