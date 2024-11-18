import {Plate} from "../../lib/interfaces.ts";

export function MenuPlate({plateTitle, plateDescription, price, isNew}: Plate) {
    return (
        <>
            <p>{plateTitle} {isNew && <strong>- new item!</strong>}</p>
            <p className={'ml-2'}>{plateDescription} <span>$ {price}</span></p>
        </>
    )
}