import type { NextRequest, NextResponse } from "next/server";

import { getSession } from "@/app/_authorization/utils/getSession";
import { prisma } from "@/app/prismaClient";

export interface CreateTopic {
	email: string;
	title: string;
	description: string;
}

const secret = process.env.NEXTAUTH_SECRET;

export async function POST(req: NextRequest, res: NextResponse) {
	const { email, title, description } = (await req.json()) as CreateTopic;

	console.log(email, title, description, "request");

	let session = null;

	try {
		// TODO: Need to check issues or change next-auth version
		session = await getSession();

		console.log(session, "session");
	} catch (err) {
		console.log(err, "ERROR");
	}

	if (!session) {
		return new Response("Unauthorized", {
			status: 401,
		});
	}

	try {
		const topic = await prisma.topic.create({
			data: {
				email,
				title,
				description,
			},
		});

		console.log(topic, "topic");

		return new Response("no-content", {
			status: 201,
		});
	} catch (error) {
		console.log(error, "error");
	}
}
