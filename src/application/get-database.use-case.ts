import {UseCase} from "../_core/interfaces/use-case.interface";
import {NotionRepository} from "../domain/repositories/notion.repository";
import {QueryDatabaseResponse} from "@notionhq/client/build/src/api-endpoints";

export interface GetDatabaseUseCaseParams {
}

export class GetDatabaseUseCase
  implements UseCase<GetDatabaseUseCaseParams, QueryDatabaseResponse | undefined> {
  private notionRepository: NotionRepository;

  constructor(notionApiRepository: NotionRepository) {
    this.notionRepository = notionApiRepository;
  }

  public async execute(
    params: GetDatabaseUseCaseParams,
  ): Promise<QueryDatabaseResponse | undefined> {
    try {
      return await this.notionRepository.getDatabase();
    } catch (e) {
      throw e;
    }
  }
}
