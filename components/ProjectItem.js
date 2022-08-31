import Image from "next/image";

export default function ProjectItem({
  imageSrc,
  imageAlt,
  title,
  description,
}) {
  return (
    <a
      className="w-fit px-6 py-4 no-underline rounded-xl hover:shadow-lg duration-200 ease-out active:shadow-none flex flex-col sm:flex-row items-center gap-5"
      href="https://github.com/andrewjleung/fantano-reviews"
    >
      <Image
        width="150"
        height="150"
        src={imageSrc}
        alt={imageAlt}
        className="rounded-full"
      />
      <div id="content">
        <div className="text-xl font-semibold mb-1">{title}</div>
        <div className=" text-sm mb-1 font-normal">{description}</div>
      </div>
    </a>
  );
}
