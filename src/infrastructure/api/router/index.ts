import "./home.route"
import {createHomeRouter} from "./home.route";
import express, {Express} from "express";
import expressConfig from "../index";
import {createClipsRouter} from "./clips.route";

export function createExpressAppFactory(): () => Express {
  return () => {
    const app = express();
    expressConfig(app);


    app.use("/home", createHomeRouter());
    app.use("/clips", createClipsRouter());

    return app;
  };
}
