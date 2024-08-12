"use client";

import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";

import { signIn as signInServer } from "@/app/actions";

export function Authorization() {
    // const { data: session, status } = useSession();

    // console.log(session, status, "session");

    return (
        <div className="w-full max-w-sm">
            <Button className="w-full" onClick={() => signIn("google")}>
                Sign in with Google
            </Button>
        </div>
    );
}
