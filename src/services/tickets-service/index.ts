import { notFoundError } from "@/errors";
import ticketRepository from "@/repositories/ticket-repository";
import { Ticket } from "@prisma/client";

async function getOneTicketByUserId(userId: number): Promise<Ticket[]> {
  const enrollmentWithTicket = await ticketRepository.findWithTicketByUserId(userId);

  if (enrollmentWithTicket?.Ticket.length < 1) throw notFoundError();
  const ticket = enrollmentWithTicket.Ticket;
  return ticket;
}

async function getOneTicketTypes(userId: number) {
  const enrollmentWithTicket = await ticketRepository.findWithTicketTypes(userId);

  const requestTicketType = enrollmentWithTicket;
  delete requestTicketType?.Ticket;
  if(!requestTicketType) {
    return [];
  }
  return [requestTicketType];
}

const ticketsService = {
  getOneTicketByUserId,
  getOneTicketTypes,
};

export default ticketsService;
