"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";

export function Authorization() {
    const { data: session, status } = useSession();

    console.log(session, status, "session");

    const renderStateOfAuthorization = () => {
        if (status === "loading") {
            return <div key="statusUser">Loading...</div>;
        }

        if (status === "authenticated") {
            return (
                <div key="statusUser">
                    {session.user?.name}
                    <br />
                    <Button className="w-full" onClick={() => signOut()}>
                        Sign Out
                    </Button>
                </div>
            );
        }

        return (
            <Button key="statusUser" className="w-full" onClick={() => signIn("google")}>
                Sign in with Google
            </Button>
        );
    };

    return <div className="w-full max-w-sm">{renderStateOfAuthorization()}</div>;
}
