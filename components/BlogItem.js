export default function BlogItem({ title, description }) {
  return (
    <a
      className="w-fit px-6 py-4 no-underline rounded-xl hover:shadow-lg duration-200 ease-out active:shadow-none"
      href="./blog/quitters"
    >
      <div className="text-xl font-semibold mb-1">{title}</div>
      <div className="text-sm mb-1 font-normal">{description}</div>
    </a>
  );
}
