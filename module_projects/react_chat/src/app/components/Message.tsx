type Props = {
    message: string;
    user: string;
}

export const Message = ({ message, user }: Props) => {
    return (
        <div className={`flex flex-col mt-4 
        ${user === "Felipe" && "items-end"}
        ${user === "Bot" && "items-start"}
        `}>
            <div className={`w-max h-max p-2 text-xs
            ${user === "Felipe" && "bg-purple-900 text-white rounded-tr-lg rounded-tl-lg rounded-bl-lg"}  
            ${user === "Bot" && "bg-gray-300 text-black rounded-tr-lg rounded-tl-lg rounded-br-lg"}  
            `}>
                { message }
            </div>
            <p className="text-gray-500 text-xs">Ago, 08</p>
        </div>
    );
}