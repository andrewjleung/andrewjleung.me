import cn from "classnames";

const toMonthName = (monthNumber) => {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date
    .toLocaleString("en-US", {
      month: "long",
    })
    .slice(0, 3);
};

export default function DateRange({
  startMonth,
  startYear,
  endMonth,
  endYear,
  className = "",
}) {
  return (
    <div className={cn(className)}>
      {toMonthName(startMonth)} {startYear} - {toMonthName(endMonth)} {endYear}
    </div>
  );
}
