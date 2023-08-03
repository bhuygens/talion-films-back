import {UseCase} from "../../_core/interfaces/use-case.interface";
import {ApiRepository} from "../../domain/repositories/apiRepository";
import {CacheModule} from "../../_core/modules/cache.module";

export class GetRandomImagesUseCase implements UseCase<any, string[]> {
  private readonly repository: ApiRepository;

  constructor(notionApiRepository: ApiRepository) {
    this.repository = notionApiRepository;
  }

  async execute(): Promise<string[]> {
    const imagesCached = await CacheModule.get<string[]>("images");
    if (imagesCached) {
      // return imagesCached;
    }
    const images = await this.repository.getRandomImages();
    await CacheModule.set("images", images);
    return images
  }
}
