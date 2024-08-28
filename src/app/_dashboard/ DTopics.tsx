import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const DTopics = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Topics</CardTitle>
                {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
            </CardHeader>
            <CardContent>Content</CardContent>
            <CardFooter className="flex justify-between">
                <Link href="/topics" className="font-medium text-primary underline underline-offset-4">
                    All topics
                </Link>
            </CardFooter>
        </Card>
    );
};
