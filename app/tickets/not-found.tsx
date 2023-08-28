import Link from "next/link";

const NotFound = () => {
  return (
    <main className="text-center">
      <h2 className="text-3xl">We Hit a Brick Wall.</h2>
      <p>We cound not find the ticket you were looking for</p>
      <p>
        Go back to all <Link href="/tickets">Tickets</Link>
      </p>
    </main>
  );
};

export default NotFound;
