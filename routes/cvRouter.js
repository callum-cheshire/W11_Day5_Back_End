import express from 'express';
const cvRouter = express.Router();

import { getAllCVs, createCV, getCVById, updateCVById, deleteCVById } from "../models/cvModels.js";

cvRouter.get("/", async function (req, res){
    const allCVs = await getAllCVs();
    res.status(200).json(allCVs);
});

cvRouter.get("/:id", async function (req, res) {
    const cv = await getCVById(req.params.id);
    res.json({ success: true, payload: cv });
  });

cvRouter.post("/", async function (req, res){
    const newCV = req.body;
    const result = await createCV(newCV);
    res.status(200).json(result);
});

cvRouter.patch("/:id", async function (req, res) {
    const data = req.body;
    const updatedCV = await updateCVById(req.params.id, data);
    res.json({ success: true, payload: updatedCV });
});

cvRouter.delete("/:id", async function (req, res) {
  const result = await deleteCvById(req.params.id);
  res.json({ success: true, payload: result });
});

export default cvRouter;