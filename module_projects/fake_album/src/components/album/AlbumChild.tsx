type Props = {
    text: string;
    onClick: () => void;
}

export const AlbumChild = ({ text, onClick }: Props) => {
    return (
        <div onClick={onClick} className="w-full 
            border-2 border-black rounded-md 
            my-2 py-2 px-4 cursor-pointer transition-all
            hover:bg-black hover:text-white ">
            { text }
        </div>
    )
}