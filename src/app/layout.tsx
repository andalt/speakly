import type { Metadata } from "next";

import "./globals.css";
import SessionProviderComponent from "@/components/SessionProvider";

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
                    <div className="flex min-h-screen w-full flex-col bg-muted/40">
                        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">{children}</div>
                    </div>
                </SessionProviderComponent>
            </body>
        </html>
    );
}
