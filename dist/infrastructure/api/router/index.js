"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExpressAppFactory = void 0;
require("./home.route");
const home_route_1 = require("./home.route");
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../index"));
const clips_route_1 = require("./clips.route");
function createExpressAppFactory() {
    return () => {
        const app = (0, express_1.default)();
        (0, index_1.default)(app);
        app.disable("x-powered-by");
        app.use("/home", (0, home_route_1.createHomeRouter)());
        app.use("/clips", (0, clips_route_1.createClipsRouter)());
        return app;
    };
}
exports.createExpressAppFactory = createExpressAppFactory;
//# sourceMappingURL=index.js.map