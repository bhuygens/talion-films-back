import {ApiRepository} from "../../../domain/repositories/apiRepository";
import {Client} from "@notionhq/client";
import {QueryDatabaseResponse} from "@notionhq/client/build/src/api-endpoints";
import {EventModel} from "../../../domain/model/eventModel";
import {NotionApiSerializer} from "./notion-api.serializer";
import {NotionPage} from "./notion-api.response";
import * as console from "console";

export class NotionApiRepository implements ApiRepository {
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

  public async getAllFromType(type: string): Promise<EventModel[]> {
    try {
      const clips = await this.notion.databases.query({
        database_id: "92a7528ba93e4248bd44f294a65167d3",
        filter: {
          property: "type_evenement",
          multi_select: {
            contains: type,
          },
        },
      });
      return NotionApiSerializer.deserializeAllClips(clips.results as NotionPage[]);
    } catch (e) {
      throw e;
    }
  }

  async getEventById(id: string): Promise<EventModel> {
    try {
      const clip = await this.notion.pages.retrieve({page_id: id});
      return NotionApiSerializer.deserializeClip(clip as unknown as NotionPage)
    } catch (e) {
      console.log(e)
      throw e;
    }

  }

  async getRandomImages(): Promise<any[]> {
    try {
      const request = await this.notion.databases.query({
        database_id: "92a7528ba93e4248bd44f294a65167d3",
      });

      const images: any[] = [];
      const response = request.results as NotionPage[];
      response.forEach((notionPage) => {
        const imageData = notionPage.properties.image?.rich_text || [];
        const imageContents = imageData.map((image) => image.text?.content).filter(Boolean);
        images.push({
          id: notionPage.id,
          image: imageContents[0],
          type: notionPage.properties.type_evenement.multi_select[0].name,
        });
      });
      return this.shuffleArray(images);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  private shuffleArray(array: string[]): string[] {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
  }

}
