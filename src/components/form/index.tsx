import React from 'react';
import { IMatter } from '../../types/IMatter';
import Button from '../button'
import style from './form.module.scss';
import { v4 as uuidv4 } from 'uuid';

class Form extends React.Component <{
    setMatter: React.Dispatch<React.SetStateAction<IMatter[]>>
}> {
    state = {
        matter: "",
        time: "00:00"
    }

    addMatter(event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.setMatter(oldMatter => 
            [
                ...oldMatter,
                 
                {
                    ...this.state,
                    selected: false,
                    completed: false,
                    uuid: uuidv4()
                }
            ])
        this.setState({
            matter: "",
            time: "00:00"
        })
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.addMatter.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="matter">Add a new matter</label>
                    <input
                        type="text"
                        name="matter"
                        id="matter"
                        placeholder="What do you want to study?"
                        value={this.state.matter}
                        onChange={event => this.setState({...this.state, matter: event.target.value})}
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">Timer</label>
                    <input 
                        type="time"
                        step="1"
                        name="time"
                        id="time"
                        min="00:00:00"
                        max="12:30:00"
                        value={this.state.time}
                        onChange={event => this.setState({...this.state, time: event.target.value})}
                        required
                    />
                </div>
                <Button 
                    texto='Adicionar'
                    type="submit"
                />
            </form>
        )
    }
}

export default Form;
