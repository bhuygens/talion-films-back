import {Request, Response, Router} from "express";
import {makeNotionApiRepositoryFactory} from "../../../factories/notion-api-repository.factory";
import {GetEventByIdUseCase} from "../../../../application/events/get-event-by-id.use-case";
import createError from "http-errors";
import {GetAllEventsUseCase} from "../../../../application/events/get-all-events-use-case";

export function createEventsRouter(): Router {
  const router = Router();
  router.get("/", async (req: Request, res: Response) => {
    try {
      const notionRepository = makeNotionApiRepositoryFactory();
      const events = await new GetAllEventsUseCase(notionRepository).execute();
      res.json(events);
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
      const event = await new GetEventByIdUseCase(notionRepository).execute({id});
      res.json(event);
    } catch (e) {
      res.status(404).json({
        message: e,
      })
    }
  });

  return router;
}
