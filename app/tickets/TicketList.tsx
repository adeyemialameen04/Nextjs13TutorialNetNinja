import Link from "next/link";

export type TicketType = {
  id: string;
  title: string;
  body: string;
  priority: string;
  user_email: string;
};

const getTickets = async () => {
  const response = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0, // *** use 0 to opt out of caches
    },
  });
  return response.json();
};

const TicketList = async () => {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket: TicketType) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
    </>
  );
};

export default TicketList;
