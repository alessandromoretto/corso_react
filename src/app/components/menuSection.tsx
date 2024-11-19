import {Section} from "../../lib/interfaces.ts";
import {MenuSubSection} from "./menuSubSection.tsx";

export function MenuSection({title, subTitle, author, publishDate, menuSubSections}: Section) {
    return (
        <>
            <h2 className={'mt-2'}>{title}</h2>
            <p>posted by {author}, {publishDate.toDateString()}</p>
            <div>{subTitle}</div>
            {menuSubSections.map(subSection =>
                <MenuSubSection key={Math.random()} title={subSection.title} plates={subSection.plates} />
            )}
        </>
    )
}
