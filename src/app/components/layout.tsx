import {Header} from "./header.tsx";
import {Footer} from "./footer.tsx";
import {useOutlet} from "react-router-dom";

export function Layout(){

    const outlet = useOutlet();

    return (
        <>
            <Header/>
            <div style={{height: '80dvh'}}>
                {outlet}
            </div>
            <Footer/>
        </>
    )
}