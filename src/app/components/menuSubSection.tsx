import {SubSection} from "../../lib/interfaces.ts";
import {MenuPlate} from "./menuPlate.tsx";

export function MenuSubSection({title, plates}: SubSection) {
    return (
        <>
            <h3>{title}</h3>
            {plates.map(plate =>
                <MenuPlate key={Math.random()} plate={plate}/>
            )}
        </>
    )
}