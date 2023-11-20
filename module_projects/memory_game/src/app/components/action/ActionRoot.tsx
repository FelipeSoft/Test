import { BiSolidChess } from "react-icons/bi";

type Props = {
    children: React.ReactNode;
}

export const ActionRoot = ({ children }: Props) => {
    return (
        <div className="flex flex-col items-center lg:items-start">
            <div className="flex mt-4">
                <BiSolidChess style={{fontSize: '48px'}} />
                <div className="ml-2">
                    <h1 className="text-3xl font-bold">Good<span className="text-purple-400">Memories</span></h1>
                    <p className="text-xs text-gray-500">Powered by Homens</p>
                </div>
            </div>
            { children }
        </div>
    )
}