type Props = {
    url: string;
    onClick: () => void;
}

export const AlbumPhoto = ({ url, onClick }: Props) => {
    return (
        <div>
            <img onClick={onClick} className="w-full h-full cursor-pointer" src={url} alt="" />
        </div>
    )
}