import { signOut } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";
import { Button } from "@/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/ui/dropdown-menu";

interface IAuthorizationMenu {
    userName?: string | null;
    userAvatar?: string | null;
}

export const AuthorizationMenu = ({ userName, userAvatar }: IAuthorizationMenu) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                    <Avatar>
                        <AvatarImage src={userAvatar || undefined} />
                        <AvatarFallback>{`${userName?.split(" ")[0][0]}${userName?.split(" ")[0][1]}`}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem>My account</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
