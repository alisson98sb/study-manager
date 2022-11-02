import React, { useState } from 'react';
import { IMatter } from '../../types/IMatter';
import Item from './item';
import style from './list.module.scss';

interface Props {
    matterProp: IMatter[],
    selectMatter: (selectedMatter: IMatter) => void;
}

function List({ matterProp, selectMatter }: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {matterProp.map((item) => (
                    <Item 
                        key={item.uuid}
                        {...item}                    
                        /*Desestruturando o item, cuidado pois ao fazer isso voce passa todos os elementos que item possui, imagina item sendo um objeto vindo de uma api, nesse caso nao seria uma boa;*/
                        selectMatter={selectMatter}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;