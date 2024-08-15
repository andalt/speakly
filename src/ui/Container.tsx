import type { ReactNode } from "react";

interface IContainer {
    children: ReactNode;
}

export const Container = ({ children }: IContainer) => {
    return <div>{children}</div>;
};
