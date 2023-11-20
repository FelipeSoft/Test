type Props = {
    children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
    return (
        <div className="container mx-auto flex flex-col items-center justify-center lg:flex-row">{ children }</div>
    )
}
