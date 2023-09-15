import { Logo } from '../logo/Logo';
import { Description } from '../description/Description';
import { Rate } from '../rate/Rate';
import { Submit } from '../submit/Submit';

export function Card() {
    return (
        <>
            <main className="bg-very-dark-blue flex flex-col gap-5 m-auto p-[45px] rounded-3xl w-[450px]">
                <Logo />
                <Description />
                <form className="flex flex-col gap-5">
                    <div className="flex gap-5">
                        <Rate value={1} />
                        <Rate value={2} />
                        <Rate value={3} />
                        <Rate value={4} />
                        <Rate value={5} />
                    </div>
                    <Submit />
                </form>
            </main>
        </>
    );
}
