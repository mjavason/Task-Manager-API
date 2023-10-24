import { Router } from 'express';
const router = Router();
import {
  processRequestBody,
  processRequestParams,
  processRequestQuery,
} from 'zod-express-middleware';
import { taskController } from '../../../controllers';
import { taskValidation } from '../../../validation';

router.get('/search', processRequestQuery(taskValidation.find.query), taskController.find);

router.get('/count', processRequestQuery(taskValidation.find.query), taskController.getCount);

router.get('/exists', processRequestQuery(taskValidation.find.query), taskController.exists);

router.get('/', taskController.getAll);

router.get('/:pagination', taskController.getAll);

router.post('/', processRequestBody(taskValidation.create.body), taskController.create);

router.patch('/:id', processRequestBody(taskValidation.update.body), taskController.update);

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Delete a task
 *     description: Delete a task based on the provided ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the task to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully deleted the task.
 *       400:
 *         description: Bad request.
 *     tags:
 *       - Tasks
 */
router.delete('/:id', processRequestParams(taskValidation.delete.params), taskController.delete);

export default router;
