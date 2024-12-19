import { NextRequest } from "next/server";
import { CommentsData } from "./data"

// Testing Using Thunder Client Extension

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredComments = query ? CommentsData.filter(comment => comment.text.includes(query)) : CommentsData;
    return Response.json(filteredComments)
}

export async function POST(request: Request) {
    const comment = await request.json();
    const newComment = {
        id: CommentsData.length + 1,
        text: comment.text
    }

    CommentsData.push(newComment);

    return new Response(JSON.stringify(newComment), {
        headers: {
            "ContentT-ype": "application/json"
        },
        status: 201
    })
}