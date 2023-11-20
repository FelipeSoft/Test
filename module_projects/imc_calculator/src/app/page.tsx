"use client";

import { useState } from "react";
import { Container } from "@/app/components/Container";
import { ContentSide } from "./components/ContentSide";
import { ResultSide } from "./components/ResultSide";
import { Form } from "@/app/components/form/index";
import { GiBodyHeight, GiWeight } from "react-icons/gi";
import { RiEmotionLine, RiEmotionNormalLine, RiEmotionSadLine, RiEmotionUnhappyLine } from "react-icons/ri";
import { CalculatorResult } from "./types/CalculatorResult";
import { Square } from "./components/Square";
import { SquareList } from "./components/SquareList";

const Page = () => {
    const [ disable, setDisable ] = useState(false);
    const [ error, setError] = useState(false);
    const [ canInteract, setCanInteract ] = useState({height: false, weight: false});
    const [ input, setInput ] = useState({height: "", weight: ""});
    const [ result, setResult ] = useState<CalculatorResult>({
        resultOf: 0,
        textColor: "",
        firstLabel: "",
        secondLabel: "",
        thirdLabel: "",
        bgColor1: "",
        bgColor2: "",
        icon: "",
        arrow: true
    });
    const ICON_SIZE = "48px"

    const resultIcons = {
        Thinness: <RiEmotionNormalLine style={{fontSize: ICON_SIZE}}/>,
        Normal: <RiEmotionLine style={{fontSize: ICON_SIZE}}/>,
        Overweight: <RiEmotionSadLine style={{fontSize: ICON_SIZE}}/>,
        Obesity: <RiEmotionUnhappyLine style={{fontSize: ICON_SIZE}}/>
    }

    const resultLabels: any = {
        Thinness: "IMC menor que 18.4",
        Normal: "IMC entre 18.5 e 24.9",
        Overweight: "IMC entre 25 e 29.9",
        Obesity: "IMC maior que 30.0"
    }

    const handleBlur = (blurryInput: string) => {
        if (blurryInput === "height" && input.height === ""){
            setCanInteract({...canInteract, height: false})
        } else if (blurryInput === "weight" && input.weight === "") {
            setCanInteract({...canInteract, weight: false})
        } 
    }
    
    const handleClick = () => {
        setResult({
            ...result, 
            resultOf: 0
        });
        setDisable(false);
        setError(false);
    }

    const calculate = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (
            (input.weight === "" || input.height === "") ||
            (parseFloat(input.weight) === 0 || parseFloat(input.height) === 0)
        )
            return;
    
        const height = parseFloat(input.height);
        const weight = parseFloat(input.weight);
        const calculation = parseFloat((weight / Math.pow(height, 2)).toFixed(2));
    
        const thresholds = [18.4, 24.9, 29.9, 30];
        const labels = ["Magreza", "Normal", "Sobrepeso", "Obesidade"];
        const colors1 = ["bg-gray-500", "bg-emerald-500", "bg-yellow-500", "bg-rose-500"];
        const colors2 = ["bg-gray-600", "bg-emerald-600", "bg-yellow-600", "bg-rose-800"];
        const icons = [
            resultIcons.Thinness,
            resultIcons.Normal,
            resultIcons.Overweight,
            resultIcons.Obesity,
        ];
    
        let categoryIndex = thresholds.length - 1;
    
        if(calculation > 0){
            for (let i = 0; i < thresholds.length; i++) {
                if (calculation <= thresholds[i]) {
                    categoryIndex = i; 
                    break;
                }
            }
        
            const resultData: CalculatorResult = {
                resultOf: calculation,
                textColor: "text-white",
                firstLabel: labels[categoryIndex],
                secondLabel: resultLabels[labels[categoryIndex]],
                thirdLabel: `O seu IMC é de ${calculation} kg/m²`,
                bgColor1: colors1[categoryIndex],
                bgColor2: colors2[categoryIndex],
                icon: icons[categoryIndex],
                arrow: true,
            };
        
            setResult(resultData);
            setInput({ height: "", weight: "" });
            setCanInteract({ height: false, weight: false });
            setDisable(true);
        }
    };
    
    
    return(
        <Container> 
            <ContentSide>
                <Form.Root> 
                    <Form.Input 
                        canInteract={canInteract.height} 
                        onFocus={() => setCanInteract({...canInteract, height: true})} 
                        onBlur={() => handleBlur("height")} 
                        onChange={(event) => setInput({...input, height: event.target.value})} 
                        label="Altura" 
                        assistant={"(metros)"}
                        value={input.height}
                        disable={disable}
                    >
                    <Form.Label disable={disable} placeholder={"Altura"} canInteract={canInteract.height}></Form.Label>
                    </Form.Input>
                    
                    <Form.Input 
                        canInteract={canInteract.weight} 
                        onFocus={() => setCanInteract({...canInteract, weight: true})} 
                        onBlur={() => handleBlur("weight")} 
                        onChange={(event) => setInput({...input, weight: event.target.value})} 
                        label="Peso" 
                        assistant={"(quilogramas)"}
                        value={input.weight}
                        disable={disable}
                    >
                    <Form.Label disable={disable} placeholder={"Peso"} canInteract={canInteract.weight}></Form.Label>
                    </Form.Input>
                    
                    <Form.Button onClick={(event) => calculate(event)} label="Calcular" disable={disable}/>
                </Form.Root>
            </ContentSide>
            <ResultSide>
                { result.resultOf === 0 ?
                <>
                    <SquareList disable={false}>
                        <Square 
                            icon={resultIcons.Thinness}
                            bgColor1={"bg-gray-500"} 
                            bgColor2={"bg-gray-600"} 
                            textColor={"text-white"} 
                            firstLabel={"Magreza"} 
                            secondLabel={"IMC menor que 18.4"} 
                            arrow={false}
                        />
                        <Square 
                            icon={resultIcons.Normal}
                            bgColor1={"bg-emerald-500"} 
                            bgColor2={"bg-emerald-600"} 
                            textColor={"text-white"} 
                            firstLabel={"Normal"} 
                            secondLabel={"IMC entre 18.5 e 24.9"} 
                            arrow={false}
                        />
                        <Square 
                            icon={resultIcons.Overweight}
                            bgColor1={"bg-yellow-500"} 
                            bgColor2={"bg-yellow-600"} 
                            textColor={"text-white"} 
                            firstLabel={"Sobrepeso"} 
                            secondLabel={"IMC entre 25.0 e 29.9"} 
                            arrow={false}
                        />
                        <Square 
                            icon={resultIcons.Obesity}
                            bgColor1={"bg-rose-500"} 
                            bgColor2={"bg-rose-800"} 
                            textColor={"text-white"} 
                            firstLabel={"Obesidade"} 
                            secondLabel={"IMC maior que 30"} 
                            arrow={false}
                        />
                    </SquareList>
                </>
                :
                <>
                    <SquareList disable={false}>
                        <Square 
                            icon={result.icon} 
                            bgColor1={result.bgColor1} 
                            bgColor2={result.bgColor2} 
                            textColor={result.textColor} 
                            firstLabel={result.firstLabel} 
                            secondLabel={result.secondLabel} 
                            thirdLabel={result.thirdLabel}
                            arrow={true} 
                            onClick={handleClick} 
                            span={true}  
                        />
                    </SquareList>
                </>
                
                }
            </ResultSide>
        </Container>
    );
}
    
export default Page;