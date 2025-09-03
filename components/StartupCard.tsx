import { cn, formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // ✅ Use Next.js Link
import { Button } from "./ui/button";
import { Author, Startup } from "@/sanity/types";
import { Skeleton } from "./ui/skeleton";

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    author,
    title,
    category,
    _id,
    image,
    description,
  } = post;

  return (
    <li className=" bg-white border-[10px] border-black py-6 px-5 rounded-[22px] shadow-[2px 2px 0px 2px rgb(0, 0, 0)] hover:border-[#eebcce] transition-all duration-500 hover:shadow-[2px 2px 0px 2px rgb(238, 43, 105)] hover:bg-[#FFE8F0] group border-r-2 border-b-2">
      <div className="flex justify-between items-center">
        <p className="font-medium text-[16px] bg-[#FFE8F0] px-4 py-2 rounded-full group-hover:bg-[#F7F7F7]">
          {formatDate(_createdAt)}
        </p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-pink-300" />
          <span className="font-medium text-[16px] text-black">{views}</span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="font-medium text-[16px] text-black line-clamp-1">
              {author?.name}
            </p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="font-semibold text-[26px] text-black line-clamp-1">
              {title}
            </h3>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
          <Image
            src={author?.image ?? "logo.png"}
            alt={author?.name ?? "Use avatar"}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
        <p className="font-normal text-[16px] line-clamp-2 my-3 text-[#333333] break-all">
          {description}
        </p>
        <Image
          src={image ?? "/"}
          alt="placeholder"
          width={500}
          height={164}
          className="w-full h-[164px] rounded-[10px] object-cover"
        />
      </Link>
      <div className="flex justify-between items-center gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="font-medium text-[16px] text-black">{category}</p>
        </Link>
        <Button
          className="rounded-full bg-[#141413] font-medium text-[16px] text-white px-5 py-3 !important"
          asChild
        >
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;

export const StartupCardSkeleton = () => {
  return (
    <>
      {[0, 1, 2, 3, 4].map((index: number) => (
        <li key={cn("Skeleton", index)}>
          <Skeleton className="w-full h-96 rounded-[22px] bg-zinc-400" />
        </li>
      ))}
    </>
  );
};
