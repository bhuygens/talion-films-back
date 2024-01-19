"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClipsUseCase = void 0;
class GetClipsUseCase {
    constructor(notionApiRepository) {
        this.notionRepository = notionApiRepository;
    }
    execute(params) {
        const clips = this.notionRepository.getClips();
        return clips;
    }
}
exports.GetClipsUseCase = GetClipsUseCase;
//# sourceMappingURL=get-clips.use-case.js.map