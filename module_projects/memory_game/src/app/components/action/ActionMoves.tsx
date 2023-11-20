export const ActionMoves = ({ moves }: { moves: number }) => {
    return (
        <div className="mt-5">
            <h2 className="text-md text-center text-gray-500 lg:text-xl lg:text-left">Moves</h2>
            <h1 className="text-7xl font-bold text-center lg:text-left">{moves}</h1>
        </div>
    )
}