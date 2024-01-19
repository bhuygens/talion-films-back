import {NotionPage} from "./notion-api.response";
import {ClipModel} from "../../../domain/model/clip.model";

export class NotionApiSerializer {
  public static deserializeAllClips(clips: NotionPage[]): ClipModel[] {
    const formattedClips: ClipModel[] = [];
    clips.forEach((clip: NotionPage) => formattedClips.push(NotionApiSerializer.deserializeClip(clip)));
    return formattedClips;
  }

  public static deserializeClip(clip: NotionPage): ClipModel {
    return {
      id: clip.id,
      project_name: clip.properties.project_name.rich_text[0].plain_text,
      client: clip.properties.client.title[0].plain_text,
      type: clip.properties.type_evenement.multi_select[0].name,
      image: clip.properties.image.rich_text[0].plain_text,
      date: clip.properties.event_date.date.start,
      details: JSON.parse(clip.properties.details.rich_text[0].plain_text)
    }
  }

}
