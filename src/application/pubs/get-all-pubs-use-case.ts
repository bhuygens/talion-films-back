import {UseCase} from "../../_core/interfaces/use-case.interface";
import {ApiRepository} from "../../domain/repositories/apiRepository";
import {EventModel} from "../../domain/model/eventModel";
import {CacheModule} from "../../_core/modules/cache.module";
import {EventTypes} from "../../_core/interfaces/event-types.enum";

export class GetAllPubsUseCase implements UseCase<any, EventModel[]> {
  private notionRepository: ApiRepository

  constructor(notionApiRepository: ApiRepository) {
    this.notionRepository = notionApiRepository;
  }

  async execute(): Promise<EventModel[]> {
    const pubsCached = await CacheModule.get<EventModel[]>("pubs");
    if (pubsCached) {
      return pubsCached;
    }
    const pubs = await this.notionRepository.getAllFromType(EventTypes.Pub);
    await CacheModule.set("pubs", pubs);
    return pubs;
  }
}
