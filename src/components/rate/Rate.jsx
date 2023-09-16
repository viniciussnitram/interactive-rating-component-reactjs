export function Rate(props) {
    let value = props.value;

    return (
        <>
            <input className="bg-dark-blue font-bold h-[54px] p-4 rounded-full text-medium-grey w-[54px] focus:bg-orange focus:text-white hover:bg-light-grey hover:cursor-pointer hover:text-white" name="rate" type="button" value={value} />
        </>
    );
}
