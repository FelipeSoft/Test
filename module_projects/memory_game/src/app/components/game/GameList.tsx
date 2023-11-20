type Props = {
    children: React.ReactNode;
}

export const GameList = ({ children }: Props) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-rows-2 gap-4 w-2/3 h-full">
            { children }
        </div>
    );
}
