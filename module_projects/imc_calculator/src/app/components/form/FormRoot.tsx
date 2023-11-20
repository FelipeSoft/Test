import { ReactNode } from "react"

export const FormRoot = ({ action, children }: { action?: string, children: ReactNode }) => {
    return (
        <form action={ action }>{ children }</form>
    )
}