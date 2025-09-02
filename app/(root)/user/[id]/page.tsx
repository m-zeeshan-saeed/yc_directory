import auth from "@/auth";
import { client } from "@/sanity/lib/client";
import { AUTHOR_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const session = await auth();
  console.log("Session:", session);
  console.log("Route param ID:", id);
  const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });
  console.log("Fetched user:", user);
  if (!user) return notFound();

  return <div>{user.name}</div>;
};

export default page;
