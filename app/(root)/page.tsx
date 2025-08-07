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
      image:
        "https://www.freepik.com/free-photo/diverse-people-standing-beside-tablet-with-www-icon_3687009.htm#fromView=search&page=1&position=0&uuid=46f9a811-9937-4b7f-866c-6bb4213e8730&query=cdn+link+photos",
      title: "Simple Startup",
      category: "Technology",
    },
  ];
  return (
    <>
      <section className=" w-full bg-pink-400 min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6">
        <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">
          Pitch Your startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className="font-medium text-[20px] text-white max-w-2xl text-center break-words !important">
          Join our community of passionate founders and take your startup to the
          next level.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="px-6 py-10 max-w-7xl mx-auto">
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
