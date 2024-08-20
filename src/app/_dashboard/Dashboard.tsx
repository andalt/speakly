import { DInfo } from "./DInfo";
import { DTopics } from "./ DTopics";
import { DUsers } from "./DUsers";

export const Dashboard = () => {
    return (
        <div className="grid flex-1 items-start gap-4 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                <DInfo />
                <DTopics />
            </div>
            <DUsers />
        </div>
    );
};
