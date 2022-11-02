import React, { useState } from 'react';

import { timerToSeconds } from "../../common/utils/time";
import { IMatter } from "../../types/IMatter";
import Button from "../button";
import Clock from "./clock";
import style from "./stopwatch.module.scss";

interface Props {
    selected: IMatter | undefined;
}

export default function Stopwatch( { selected }: Props ) {

    const [timer, setTimer ] = useState<number>()
    if(selected?.time){
        setTimer(timerToSeconds(selected.time))
    }
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock />
            </div>
            <Button texto="Começar" />
        </div>
    )
}