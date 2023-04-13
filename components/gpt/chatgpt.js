import Image from "next/image";
import Link from "next/link";

export default function ProjectsItem({ data }) {
  const { properties } = data;
  const name = properties.Name.title[0].plain_text;
  const url = properties.URL.url;
  //   const icons = icon.emoji;
  //   const title = properties.Name.title[0].plain_text;
  //   const start = properties.Date.date.start;
  //   const end = properties.Date.date.end;
  //   const stack = properties.Stack.multi_select;
  //   const team = properties.Team.rich_text[0].plain_text;
  //   const description = properties.Description.rich_text[0].plain_text;
  //   const imgSrc = cover?.file?.url || cover?.external.url;

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
      <div>
        <h1 className="text-xl font-bold">{name}</h1>
        <Link href={url}>chatgpt 바로가기</Link>
      </div>
    </div>
  );
}
