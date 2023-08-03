import "./routes/home.route"
import {createCommonRouter} from "./routes/home.route";
import express, {Express} from "express";
import expressConfig from "../index";
import {createClipsRouter} from "./routes/clips.route";
import {createEventsRouter} from "./routes/events.route";
import {createPubsRouter} from "./routes/pubs.route";

export function createExpressAppFactory(): () => Express {
  return () => {
    const app = express();
    expressConfig(app);

    app.use("/common", createCommonRouter());
    app.use("/clip", createClipsRouter());
    app.use("/event", createEventsRouter());
    app.use("/pub", createPubsRouter());

    return app;
  };
}
