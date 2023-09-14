export function Rate(props) {
    let id = props.id;

    return (
        <>
            <input className="w-[50px] border-solid border-1 border-white rounded-full text-medium-grey p-3 bg-dark-blue font-bold hover:bg-light-grey hover:text-white hover:cursor-pointer focus:bg-orange focus:text-white" type="button" name="rate" value={id} />
        </>
    );
}
