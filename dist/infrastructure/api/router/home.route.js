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
exports.createHomeRouter = void 0;
const express_1 = require("express");
const get_database_use_case_1 = require("../../../application/get-database.use-case");
const notion_api_repository_factory_1 = require("../../factories/notion-api-repository.factory");
function createHomeRouter() {
    const router = (0, express_1.Router)();
    router.get("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
        const notionRepository = (0, notion_api_repository_factory_1.makeNotionApiRepositoryFactory)();
        const database = yield new get_database_use_case_1.GetDatabaseUseCase(notionRepository).execute("");
        res.send(database);
    }));
    return router;
}
exports.createHomeRouter = createHomeRouter;
//# sourceMappingURL=home.route.js.map