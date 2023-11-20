import { ChangeEvent, ReactElement } from "react";

type Props = {
    label: string
    assistant: string;
    canInteract: boolean;
    value: string;
    disable: boolean;
    children: React.ReactNode;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onFocus: (event: React.SyntheticEvent<HTMLInputElement>) => void;
    onBlur: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

export const FormInput = ({ assistant, onChange, onFocus, onBlur, value, disable, children }: Props) => {
    return (
        <div className="w-full flex flex-col">
            <div className="flex">
                <div className="relative w-full mt-8">
                    { children }
                    <input disabled={disable} value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur} type="number" 
                        className={`pointer-events-auto px-2 outline-none w-full border-b-2 border-b-gray-300 focus:border-indigo-900
                    `}/> 
                </div>
                <div className="flex items-center justify-normal mt-6">
                    <p className={`ml-2 ${disable && "text-gray-300"}`}>{ assistant }</p>
                </div>
            </div>
        </div>
    )
}