import { NextResponse } from "next/server";

const { Client } = require("@notionhq/client");

const notionGptToken = process.env.NEXT_PUBLIC_NOTION_GPT_TOKEN;
const notionGptDatabaseId = process.env.NEXT_PUBLIC_NOTION_GPT_DB_ID;

const notion = new Client({ auth: notionGptToken });

export async function GET() {
  try {
    const response = await notion.databases.query({
      database_id: notionGptDatabaseId,
    });


    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
  }
}