import { ReactNode } from "react";
import { Label } from "@/app/components/Label";


export const ContentSide = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-full h-full lg:w-1/2">
            <Label></Label>
            <h1 className="text-2xl font-bold mt-6">Calculadora de Índice de Massa Corporal (IMC)</h1>
            <p className="text-justify mt-2">O Índice de Massa Corporal (IMC) é calculado para avaliar a relação entre o peso e a altura de uma pessoa e é frequentemente utilizado como uma medida simples para determinar se alguém está dentro de faixas consideradas saudáveis em termos de peso corporal.</p>
            { children }
        </div>
    )
}