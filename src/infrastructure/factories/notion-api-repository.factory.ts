import {ApiRepository} from "../../domain/repositories/apiRepository";
import {NotionApiRepository} from "../providers/notion/notion-api.repository";

export function makeNotionApiRepositoryFactory(): ApiRepository {
  return new NotionApiRepository();
}
