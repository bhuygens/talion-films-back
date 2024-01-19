"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeNotionApiRepositoryFactory = void 0;
const notion_api_repository_1 = require("../providers/notion/notion-api.repository");
function makeNotionApiRepositoryFactory() {
    return new notion_api_repository_1.NotionApiRepository();
}
exports.makeNotionApiRepositoryFactory = makeNotionApiRepositoryFactory;
//# sourceMappingURL=notion-api-repository.factory.js.map