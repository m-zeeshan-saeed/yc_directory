import SearchForm from "../../components/SearchForm";
import StartupCard from "../../components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAT: new Date(),
      views: 55,
      author: { _id: 1, name: "John Doe" },
      _id: 1,
      description: "this is the description.",
      image: "",
      title: "Sample Startup",
    },
  ];
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
      <section className="py-6 py10 max-w-7xl mx-auto">
        <p className="font-semibold text-[30px] text-black-100">
          {query ? `search results for: "${query}"` : "All startups"}
        </p>
        <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="text-black-100 text-sm font-normal">
              No startups found.
            </p>
          )}
        </ul>
      </section>
    </>
  );
}
