"use server";

import { prisma } from "@/app/prismaClient";

export interface CreateTopic {
	email: string;
	title: string | null;
	description: string | null;
}

export async function createTopic(body: CreateTopic | null) {
	try {
		if (!body) {
			throw new Error("Parameters are null");
		}

		const { email, title, description } = body;

		const topic = await prisma.topic.create({
			data: {
				email,
				title,
				description,
			},
		});

		return topic;
	} catch (error) {
		console.log(error, "error");
		return { message: "Something went wrong" };
	}
}

export async function removeTopic(id: number) {
	try {
		if (!id) {
			throw new Error("Parameters are null");
		}

		const topic = await prisma.topic.delete({
			where: {
				id,
			},
		});

		return topic;
	} catch (error) {
		console.log(error, "error");
		return { message: "Something went wrong" };
	}
}
