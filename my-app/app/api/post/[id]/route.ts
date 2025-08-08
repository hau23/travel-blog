//route handler for creating, updating, deleting, getting a post by id

import { getPost } from "../../../../lib/posts/getPost";
import { updatePost } from "../../../../lib/posts/updatePost";
import { deletePost } from "../../../../lib/posts/deletePost";
import { createPost } from "../../../../lib/posts/createPost";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET(
	req: Request,
	{ params }: { params: { id: number } }
) {
	const post = await getPost(params.id);
	if (!post) return new Response("Not found", { status: 404 });
	return Response.json(post);
}

export async function POST(req: Request) {
	const session = await getServerSession(authOptions);

	console.log("session:", session);
  
	if (!session || !session.user?.id) {
		return new Response("Unauthorized", { status: 401 });
	}

	const body = await req.json();
	const { title, content } = body;

	if (!title || !content) {
		return new Response("Missing fields", { status: 400 });
	}

	const newPost = await createPost({
		title,
		content,
		authorId: Number(session.user.id),
	});

	return Response.json(newPost);
}

export async function PUT(
	req: Request,
	{ params }: { params: { id: number } }
) {
	const body = await req.json();
	const updated = await updatePost(params.id, body);
	return Response.json(updated);
}

export async function DELETE(
	req: Request,
	{ params }: { params: { id: number } }
) {
	await deletePost(params.id);
	return Response.json({ message: "Deleted" });
}
