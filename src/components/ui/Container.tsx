import type { ReactNode } from "react";

interface IContainer {
    children: ReactNode;
}

export const Container = ({ children }: IContainer) => {
    return <div className="mx-auto grid max-w-screen-xl flex-1">{children}</div>;
};
