import Image from 'next/image'

export default function ProjectsItem({ data }) {
  const icon = data.icon.emoji;
  const title = data.properties.Name.title[0].plain_text;
  const start = data.properties.Date.date.start;
  const end = data.properties.Date.date.end;
  const stack = data.properties.Stack.multi_select;
  const team = data.properties.Team.rich_text[0].plain_text;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = data.cover?.file?.url || data.cover?.external.url;

  return (
    <div className="p-6 m-3 bg-slate-400 rounded-md">
        <Image
        alt="image"
        src={imgSrc}
        style={{width: '100%', height:'60%'}}
        width={100}
        height={60} 
        />
      <h1>
        {icon} {title}
      </h1>
      <h3 className="flex mb-2">
        {start}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
        {end}
      </h3>
      <div className="mb-2">
      {stack.map((items) => (
        <span
          className="mr-2 p-1"
          key={items.id}
          style={{
            backgroundColor: items.color,
            color: items.color === "blue" ? "white" : "black",
            borderRadius: '10px'
          }}
        >
          {items.name}
        </span>
      ))}
      </div>
      <div>{team}</div>
      <div>{description}</div>
    </div>
  );
}
