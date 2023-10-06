export function Thanks() {
    return (
        <main className="align-center bg-very-dark-blue flex flex-col gap-5 justify-center m-auto p-[45px] rounded-3xl w-[450px]">
            <img className="my-0 mx-auto w-[162px]" src="images/illustration-thank-you.svg" alt="Icon Star" />
            <p class="block bg-dark-blue leading-10 rounded-full text-orange text-center">You selected {} out of 5</p>
            <section className="flex flex-col gap-3 my-5 text-center">
                <h1 className="font-semibold text-3xl">Thank you!</h1>
                <p className="text-light-grey">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get int touch!</p>
            </section>
        </main>
    );
}