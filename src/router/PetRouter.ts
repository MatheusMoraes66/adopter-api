import express from "express";
import PetControllers from "../controllers/PetControllers";

const petRouter = express.Router();
const petController = new PetControllers();

petRouter.post("/", (req, res) => petController.createPet(req, res));
petRouter.get("/", (req, res) => petController.getPet(req, res));
petRouter.put("/:id", (req, res) => petController.updatePet(req, res));
petRouter.delete("/:id", (req, res) => petController.deletePet(req, res));
petRouter.post("/:id_adopter/:id_pet", (req, res) =>
  petController.adoptPet(req, res),
);

export default petRouter;
