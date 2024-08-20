"use client";

import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { AuthorizationMenu } from "./AuthorizationMenu";

export function Authorization() {
    const { data: session, status } = useSession();

    console.log(session, status, "session");

    const renderStateOfAuthorization = () => {
        if (status === "loading") {
            return <div key="statusUser">Loading...</div>;
        }

        if (status === "authenticated" && session.user) {
            const { image, name } = session.user;

            return (
                <div key="statusUser" className="flex gap-2 items-center">
                    {name}
                    <AuthorizationMenu userName={name} userAvatar={image} />
                </div>
            );
        }

        return (
            <Button key="statusUser" variant="outline" className="w-full" onClick={() => signIn("google")}>
                Sign in with Google
            </Button>
        );
    };

    return <div className="w-full sm:ml-auto sm:w-auto">{renderStateOfAuthorization()}</div>;
}
