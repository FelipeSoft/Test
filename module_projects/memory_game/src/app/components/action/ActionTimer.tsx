export const ActionTimer = ({ timer }: { timer: string }) => {
    return (
        <div className="mt-5">
            <h2 className="text-md text-gray-500 text-center lg:text-left lg:text-xl">Time</h2>
            <h1 className="text-xl font-bold text-center lg:text-7xl">{timer}</h1>
        </div>
    )
}