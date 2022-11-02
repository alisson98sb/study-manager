import style from "./clock.module.scss";

interface Props{
    timer: number | undefined;
}
export default function Clock({timer = 0}: Props) {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    const [minutesTen, minutesUnit] = String(minutes).padStart(2, '0');
    const [secondsTen, sencondsUnit] = String(seconds).padStart(2, '0');

    
    return (
        <>
            <span className={style.relogioNumero}>{minutesTen}</span>
            <span className={style.relogioNumero}>{minutesUnit}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secondsTen}</span>
            <span className={style.relogioNumero}>{sencondsUnit}</span>
        </>
    )
}