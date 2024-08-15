import Link from "next/link";

import { Container } from "@/ui/Container";

export default function Home() {
    return (
        <>
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                <Container>
                    <div>The main page</div>
                    <Link href="topics">Topics</Link>
                </Container>
            </div>
        </>
    );
}
