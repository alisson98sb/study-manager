import { IMatter } from '../../../types/IMatter';
import style from '../list.module.scss';


export default function Item ({matter, time, selected, completed, uuid}: IMatter) {
    console.log({matter, time, selected, completed, uuid})
	  return (
        <li className={style.item}>
            { /* nome da materia */} 
            <h3>{matter}</h3>
            {/*Tempo da materia 00:00:00 */ }
            <span>{time}</span>
        </li>
    )
}