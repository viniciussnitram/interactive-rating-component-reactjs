export function Card() {
    return (
        <>
            <main className="bg-very-dark-blue m-auto p-[45px] rounded-3xl w-[450px]">
                <img className="bg-dark-blue font-bold p-4 rounded-full" src="images/icon-star.svg" alt="Icon Star" />
                <section className="flex flex-col gap-3 my-5">
                    <h1 className="font-semibold text-3xl">How did we do?</h1>
                    <p className="text-light-grey">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                </section>
                <form className="flex flex-col gap-9">
                    <div className="flex gap-5">
                        <input className="bg-dark-blue font-bold h-[54px] p-4 rounded-full text-medium-grey w-[54px] focus:bg-orange focus:text-white hover:bg-light-grey hover:cursor-pointer hover:text-white" name="rate" type="button" value="1" />
                        <input className="bg-dark-blue font-bold h-[54px] p-4 rounded-full text-medium-grey w-[54px] focus:bg-orange focus:text-white hover:bg-light-grey hover:cursor-pointer hover:text-white" name="rate" type="button" value="2" />
                        <input className="bg-dark-blue font-bold h-[54px] p-4 rounded-full text-medium-grey w-[54px] focus:bg-orange focus:text-white hover:bg-light-grey hover:cursor-pointer hover:text-white" name="rate" type="button" value="3" />
                        <input className="bg-dark-blue font-bold h-[54px] p-4 rounded-full text-medium-grey w-[54px] focus:bg-orange focus:text-white hover:bg-light-grey hover:cursor-pointer hover:text-white" name="rate" type="button" value="4" />
                        <input className="bg-dark-blue font-bold h-[54px] p-4 rounded-full text-medium-grey w-[54px] focus:bg-orange focus:text-white hover:bg-light-grey hover:cursor-pointer hover:text-white" name="rate" type="button" value="5" />
                    </div>
                    <input className="bg-orange font-bold leading-7 p-2 rounded-full tracking-[2px] uppercase w-[100%] hover:bg-white hover:cursor-pointer hover:text-orange" type="submit" value="submit" />
                </form>
            </main>
        </>
    );
}
