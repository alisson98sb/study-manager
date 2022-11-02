import { IMatter } from '../../../types/IMatter';
import style from './item.module.scss';

interface Props extends IMatter {
    selectMatter: (selectedMatter: IMatter) => void;
}

export default function Item ({matter, time, selected, completed, uuid, selectMatter}: Props) {
	  return (
        <li 
            className={`${style.item} ${selected ? style.itemSelecionado : ''} ${ completed ? style.itemCompletado : ''}`}
            onClick={()=> !completed && selectMatter(
                {
                matter,
                time,
                selected,
                completed,
                uuid
                }
            )}    
        >
            { /* nome da materia */} 
            <h3>{matter}</h3>
            {/*Tempo da materia 00:00:00 */ }
            <span>{time}</span>
            {completed && <span className={style.concluido} aria-label="completed matter"></span>}
        </li>
    )
}