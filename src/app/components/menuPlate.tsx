import {IMenuPlate} from "../../lib/interfaces.ts";

export function MenuPlate(props: IMenuPlate) {
    const {plateTitle, plateDescription, price, isNew} = props.plate;
    return (
        <>
            <p style={{color: '#825603', fontWeight: 'bold'}}>{plateTitle} {isNew && <strong style={{color: '#003423',fontStyle: 'italic'}}>- new item!</strong>}</p>
            <p className={'ml-2'} style={{fontStyle: 'italic'}}>{plateDescription} <span>$ {price}</span></p>
        </>
    )
}