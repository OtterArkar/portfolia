import Link from "next/link";
import dateformat from "dateformat";
import type { ArticlCardType } from "types/articles";
import Image from "next/image";

export default function HomeBlogCard({
  title,
  description,
  slug,
  releasedAt,
  mainImage,
  categories,
}: ArticlCardType) {
  return (
    <Link
      href={`/articles/${slug}`}
      className="flex flex-col items-center gap-4 p-4 transition-all duration-500 rounded-md cursor-pointer md:flex-row bg-theme-accent-opaque hover:bg-gradient-to-r hover:from-theme-primary-opaque "
    >
      <div className="basis-[70%]">
        <h2 className="text-lg font-bold text-white">{title}</h2>
        <div className="flex justify-between">
          <span className="block my-1 text-sm font-bold text-theme-primary">
            {dateformat(releasedAt, "mediumDate")}
          </span>
          {categories && (
            <div className="flex items-center gap-2 ">
              {categories.map((category) => (
                <div key={category}>
                  <span className="text-sm ">{category}</span>
                  <span className="text-theme-accent"> / </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <p className="my-2 text-sm line-clamp-2">{description}</p>
      </div>
      <div className="justify-end w-full ml-auto md:w-auto">
        <Image
          src={mainImage}
          alt={title}
          width={150}
          height={150}
          className="w-full md:w-[150px] min-h-[100px] object-cover rounded-md max-h-[170px]"
        ></Image>
      </div>
    </Link>
  );
}
