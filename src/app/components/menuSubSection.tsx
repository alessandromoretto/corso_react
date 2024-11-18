import {SubSection} from "../../lib/interfaces.ts";
import {MenuPlate} from "./menuPlate.tsx";

export function MenuSubSection({title, plates}: SubSection) {
    return (
        <>
            <h3>{title}</h3>
            {plates.map(menuEntry =>
                <MenuPlate plateTitle={menuEntry.plateTitle} plateDescription={menuEntry.plateDescription} isNew={menuEntry.isNew} price={menuEntry.price} />
            )}
        </>
    )
}