import { getServerSession } from "next-auth/next";
import { authOptions } from "./authOptions";

export const getSession = async () => {
	const session = await getServerSession(authOptions);

	if (!session) {
		return null;
	}

	return session;
};
