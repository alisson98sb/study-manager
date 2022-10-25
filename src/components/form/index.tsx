import React from 'react';
import Button from '../button'
import style from './form.module.scss';

class Form extends React.Component {
    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="matter">Add a new matter</label>
                    <input
                        type="text"
                        name="matter"
                        id="matter"
                        placeholder="What do you want to study?"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="timer">Timer</label>
                    <input 
                        type="time"
                        step="1"
                        name="timer"
                        id="timer"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button 
                    texto='Adicionar'
                />
            </form>
        )
    }
}

export default Form;
