import express from "express";
import AdopterControllers from "../controllers/AdopterControllers";

const adopterRouter = express.Router();
const adopterController = new AdopterControllers();

adopterRouter.post("/", (req, res) =>
  adopterController.createAdopter(req, res),
);

adopterRouter.get("/", (req, res) => adopterController.listAdopter(req, res));

adopterRouter.put("/:id", (req, res) =>
  adopterController.updateAdopter(req, res),
);

adopterRouter.delete("/:id", (req, res) =>
  adopterController.deleteAdopter(req, res),
);
export default adopterRouter;
