import { NextResponse, NextRequest } from "next/server";
import { WebClient } from "@slack/web-api";

const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export async function POST(request: Request, response: Response) {
    try {
        const formData = await request.json();
        const { name, phone, email, text } = formData;
        console.log(formData);

        const web = new WebClient(API_TOKEN);

        const result = await web.chat.postMessage({
            text:
                "*이름 :* " +
                name +
                "\n*휴대폰 번호 :* " +
                phone +
                "\n*이메일 :* " +
                email +
                "\n*전할 내용 :* " +
                text,
            channel: '#test',
        });
        console.log(result);


        console.log(
            `Successfully send message ${result} in conversation`
        );

        return NextResponse.json({
            code: 200,
            message: "메시지가 성공적으로 전송되었습니다. ",
        });
    } catch (error) {
        console.error(error);
    }
}