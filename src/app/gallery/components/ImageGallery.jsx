"use client";
import React from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import Link from "next/link";
import Image from "next/image";

const galleryItems = [
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/magdtxpz8sejtyewp1pv",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/magdtxpz8sejtyewp1pv",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/l5jyim7ids0ntzgjqe7c",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/l5jyim7ids0ntzgjqe7c",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/wtz23atwpmijqnitialo",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/wtz23atwpmijqnitialo",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/mjwnl2xxinsqnkgxc943",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/mjwnl2xxinsqnkgxc943",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/b7vytc3ahpcokqpeljun",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/b7vytc3ahpcokqpeljun",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/js74gtognfdmbozdnjpc",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/js74gtognfdmbozdnjpc",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/mbjz7jnor2lhyni8s6ae",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/mbjz7jnor2lhyni8s6ae",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/url1v9lk6cofiop3rawc",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/url1v9lk6cofiop3rawc",
  },
];

const MemoizedImage = React.memo(({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    layout="responsive"
    width={300}
    height={300}
    loading="lazy" // Lazy loading
    className="rounded-sm"
  />
));

// Setting the display name for the MemoizedImage component
MemoizedImage.displayName = "MemoizedImage";

const ImageGallery = () => {
  return (
    <div className="mx-auto py-5 px-4">
      <LightGallery
        speed={500}
        plugins={[lgThumbnail]}
        elementClassNames="masonry"
      >
        {galleryItems?.map((image, index) => (
          <Link href={image.thumbnail} key={index}>
            <div className="masonry-item relative shadow-lg hover:scale-105 transition-all ease-linear overflow-hidden">
              <MemoizedImage src={image.src} alt={`Le salama ${index}`} />
            </div>
          </Link>
        ))}
      </LightGallery>
    </div>
  );
};

export default ImageGallery;
