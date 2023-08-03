import {Request, Response, Router} from "express";
import {makeNotionApiRepositoryFactory} from "../../../factories/notion-api-repository.factory";
import {GetPubByIdUseCase} from "../../../../application/pubs/get-pub-by-id.use-case";
import {GetAllPubsUseCase} from "../../../../application/pubs/get-all-pubs-use-case";

import createError from "http-errors";

export function createPubsRouter(): Router {
  const router = Router();
  router.get("/", async (req: Request, res: Response) => {
    try {
      const notionRepository = makeNotionApiRepositoryFactory();
      const pubs = await new GetAllPubsUseCase(notionRepository).execute();
      res.json(pubs);
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
        new createError.NotFound("no id where found");
      }
      const notionRepository = makeNotionApiRepositoryFactory();
      const pub = await new GetPubByIdUseCase(notionRepository).execute({id});
      res.json(pub);
    } catch (e) {
      res.status(404).json({
        message: e,
      })
    }
  });

  return router;
}
