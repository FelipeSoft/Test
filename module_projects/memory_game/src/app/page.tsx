"use client";

import { Container } from "./components/Container";
import { Game } from "./components/game/index";
import { Action } from "./components/action/index";
import { useEffect, useState } from "react";
import { gameFeatures } from "./utils/gameFeatures";
import { Card } from "./types/Card";
import { cards } from "../app/utils/cards";

const Page = () => {
    const [ timer, setTimer ] = useState<number | null>(null);
    const [ moves, setMoves ] = useState(0);
    const [ moveLimiter, setMoveLimiter ] = useState(0);
    const [ isPlaying, setIsPlaying ] = useState(false);
    const [ gameCards, setGameCards ] = useState<Card[]>([]);
    const [ finished, setFinished ] = useState(false);
    const [ message, setMessage ] = useState("");
    const cardsCounter = cards.length;

    const render = () => {
        setTimer(0);
        setMoveLimiter(0);
        setMoves(0);
        setIsPlaying(false);
        setFinished(false);
        setMessage("Interact with the cards to get started.");

        let temporaryDisplay: Card[] = [];
        let j = 0;

        for(let i = 0; i < cardsCounter; i++){
            for(let k = 0; k < 2; k++){
                temporaryDisplay.push({
                    index: null,
                    shown: false,
                    stayShown: false,
                    image: cards[j].image
                });
            }
            j++;
        }
        
        setGameCards(gameFeatures.shuffle(temporaryDisplay));
    };

    const move = (index: number) => {
        const updatedCards = [ ...gameCards ];
        
        if(moveLimiter < 2){
            if(!gameCards[index].shown && !gameCards[index].stayShown){
                setIsPlaying(true);
                setMoveLimiter(moveLimiter + 1);
                if (moveLimiter === 2) {
                    setMoveLimiter(0);
                } else {
                    setMoves(moves + 1);
                }
                updatedCards[index] = { ...gameCards[index], shown: true }
                setGameCards(updatedCards);
            }
        }
    
        if (timer === null) {
            setTimer(0);
        }
    }

    useEffect(() => render(), [])

    useEffect(() => {
        if (gameCards.every(element => element.stayShown === true)) {
            setFinished(true);
            setIsPlaying(false);
        };
        
        if (moveLimiter === 2){
            let opened = gameCards.filter(element => element.shown === true);
            if (opened.length === 2){
                const verifyDisplay = [...gameCards];
                if (opened[0].image === opened[1].image){
                    for(let i in verifyDisplay){
                        if(verifyDisplay[i].shown){
                            verifyDisplay[i].stayShown = true;
                            verifyDisplay[i].shown = false;
                        }
                    }
                    setMoveLimiter(0);
                    setGameCards(verifyDisplay);
                } else {
                    setTimeout(() => {
                        for(let i in verifyDisplay){
                            verifyDisplay[i].shown = false;
                        }
                        setGameCards(verifyDisplay);
                        setMoveLimiter(0);
                    }, 1000)
                }
            }
        }
    }, [moveLimiter])

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if(isPlaying){
            setMessage("Round in progress...")
        } else {
            if(finished){
                setMessage("Congratulations!");
            }
            return;
        }

        if (timer !== null) {
            interval = setInterval(() => {
                setTimer(prevTimer => (prevTimer !== null ? prevTimer + 1 : null));
            }, 1000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isPlaying]);

    const formattedTime = gameFeatures.timer(timer || 0);
    
    return(
        <Container>
            <Action.Root>
                <Action.Timer timer={formattedTime} />
                <Action.Moves moves={moves} />
                <Action.Button label={"Restart"} onClick={render}/>
            </Action.Root>
            <Game.Root>
                <Game.List>
                    {gameCards.map((element, index) => {
                        return (
                            <Game.Card 
                                key={index} 
                                image={element.image}
                                element={element}
                                onClick={() => move(index)} 
                            />             
                        )
                    })}
                </Game.List>
                <Game.Message message={message} />
            </Game.Root>
        </Container>
    )
}

export default Page;