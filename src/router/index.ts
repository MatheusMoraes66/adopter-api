import express from "express";

import petRouter from "./PetRouter";
import adopter from "./AdopterRouter";

function router(app: express.Router) {
  app.use("/pets", petRouter);
  app.use("/adopter", adopter);
  return app;
}

export default router;
