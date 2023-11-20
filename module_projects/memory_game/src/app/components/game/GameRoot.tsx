export const GameRoot = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col-reverse items-center lg:items-end lg:flex-col">
            { children }
        </div>
    )
}