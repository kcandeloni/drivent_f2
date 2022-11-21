import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getTicketByUser, getTicketTypes } from "@/controllers/tickets-controller";

const ticketsRouter = Router();

ticketsRouter
  .all("/*", authenticateToken)
  .get("/types", getTicketTypes)
  .get("/", getTicketByUser)
  .post("/");

export { ticketsRouter };
