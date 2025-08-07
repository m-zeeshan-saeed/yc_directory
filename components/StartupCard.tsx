import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // ✅ Use Next.js Link

const StartupCard = ({ post }: { post: StartupCardType }) => {
  const {
    _createdAT,
    views,
    author: { _id: authorId, name },
    title,
    category,
    _id,
    image,
  } = post;

  return (
    <li className="bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-xl shadow-pink-200 hover:border-pink-500 transition-all duration-500 hover:shadow-pink-500 hover:bg-pink-100 group">
      <div className="flex justify-between items-center">
        <p className="font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full group-hover:bg-white-100">
          {formatDate(_createdAT)}
        </p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="font-medium text-[16px] text-black">{views}</span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="font-medium text-[16px] text-black line-clamp-1">
              {name}
            </p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="font-semibold text-[26px] text-black line-clamp-1">
              {title}
            </h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src="https://via.placeholder.com/48" // ✅ Fixed image URL
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
    </li>
  );
};

export default StartupCard;
