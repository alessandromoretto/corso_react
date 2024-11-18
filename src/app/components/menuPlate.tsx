import {IMenuPlate} from "../../lib/interfaces.ts";

export function MenuPlate(props: IMenuPlate) {
    const {plateTitle, plateDescription, price, isNew} = props.plate;
    return (
        <>
            <p>{plateTitle} {isNew && <strong>- new item!</strong>}</p>
            <p className={'ml-2'}>{plateDescription} <span>$ {price}</span></p>
        </>
    )
}