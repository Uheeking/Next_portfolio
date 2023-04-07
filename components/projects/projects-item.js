import Image from "next/image";

export default function ProjectsItem({ data }) {
  const icon = data.icon.emoji;
  const title = data.properties.Name.title[0].plain_text;
  const start = data.properties.Date.date.start;
  const end = data.properties.Date.date.end;
  const stack = data.properties.Stack.multi_select;
  const team = data.properties.Team.rich_text[0].plain_text;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = data.cover?.file?.url || data.cover?.external.url;

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split('-');
    const endDateStringArray = end.split('-');

    var startDate = new Date(startDateStringArray[0], startDateStringArray[1], startDateStringArray[2]);
    var endDate = new Date(endDateStringArray[0], endDateStringArray[1], endDateStringArray[2]);

    console.log(`startDate: ${startDate}`)
    console.log(`endDate: ${endDate}`)

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    console.log(`기간 : ${result}`)
    return result;
};


  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        alt="image"
        src={imgSrc}
        style={{ width: "100%", height: "60%" }}
        layout="responsive"
        objectFit="none"
        quality={100}
        width={100}
        height={60}
      />
      <div className="p-4 flex flex-col w-full">
      <h1 className="text-xl font-bold">
        {icon} {title}
      </h1>
      <h3 className="flex mb-2">
        {start} ~ {end} ({calculatedPeriod(start, end)}일)
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
