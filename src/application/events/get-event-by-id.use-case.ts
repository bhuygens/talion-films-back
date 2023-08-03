import {UseCase} from "../../_core/interfaces/use-case.interface";
import {ApiRepository} from "../../domain/repositories/apiRepository";
import {EventModel} from "../../domain/model/eventModel";
import {CacheModule} from "../../_core/modules/cache.module";

type GetClipByIdParams = {
  id: string
}

export class GetEventByIdUseCase implements UseCase<GetClipByIdParams, EventModel> {
  private notionRepository: ApiRepository

  constructor(notionApiRepository: ApiRepository) {
    this.notionRepository = notionApiRepository;
  }

  async execute(params: GetClipByIdParams): Promise<EventModel> {
    try {
      const clipCached = await CacheModule.get<EventModel>(`event/${params.id}`);
      if (clipCached) {
        return clipCached;
      }
      const clip = await this.notionRepository.getEventById(params.id);
      await CacheModule.set(`event/${params.id}`, clip);
      return clip;
    } catch (e) {
      throw e;
    }
  }
}
