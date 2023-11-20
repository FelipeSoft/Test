import { VscDebugRestart } from "react-icons/vsc";

type Props = {
    label: string;
    onClick: () => void;
}

export const ActionButton = ({ label, onClick }: Props) => {
    return(
        <div className="cursor-pointer bg-purple-400 rounded-lg flex items-center w-max border-2 border-purple-400 mt-5" onClick={onClick}>
            <div className="p-4 border-r-2 border-r-white">
                <VscDebugRestart style={{ color: '#fff', fontSize: '24px'}}/>
            </div>
            <p className="px-10 text-white text-xl">{ label }</p>
        </div>
    )
}