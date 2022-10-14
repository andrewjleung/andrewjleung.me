import Image from "next/image";
import DateRange from "../DateRange";

export default function ExperienceItem({
  name,
  startMonth,
  startYear,
  endMonth,
  endYear,
  jobTitle,
  children,
}) {
  return (
    <div className="px-6 py-4 mb-2 rounded-xl duration-100 ease-out hover:scale-105 hover:bg-gray-100">
      <div className="sm:grid sm:grid-cols-2">
        <div className="text-xl font-semibold ">{name}</div>
        <DateRange
          startMonth={startMonth}
          startYear={startYear}
          endMonth={endMonth}
          endYear={endYear}
          className="justify-self-end"
        ></DateRange>
        <div className="col-span-2 italic">{jobTitle}</div>
      </div>
      <ul>{children}</ul>
    </div>
  );
}
