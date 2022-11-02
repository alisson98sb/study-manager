import React, { useState, useEffect } from 'react';

import { timerToSeconds } from "../../common/utils/time";
import { IMatter } from "../../types/IMatter";
import Button from "../button";
import Clock from "./clock";
import style from "./stopwatch.module.scss";

interface Props {
    selected: IMatter | undefined;
    finishedMatter: () => void;
}

export default function Stopwatch( { selected, finishedMatter }: Props ) {

    const [timer, setTimer ] = useState<number>();
    useEffect(()=>{
        if(selected?.time){
            setTimer(timerToSeconds(selected.time))
        }
    },[selected])

    function regrecive(contator: number = 0){
        setTimeout(() => {
            if(contator > 0) {
                setTimer(contator - 1);
                return regrecive(contator - 1);
            }
            finishedMatter();
            console.log("Finish")
        }, 1000)
    }
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock 
                    timer={timer}
                />
            </div>
            <Button 
                texto="Começar" 
                onClick={ ()=> {regrecive(timer)}}
            />
        </div>
    )
}