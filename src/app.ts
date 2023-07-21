import {createExpressAppFactory} from "./infrastructure/api/router";

require("dotenv").config();
const host = "localhost";
const port = 8080;

const app = createExpressAppFactory().apply("");

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

module.exports = app;
