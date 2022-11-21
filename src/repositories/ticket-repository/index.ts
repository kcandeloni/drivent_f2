import { prisma } from "@/config";

async function findWithTicketByUserId(userId: number) {
  return prisma.enrollment.findFirst({
    where: { 
      userId: userId || 0 },
    include: {
      Ticket: {
        include: {
          TicketType: true,
        },
      },
    },
  });
}

async function findWithTicketTypes(userId: number) {
  return prisma.ticketType.findFirst({
    where: { 
      Ticket: {
        some: {
          Enrollment: {
            userId: userId | 0
          }
        }
      },
    },
    include: {
      Ticket: {
        include: {
          Enrollment: true
        },
      },
    },
  });
}

const ticketRepository = {
  findWithTicketByUserId,
  findWithTicketTypes
};

export default ticketRepository;
