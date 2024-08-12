"use server";

import type { User } from "next-auth";

interface Sesssion extends User {
	accessToken?: string;
	idToken?: string;
}

export async function signIn(data: Sesssion) {
	console.log(data, "session signInServer");
}
