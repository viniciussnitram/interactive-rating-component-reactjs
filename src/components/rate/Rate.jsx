export function Rate(props) {
    let value = props.value;

    return (
        <>
            <input className="bg-dark-blue font-bold py-4 px-6 rounded-full text-medium-grey focus:bg-orange focus:text-white hover:bg-light-grey hover:cursor-pointer hover:text-white" name="rate" type="button" value={value} />
        </>
    );
}
