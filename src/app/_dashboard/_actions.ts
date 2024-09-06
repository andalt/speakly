"use server";

import type { CreateTopic } from "../api/topic/route";

export async function createTopic(body: CreateTopic) {
	try {
		const data = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/topic`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify(body),
		});
	} catch (err) {
		console.log(err);
	}
}
