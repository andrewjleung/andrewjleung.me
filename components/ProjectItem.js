import Image from "next/image";

export default function ProjectItem({
  imageSrc,
  imageAlt,
  href,
  title,
  description,
}) {
  return (
    <a
      className="px-6 py-4 no-underline rounded-xl duration-100 ease-out flex flex-col sm:flex-row items-center gap-5 hover:scale-105 hover:bg-gray-100 active:scale-100"
      href={href}
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
