import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const DInfo = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Information</CardTitle>
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
