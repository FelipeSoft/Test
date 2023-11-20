type Props = {
    path: string,
    onClick: (e: React.SyntheticEvent<HTMLDivElement>) => void
}

export const Image = ({ path, onClick }: Props) => {
    return (
        <div className="relative" onClick={onClick}>
            <div className="max-w-full cursor-pointer absolute inset-0 w-full hover:bg-gray-900/40 transition-all z-10"></div>
            <img className="w-full h-full object-cover" src={`../assets/img/${path}`} alt="" />
        </div>
    );
}
