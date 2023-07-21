import bodyParser from "body-parser";
import {NextFunction, Request, Response} from "express";

export default function expressConfig(app: any) {

  app.use(bodyParser.json({limit: "50mb"}));
  app.use(
    bodyParser.urlencoded({
      limit: "50mb",
      extended: true,
      parameterLimit: 50000,
    }),
  );

  app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With, Content-type, Authorization, Cache-control, Pragma",
    );
    res.setHeader("Access-Control-Allow-Origin", "*")
    next();
  });


}
