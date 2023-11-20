"use client"

export const Container = ({ children }: { children:  React.ReactNode }) => {
    return (
        <div className="flex justify-center"> { children } </div>
    )
}