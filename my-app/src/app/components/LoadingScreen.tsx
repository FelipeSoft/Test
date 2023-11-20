type Props = {
    loading: boolean;
}

export const LoadingScreen = ({ loading }: Props) => {
    return (
        <div className={`w-screen h-screen fixed flex items-center justify-center bg-black ${loading ? "block" : "hidden"}`}>
            <div className="w-20 h-20 rounded-full border-8 border-dotted animate-spin border-blue-500"></div>
        </div>
    )
}