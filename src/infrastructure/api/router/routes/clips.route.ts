import {Request, Response, Router} from "express";
import {makeNotionApiRepositoryFactory} from "../../../factories/notion-api-repository.factory";
import {GetAllClipsUseCase} from "../../../../application/clips/get-all-clips-use-case";
import {GetClipByIdUseCase} from "../../../../application/clips/get-clip-by-id.use-case";

const createError = require('http-errors')

export function createClipsRouter(): Router {
  const router = Router();
  router.get("/", async (req: Request, res: Response) => {
    try {
      const notionRepository = makeNotionApiRepositoryFactory();
      const clips = await new GetAllClipsUseCase(notionRepository).execute();
      res.json(clips);
    } catch (e) {
      res.status(404).json({
        message: e,
      })
    }
  });

  router.get("/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      if (!id) {
        new createError.NotFound('no id where found');
      }
      const notionRepository = makeNotionApiRepositoryFactory();
      const clip = await new GetClipByIdUseCase(notionRepository).execute({id});
      res.json(clip);
    } catch (e) {
      res.status(404).json({
        message: e,
      })
    }
  });

  return router;
}
