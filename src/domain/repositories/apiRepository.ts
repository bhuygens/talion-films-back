import {EventModel} from "../model/eventModel";
import {EventTypes} from "../../_core/interfaces/event-types.enum";

export interface ApiRepository {
  getAllFromType(type: EventTypes): Promise<EventModel[]>;

  getEventById(id: string): Promise<EventModel>;

  getRandomImages(): Promise<string[]>;
}
