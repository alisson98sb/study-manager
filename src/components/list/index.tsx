import React, { useState } from 'react';
import { IMatter } from '../../types/IMatter';
import Item from './item';
import style from './list.module.scss';

function List({ matterProp }: {matterProp: IMatter[]}) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {matterProp.map((item, index) => (
                    <Item 
                        key={index}
                        {...item}                    
                        /*Desestruturando o item, cuidado pois ao fazer isso voce passa todos os elementos que item possui, imagina item sendo um objeto vindo de uma api, nesse caso nao seria uma boa;*/
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;