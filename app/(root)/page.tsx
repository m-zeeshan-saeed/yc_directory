import SearchForm from "../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  return (
    <>
      <section className=" w-full bg-pink-400 min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6">
        <h1 className="heading">
          Pitch Your startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className="font-medium text-[20px] text-white max-w-2xl text-center break-words !important">
          Join our community of passionate founders and take your startup to the
          next level.
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
}
