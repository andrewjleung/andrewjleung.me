export default function BlogItem({ title, description }) {
  return (
    <a
      className="w-fit px-6 py-4 no-underline rounded-xl duration-200 ease-out hover:scale-105 hover:bg-gray-100 active:scale-100"
      href="./blog/quitters"
    >
      <div className="text-xl font-semibold mb-1">{title}</div>
      <div className="text-sm mb-1 font-normal">{description}</div>
    </a>
  );
}
