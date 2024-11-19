import {Button} from "../components/button.tsx";
import {useEffect, useState} from "react";
import {Input} from "../components/input.tsx";

export function CustomComponentsHomePage() {

    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        document.title = count.toString();
    }, [count]);

    const increment = () => {
        setCount(count => count + 1);
    }

    return (
        <>
            <Input name={'Nome'} id={'nameId'} label={'Nome'}/>
            <Button clickHandler={increment}><span>{count ? ('Count : ' + count) : 'Click me'}</span></Button>
        </>
    )
}