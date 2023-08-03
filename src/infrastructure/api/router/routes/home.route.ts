import {Request, Response, Router} from "express";
import {makeNotionApiRepositoryFactory} from "../../../factories/notion-api-repository.factory";
import {GetRandomImagesUseCase} from "../../../../application/common/get-random-images.use-case";

export function createCommonRouter(): Router {
  const router = Router();


  router.get("/random-images", async (req: Request, res: Response) => {
    const notionRepository = makeNotionApiRepositoryFactory();
    const images = await new GetRandomImagesUseCase(notionRepository).execute();
    res.json(images)
  });
  return router;
}
