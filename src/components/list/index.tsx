import React from 'react';

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
        <aside>
            <h2></h2>
            <ul>
                {matter.map((item, index)=>(
                    <li key={index}>
                        { /* nome da materia */} 
                        <h3>{item.name}</h3>
                        {/*Tempo da materia 00:00:00 */ }
                        <span>{item.time}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}
export default List;