import {NotionRepository} from "../../domain/repositories/notion.repository";
import {NotionApiRepository} from "../providers/notion/notion-api.repository";

export function makeNotionApiRepositoryFactory(): NotionRepository {
  return new NotionApiRepository();
}
