import { ReactNode } from "react"

export const Container = ({ children }: { children: ReactNode }) => {
    return (
        <div className="container min-h-screen mx-auto flex flex-col items-center justify-center lg:flex-row lg:gap-10">{ children }</div>
    )
}