import {PropsWithChildren} from "react";

export function Footer(props?: PropsWithChildren) {
    return (
        <>
            <footer className={'footer'}>
                {props?.children}
            </footer>
        </>
    )
}
