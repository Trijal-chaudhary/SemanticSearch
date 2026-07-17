import express from "express";
import { postSementicSearch } from "../controller/sementic.controller";

const postSementicSearchRouter = express.Router();

postSementicSearchRouter.post('/', postSementicSearch);

export default postSementicSearchRouter