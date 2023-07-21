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
exports.NotionApiRepository = void 0;
const client_1 = require("@notionhq/client");
const notion_api_serializer_1 = require("./notion-api.serializer");
const notion = new client_1.Client({
    auth: "secret_k9Rpae1NgR1Ms40xjVs4lFvraIkAm1i2ZNO1L4BS6cD",
});
class NotionApiRepository {
    getDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            const [database] = yield Promise.all([notion.databases.query({
                    database_id: "92a7528ba93e4248bd44f294a65167d3",
                })]);
            return database;
        });
    }
    getClips() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clips = yield notion.databases.query({
                    database_id: "92a7528ba93e4248bd44f294a65167d3",
                    filter: {
                        property: "type_evenement",
                        multi_select: {
                            contains: "Clip",
                        },
                    },
                });
                return notion_api_serializer_1.NotionApiSerializer.deserializeClips(clips.results);
            }
            catch (e) {
                throw e;
            }
        });
    }
}
exports.NotionApiRepository = NotionApiRepository;
//# sourceMappingURL=notion-api.repository.js.map