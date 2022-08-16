import routes from "./routes";
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send(
    "Warehouse is running. \nPlease visit here for all products: http://localhost:8000/products/ \nTo check if a specific product can be sold, please add the name of the product to the end of the link above."
  );
});

app.use(routes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
