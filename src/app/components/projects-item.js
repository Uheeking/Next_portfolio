import Image from "next/image";

export default function ProjectsItem({ data }) {
  const { icon, properties } = data;
  const { Name, Stack, Team, Description, Photo } = properties;
  const icons = icon.emoji;
  const title = Name.title[0].plain_text;
  const start = properties.Date.date?.start;
  const end = properties.Date.date?.end;
  const stack = Stack.multi_select;
  const team = Team.multi_select;
  const description = Description.rich_text[0]?.plain_text;
  const imgSrc = Photo.rich_text[0]?.href;

  const calculatedPeriod = (start, end) => {
    const [startYear, startMonth, startDay] = start?.split("-");
    const [endYear, endMonth, endDay] = end?.split("-");

    const startDate = new Date(startYear, startMonth, startDay);
    const endDate = new Date(endYear, endMonth, endDay);

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result;
  };

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        alt="image"
        src={imgSrc}
        layout="responsive"
        objectFit="cover"
        quality={75} // Reducing quality can significantly decrease loading time
        width={100}
        height={60}
        priority // Preload image if it's above the fold
        sizes="(max-width: 768px) 100vw, 50vw" // Use appropriate sizes based on viewport
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
        <div style={{ margin: "5px" }}>
          {team.map((items) => (
            <span className="mr-2 p-1 rounded-md" key={items.id}>
              {items.name}
            </span>
          ))}
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
}
