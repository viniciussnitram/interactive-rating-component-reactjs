import { Logo } from '../logo/Logo';
import { Description } from '../description/Description';
import { Rate } from '../rate/Rate';
import { Submit } from '../submit/Submit';

export function Card() {
    return (
        <>
            <main>
                <Logo />
                <Description />
                <Rate />
                <Submit />
            </main>
        </>
    );
}
