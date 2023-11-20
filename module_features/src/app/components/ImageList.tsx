type Props = {
    children: React.ReactNode
}

export const ImageList = ({ children }: Props) => {
    return (
        <div className="grid gap-4 grid-cols-1 h-full md:grid-cols-2 lg:grid-cols-3">
            {children}
        </div>
    );
}
