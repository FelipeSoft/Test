type Props = {
    label: string;
    disable: boolean;
    onClick: (event: React.SyntheticEvent) => void;
}

export const FormButton = ({ label, onClick, disable }: Props) => {
    return(
        <button disabled={disable} onClick={onClick} className={`outline-none w-full bg-indigo-900 text-white rounded-lg py-2 my-8 transition-all active:bg-indigo-500 disabled:bg-indigo-400`}>{ label }</button>
    )
}