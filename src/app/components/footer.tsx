import {PropsWithChildren} from "react";

export function Footer(props?: PropsWithChildren) {
    return (
        <>
            <footer className={'footer'}>
                <div style={{padding: '3rem'}}>
                {props?.children}
                </div>
            </footer>
        </>
    )
}
