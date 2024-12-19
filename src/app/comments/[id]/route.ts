import { redirect } from "next/navigation";
import { CommentsData } from "../data";

export async function GET(
    _request: Request,
    { params }: { params: { id: string } }) {
    const comment = CommentsData.find((comment) => comment.id === parseInt(params.id));
    if (!comment) redirect("/comments"); // if id not found then reditect to our route 
    return Response.json(comment)
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const body = await request.json();
    const commentIndex = CommentsData.findIndex(comment => comment.id === parseInt(params.id))
    CommentsData[commentIndex].text = body.text;
    return Response.json(CommentsData[commentIndex]);
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
    const commentIndex = CommentsData.findIndex(comment => comment.id === parseInt(params.id));
    const deletedComment = CommentsData[commentIndex];
    CommentsData.splice(commentIndex, 1);
    return Response.json(deletedComment);
}