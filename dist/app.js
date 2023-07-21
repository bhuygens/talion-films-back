"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("./infrastructure/api/router");
require("dotenv").config();
const host = "localhost";
const port = 8080;
const app = (0, router_1.createExpressAppFactory)().apply("");
app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
module.exports = app;
//# sourceMappingURL=app.js.map