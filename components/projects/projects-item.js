import Image from "next/image";

export default function ProjectsItem({ data }) {
  const { icon, properties, cover } = data;
  const icons = icon.emoji;
  const title = properties.Name.title[0].plain_text;
  const start = properties.Date.date.start;
  const end = properties.Date.date.end;
  const stack = properties.Stack.multi_select;
  const team = properties.Team.rich_text[0].plain_text;
  const description = properties.Description.rich_text[0].plain_text;
  const imgSrc = cover?.file?.url || cover?.external.url;

  const calculatedPeriod = (start, end) => {
    const [startYear, startMonth, startDay] = start.split("-");
    const [endYear, endMonth, endDay] = end.split("-");

    const startDate = new Date(startYear, startMonth, startDay);
    const endDate = new Date(endYear, endMonth, endDay);

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    console.log(`기간 : ${result}`);
    return result;
  };

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        alt="image"
        src={imgSrc}
        layout="responsive"
        objectFit="none"
        quality={100}
        width={100}
        height={60}
      />
      <div className="p-4 flex flex-col w-full">
        <h1 className="text-xl font-bold">
          {icons} {title}
        </h1>
        <h3 className="flex mb-2">
          {`${start} ~ ${end} (${calculatedPeriod(start, end)}일)`}
        </h3>

        <div className="mb-2 flex items-start">
          {stack.map((items) => (
            <h1
              className="mr-2 p-1 rounded-md"
              key={items.id}
              style={{
                backgroundColor: items.color,
                color: items.color === "blue" ? "white" : "black",
              }}
            >
              {items.name}
            </h1>
          ))}
        </div>
        <div>{team}</div>
        <div>{description}</div>
      </div>
    </div>
  );
}
