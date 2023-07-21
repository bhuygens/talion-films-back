import {QueryDatabaseResponse} from "@notionhq/client/build/src/api-endpoints";
import {ClipModel} from "../model/clip.model";

export interface NotionRepository {
  getDatabase(): Promise<QueryDatabaseResponse | undefined>,

  getClips(): Promise<ClipModel[]>;

  getClipById(id: string): Promise<ClipModel>;
}
