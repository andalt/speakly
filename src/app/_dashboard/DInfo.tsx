import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Common } from "../api/common/route";

export const DInfo = async () => {
    const data: Common = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/common`).then((res) => res.json());

    console.log(data, "data");

    return (
        <Card>
            <CardHeader>
                <CardTitle>Information</CardTitle>
                {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
            </CardHeader>
            <CardContent>Number of Users: {data.userCount}</CardContent>
            {/* <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
            </CardFooter> */}
        </Card>
    );
};
