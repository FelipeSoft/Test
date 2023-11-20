type Props = {
    path: string,
    onClick: () => void
}

export const Modal = ({ path, onClick }: Props) => {
    return (
        <div className="w-screen h-screen fixed inset-0 bg-black/90 z-10 cursor-pointer" onClick={onClick}>
            <div className="h-full w-full flex items-center justify-center">
                <img className="max-w-screen max-h-screen" src={`/assets/img/${path}`} alt="" />
            </div>
        </div>
    );
}   