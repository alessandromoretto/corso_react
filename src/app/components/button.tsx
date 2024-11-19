import {CustomButtonProps} from "../../lib/types.ts";

export function Button({children, type = 'button', className='', clickHandler = () => console.log("click")}: CustomButtonProps) {
    return (
        <button type={type} className={className} onClick={clickHandler}>
            {children}
        </button>
    );
}