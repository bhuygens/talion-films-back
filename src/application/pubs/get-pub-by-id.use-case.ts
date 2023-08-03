import {UseCase} from "../../_core/interfaces/use-case.interface";
import {ApiRepository} from "../../domain/repositories/apiRepository";
import {EventModel} from "../../domain/model/eventModel";
import {CacheModule} from "../../_core/modules/cache.module";

type GetClipByIdParams = {
  id: string
}

export class GetPubByIdUseCase implements UseCase<GetClipByIdParams, EventModel> {
  private notionRepository: ApiRepository

  constructor(notionApiRepository: ApiRepository) {
    this.notionRepository = notionApiRepository;
  }

  async execute(params: GetClipByIdParams): Promise<EventModel> {
    try {
      const pubCached = await CacheModule.get<EventModel>(`pub/${params.id}`);
      if (pubCached) {
        return pubCached;
      }
      const pub = await this.notionRepository.getEventById(params.id);
      await CacheModule.set(`pub/${params.id}`, pub);
      return pub;
    } catch (e) {
      throw e;
    }
  }
}
