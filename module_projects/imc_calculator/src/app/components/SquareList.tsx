type Props = {
    disable: boolean;
    children: React.ReactNode;
}

export const SquareList = ({ disable, children }: Props) => {
    return (
        <div className={`h-full grid gap-4 ${disable && "hidden"} ${!disable && "block"} lg:grid-cols-2`}>
            { children }    
        </div>
    )
}