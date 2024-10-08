"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { createTopic } from "./_actions";

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
                <Button
                    onClick={async () => {
                        await createTopic({
                            email: "andalt11@gmail.com",
                            title: "First topic",
                            description: "description",
                        });
                    }}
                >
                    Создать топик
                </Button>
            </CardFooter>
        </Card>
    );
};
