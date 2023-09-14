import { Logo } from '../logo/Logo';
import { Description } from '../description/Description';
import { Rate } from '../rate/Rate';
import { Submit } from '../submit/Submit';

export function Card() {
    return (
        <>
            <main className="w-[400px] p-[45px] bg-very-dark-blue flex flex-col gap-5">
                <Logo />
                <Description />
                <div className="flex gap-5">
                    <Rate />
                    <Rate />
                    <Rate />
                    <Rate />
                    <Rate />
                </div>
                <Submit />
            </main>
        </>
    );
}
