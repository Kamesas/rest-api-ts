import express, { Express, Request, Response } from "express";

const app: Express = express();
app.use(express.json());

app
  .route("/user")
  .get((req: Request, res: Response) => {
    return res.json({
      name: "Alex",
    });
  })
  .post((req: Request, res: Response) => {
    return res.json({
      ...req?.body,
      workout: {
        pushUps: 30,
      },
    });
  });

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`running on port - ${port}`);
});
