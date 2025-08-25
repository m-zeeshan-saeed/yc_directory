import auth from "@/auth";
import StartupForm from "@/components/StartupForm";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth();
  if (!session) redirect("/");

  return (
    <>
      <section className="w-full bg-[#EE2B69] min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6">
        <div className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">
          Submit your startup
        </div>
      </section>
      <StartupForm />
    </>
  );
};

export default page;
