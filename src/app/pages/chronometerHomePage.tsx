import {useEffect, useState} from "react";


export function ChronometerHomePage() {
    const [milliseconds, setMilliseconds] = useState<number>(0);
    const [running, setRunning] = useState<number>(-1);
    const [intervalIndex, setIntervalIndex] = useState<number>(0);

    const INTERVAL_DELTA: number = 5;

    useEffect(() => {

        if (running == 1) {
            setIntervalIndex(setInterval(() => {
                setMilliseconds(seconds => seconds + INTERVAL_DELTA);
            }, INTERVAL_DELTA));
        } else if (running === 0) {
            clearInterval(intervalIndex);
        } else {
            clearInterval(intervalIndex);
            setMilliseconds(0)
        }

    },[running])


    const reset = () => {
        setRunning(-1);
    };

    const toggleRunning = () => {
        setRunning(running => running == 1 ? 0 : 1)
    };

    const timeElapsed = () => {
        const toTwoDigits = (value: number) => {
            return String(value).padStart(2, "0");
        }
        const seconds = Math.floor(milliseconds / 1000);
        const hh = Math.floor(seconds / 3600);

        const mm = Math.floor((seconds % 3600) / 60);
        const ss = seconds % 60;

        const ms = Math.floor((milliseconds % 1000) / 1);

        if (hh < 0 || mm < 0 || ss < 0) {
            return "00:00:00";
        }

        return toTwoDigits(hh) + ':' + toTwoDigits(mm) + ":" + toTwoDigits(ss) + '.' + String(ms).padStart(3, "0");
    }

    return (
        <>
            <div className={'p-4 mt-6'}>
                <h1 className={''}>Time elapsed: <span className={'ml-4'}><strong>{timeElapsed()}</strong></span></h1>
                <div className={'flex justify-content-between mt-4'} style={{width: '150px'}}>
                    <button type="button" className="btn btn-warning mb-2"
                            onClick={reset}>Reset
                    </button>
                    <button type="button" className={'btn mb-2 ' + (running == 1 ? 'btn-danger' : 'btn-primary')}
                            onClick={toggleRunning}>{running == 1 ? 'Stop' : 'Start'}
                    </button>
                </div>
            </div>
        </>
    )
}