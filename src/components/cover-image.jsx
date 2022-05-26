import { Image } from "react-datocms";
import cn from "classnames";
// import Link from "next/link";

export default function CoverImage({ title, responsiveImage, slug }) {
  const image = (
    <Image
      lazyLoad={false}
      data={{
        ...responsiveImage,
        alt: `Cover Image for ${title}`,
      }}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    />
  );
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <a href={`/posts/${slug}`} aria-label={title}>
          {image}
        </a>
      ) : (
        image
      )}
    </div>
  );
}
