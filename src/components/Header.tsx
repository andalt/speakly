import { Authorization } from "@/app/_authorization/components/Authorization";
import { Container } from "@/components/ui/Container";

export const Header = () => {
    return (
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Container>
                <Authorization />
            </Container>
        </header>
    );
};
