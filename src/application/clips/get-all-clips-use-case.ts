import {UseCase} from "../../_core/interfaces/use-case.interface";
import {ApiRepository} from "../../domain/repositories/apiRepository";
import {CacheModule} from "../../_core/modules/cache.module";
import {EventModel} from "../../domain/model/eventModel";
import {EventTypes} from "../../_core/interfaces/event-types.enum";

export class GetAllClipsUseCase implements UseCase<any, EventModel[]> {
  private notionRepository: ApiRepository

  constructor(notionApiRepository: ApiRepository) {
    this.notionRepository = notionApiRepository;
  }

  async execute(): Promise<EventModel[]> {
    const clipsCached = await CacheModule.get<EventModel[]>('clips');
    if (clipsCached) {
      return clipsCached;
    }
    const clips = await this.notionRepository.getAllFromType(EventTypes.Clip);
    await CacheModule.set('clips', clips);
    return clips;
  }
}

