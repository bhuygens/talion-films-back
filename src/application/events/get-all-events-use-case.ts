import {UseCase} from "../../_core/interfaces/use-case.interface";
import {ApiRepository} from "../../domain/repositories/apiRepository";
import {EventModel} from "../../domain/model/eventModel";
import {CacheModule} from "../../_core/modules/cache.module";
import {EventTypes} from "../../_core/interfaces/event-types.enum";

export class GetAllEventsUseCase implements UseCase<any, EventModel[]> {
  private notionRepository: ApiRepository

  constructor(notionApiRepository: ApiRepository) {
    this.notionRepository = notionApiRepository;
  }

  async execute(): Promise<EventModel[]> {
    const eventsCached = await CacheModule.get<EventModel[]>("events");
    if (eventsCached) {
      return eventsCached;
    }
    const events = await this.notionRepository.getAllFromType(EventTypes.Event);
    await CacheModule.set("events", events);
    return events;
  }
}
