import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="text-center">
      <h2 className="text-3xl">There was a problem.</h2>
      <p>We cound not find the page you were looking for</p>
      <p>
        Go back to the <Link href="/">Dashboard</Link>
      </p>
    </main>
  );
};

export default NotFound;
