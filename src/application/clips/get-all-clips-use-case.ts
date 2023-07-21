import {UseCase} from "../../_core/interfaces/use-case.interface";
import {NotionRepository} from "../../domain/repositories/notion.repository";
import {ClipModel} from "../../domain/model/clip.model";

export class GetAllClipsUseCase implements UseCase<any, ClipModel[]> {
  private notionRepository: NotionRepository

  constructor(notionApiRepository: NotionRepository) {
    this.notionRepository = notionApiRepository;
  }

  execute(params: any): Promise<ClipModel[]> {
    const clips = this.notionRepository.getClips();
    return clips;
  }
}
