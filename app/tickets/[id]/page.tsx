import { notFound } from "next/navigation";
import { TicketType } from "../TicketList";

type TicketDetailsProps = {
  params: {
    id: string;
  };
};

const getTicket = async (id: string) => {
  const response = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    notFound();
  }
  return response.json();
};

const TicketDetails = async ({ params }: TicketDetailsProps) => {
  const id = params.id;
  const ticket: TicketType = await getTicket(id);

  return (
    <main>
      <nav>
        <h2>TicketDetails</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
};

export default TicketDetails;
