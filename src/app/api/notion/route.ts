import { NextResponse } from "next/server";

const { Client } = require("@notionhq/client");

const notionToken = process.env.NEXT_PUBLIC_NOTION_TOKEN;
const notionDatabaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

const notion = new Client({ auth: notionToken });

export async function GET() {
  try {
    const response = await notion.databases.query({
      database_id: notionDatabaseId,
    });


    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
  }
}