import {Request, Response, Router} from "express";
import {GetDatabaseUseCase} from "../../../application/get-database.use-case";
import {makeNotionApiRepositoryFactory} from "../../factories/notion-api-repository.factory";

export function createHomeRouter(): Router {
  const router = Router();

  router.get("/", async (req: Request, res: Response) => {

    const notionRepository = makeNotionApiRepositoryFactory();
    const database = await new GetDatabaseUseCase(notionRepository).execute("");

    res.send(database);
  });

  return router;
}
