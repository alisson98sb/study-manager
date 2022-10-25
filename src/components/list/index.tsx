import React from 'react';
import Item from './item';
import style from './list.module.scss';

function List() {
    const matter = [
        {
            name: 'ReactJs',
            time: '01:00:00'
        },
        {
            name: 'JavaScript',
            time: '01:30:00'
        }
    ]
    return (
        <aside className={style.listaTarefas}>
            <h2></h2>
            <ul>
                {matter.map((item, index)=>(
                    <Item 
                        key={index}
                        /*Desestruturando o item, cuidado pois ao fazer isso voce passa todos os elementos que item possui, imagina item sendo um objeto vindo de uma api, nesse caso nao seria uma boa;*/
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}
export default List;