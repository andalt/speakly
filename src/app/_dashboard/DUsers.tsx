import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";

export const DUsers = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Users</CardTitle>
                {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
            </CardHeader>
            <CardContent>Content</CardContent>
            {/* <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
            </CardFooter> */}
        </Card>
    );
};
