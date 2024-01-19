import {UseCase} from "../../_core/interfaces/use-case.interface";
import {NotionRepository} from "../../domain/repositories/notion.repository";
import {ClipModel} from "../../domain/model/clip.model";
import {CacheModule} from "../../_core/modules/cache.module";

type GetClipByIdParams = {
  id: string
}

export class GetClipByIdUseCase implements UseCase<GetClipByIdParams, ClipModel> {
  private notionRepository: NotionRepository

  constructor(notionApiRepository: NotionRepository) {
    this.notionRepository = notionApiRepository;
  }

  async execute(params: GetClipByIdParams): Promise<ClipModel> {
    try {
      const clipCached = await CacheModule.get<ClipModel>(`clip/${params.id}`);
      if (clipCached) {
        return clipCached;
      }
      const clip = await this.notionRepository.getClipById(params.id);
      await CacheModule.set(`clip/${params.id}`, clip);
      return clip;
    } catch (e) {
      throw e;
    }
  }
}
