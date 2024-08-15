import type { Metadata } from "next";

import "./globals.css";
import { Authorization } from "@/app/_authorization/components/Authorization";
import SessionProviderComponent from "@/app/_authorization/components/SessionProvider";

export const metadata: Metadata = {
    title: "Speakly",
    description: "Speak calmly",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <SessionProviderComponent>
                    <div className="flex min-h-screen w-full flex-col bg-muted/40 sm:py-4 sm:gap-4">
                        <header className="grid items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                            <Authorization />
                        </header>
                        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                            {children}
                        </main>
                    </div>
                </SessionProviderComponent>
            </body>
        </html>
    );
}
