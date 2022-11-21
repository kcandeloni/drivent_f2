import { AuthenticatedRequest } from "@/middlewares";
import tiketsService from "@/services/tickets-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function getTicketByUser(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const enrollmentWithTicket = await tiketsService.getOneTicketByUserId(userId);

    return res.status(httpStatus.OK).send(enrollmentWithTicket);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function getTicketTypes(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const enrollmentWithTicketTypes = await tiketsService.getOneTicketTypes(userId);

    return res.status(httpStatus.OK).send(enrollmentWithTicketTypes);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}
