import express from "express";
import AdopterControllers from "../controllers/AdopterControllers";

const adopterRouter = express.Router();
const adopterController = new AdopterControllers();

adopterRouter.post("/", (req, res) =>
  adopterController.createAdopter(req, res),
);

export default adopterRouter;
