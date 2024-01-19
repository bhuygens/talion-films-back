"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClipsRouter = void 0;
const express_1 = require("express");
const notion_api_repository_factory_1 = require("../../factories/notion-api-repository.factory");
const get_clips_use_case_1 = require("../../../application/clips/get-clips.use-case");
function createClipsRouter() {
    const router = (0, express_1.Router)();
    router.get("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
        const notionRepository = (0, notion_api_repository_factory_1.makeNotionApiRepositoryFactory)();
        const clips = yield new get_clips_use_case_1.GetClipsUseCase(notionRepository).execute("");
        res.send(clips);
    }));
    return router;
}
exports.createClipsRouter = createClipsRouter;
//# sourceMappingURL=clips.route.js.map