import style from '../list.module.scss';


export default function Item ({name, time}: {name: string, time: string}) {
	  return (
        <li className={style.item}>
            { /* nome da materia */} 
            <h3>{name}</h3>
            {/*Tempo da materia 00:00:00 */ }
            <span>{time}</span>
        </li>
    )
}