type Props = { 
    children: React.ReactNode 
}
export const ResultSide = ({ children }: Props ) => {
    return (
        <div className="w-full h-full lg:w-1/2">
            <div>
                { children }
            </div>
        </div>
    )
}