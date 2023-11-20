import { AiOutlineArrowLeft } from "react-icons/ai";

type Props = {
    icon: React.ReactElement | string;
    bgColor1: string;
    bgColor2: string;
    textColor: string;
    firstLabel: string;
    secondLabel: string;
    thirdLabel?: string;
    arrow: boolean;
    span?: boolean;
    onClick?: () => void;
}

export const Square = ({ icon, bgColor1, bgColor2, textColor, firstLabel, secondLabel, thirdLabel, arrow, onClick, span }: Props) => {
    return (
        <div className={`${span && "row-span-2 col-span-2"} w-full h-full p-10 rounded-lg flex items-center justify-center flex-col relative ${bgColor1} ${textColor}`}>
            {arrow && <div className="rounded-full bg-indigo-900 w-10 h-10 flex items-center justify-center absolute -left-5 cursor-pointer" onClick={onClick}><AiOutlineArrowLeft style={{fontSize: '24px'}} /></div>}
            <div className={`w-max rounded-full p-2 ${bgColor2}`}>
                { icon }
            </div>
            <h2 className="text-2xl pt-2">{ firstLabel }</h2>
            <p className="text-sm">{ thirdLabel }</p>
            <p className="text-xs">{ secondLabel }</p>
        </div>
    )
}