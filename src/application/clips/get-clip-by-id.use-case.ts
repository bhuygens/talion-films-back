import {UseCase} from "../../_core/interfaces/use-case.interface";
import {NotionRepository} from "../../domain/repositories/notion.repository";
import {ClipModel} from "../../domain/model/clip.model";

type GetClipByIdParams = {
  id: string
}

export class GetClipByIdUseCase implements UseCase<GetClipByIdParams, ClipModel> {
  private notionRepository: NotionRepository

  constructor(notionApiRepository: NotionRepository) {
    this.notionRepository = notionApiRepository;
  }

  execute(params: GetClipByIdParams): Promise<ClipModel> {
    try {
      const clip = this.notionRepository.getClipById(params.id);
      return clip;
    } catch (e) {
      throw e;
    }
  }
}
