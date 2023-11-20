type Props = { 
    placeholder: string;
    canInteract: boolean;
    disable: boolean;
}

export const FormLabel = ({ placeholder, canInteract, disable }: Props) => {
    return (
        <p 
            className={`absolute pointer-events-none pl-2 transition-all
            ${canInteract && "text-indigo-900 font-bold bottom-6 text-xs"}
            ${!canInteract && "text-gray-400"}
            ${disable && "text-gray-100"}
        `}>{ placeholder }</p>
    )
}