import {CustomInputProps, InputType} from "../../lib/types.ts";

export function Input({id, type = InputType.text, label, name, className, required = true, min = 1, max = 99, minLength = 1, maxLength = 30}: CustomInputProps) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} name={name} className={className} required={required} min={min} max={max} minLength={minLength} maxLength={maxLength} />
        </>
    );
}