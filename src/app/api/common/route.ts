import { prisma } from "@/app/prismaClient";
import { NextResponse } from "next/server";

export interface Common {
	userCount?: number;
}

export async function GET() {
	try {
		const result: Common = {};

		const userCount = await prisma.user.count();

		result.userCount = userCount;

		return NextResponse.json(result);
	} catch (error) {
		return NextResponse.json({ error: "Unable to fetch user count" }, { status: 500 });
	}
}
