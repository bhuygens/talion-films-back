import {UseCase} from "../../_core/interfaces/use-case.interface";
import {NotionRepository} from "../../domain/repositories/notion.repository";
import {ClipModel} from "../../domain/model/clip.model";
import {CacheModule} from "../../_core/modules/cache.module";

export class GetAllClipsUseCase implements UseCase<any, ClipModel[]> {
  private notionRepository: NotionRepository

  constructor(notionApiRepository: NotionRepository) {
    this.notionRepository = notionApiRepository;
  }

  async execute(params: any): Promise<ClipModel[]> {
    const clipsCached = await CacheModule.get<ClipModel[]>('clips');
    if (clipsCached) {
      return clipsCached;
    }
    const clips = await this.notionRepository.getClips();
    await CacheModule.set('clips', clips);
    return clips;
  }
}
