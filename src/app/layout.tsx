import type { Metadata } from "next";

import "./globals.css";
import SessionProviderComponent from "@/app/_authorization/components/SessionProvider";
import { Header } from "@/components/Header";
import { Container } from "@/ui/Container";

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
                        <Header />
                        <main className="p-4 sm:px-6 sm:py-0">
                            <Container>{children}</Container>
                        </main>
                    </div>
                </SessionProviderComponent>
            </body>
        </html>
    );
}
