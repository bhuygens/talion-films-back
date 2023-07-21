import {NotionRepository} from "../../../domain/repositories/notion.repository";
import {Client} from "@notionhq/client";
import {QueryDatabaseResponse} from "@notionhq/client/build/src/api-endpoints";
import {ClipModel} from "../../../domain/model/clip.model";
import {NotionApiSerializer} from "./notion-api.serializer";
import {NotionPage} from "./notion-api.response";

export class NotionApiRepository implements NotionRepository {
  private notion: Client;

  constructor() {
    this.notion = new Client({
      auth: "secret_k9Rpae1NgR1Ms40xjVs4lFvraIkAm1i2ZNO1L4BS6cD",
    });
  }

  public async getDatabase(): Promise<QueryDatabaseResponse | undefined> {
    const [database] = await Promise.all([this.notion.databases.query({
      database_id: "92a7528ba93e4248bd44f294a65167d3",
    })]);
    return database;
  }

  public async getClips(): Promise<ClipModel[]> {
    try {
      const clips = await this.notion.databases.query({
        database_id: "92a7528ba93e4248bd44f294a65167d3",
        filter: {
          property: "type_evenement",
          multi_select: {
            contains: "Clip",
          },
        },
      });
      return NotionApiSerializer.deserializeAllClips(clips.results as NotionPage[]);
    } catch (e) {
      throw e;
    }
  }

  async getClipById(id: string): Promise<ClipModel> {
    try {
      const clip = await this.notion.pages.retrieve({page_id: id});
      return NotionApiSerializer.deserializeClip(clip as unknown as NotionPage)
    } catch (e) {
      console.log(e)
      throw e;
    }

  }

}
