import { Card } from "@/app/types/Card";
import { FaFaceSmile } from "react-icons/fa6";

type Props = {
    element: Card;
    image: string;
    onClick: () => void;
}

export const GameCard = ({ onClick, element, image }: Props) => {
    return (
        <div className={`cursor-pointer flex items-center justify-center rounded-lg overflow-hidden p-4
            ${(element.shown || element.stayShown) && "bg-purple-400"}
            ${(!element.shown || !element.stayShown) && "bg-gray-200"}
        `} onClick={onClick}>
            <img src={`/assets/images/${image}`} alt="" className={`w-full
                ${(element.shown || element.stayShown) && "opacity-1"}
                ${!element.shown && "opacity-0"}
            `}/>
            <FaFaceSmile className={`absolute text-7xl text-gray-100
                ${(element.shown || element.stayShown) && "opacity-0"}
                ${!element.shown && "opacity-1"}
            `}/>
        </div>
    );
}
