import React from 'react';
import style from './button.module.scss';

class Button extends React.Component <{ texto: string}> {
    render() {
        return (
            <button className={style.button}>
                {this.props.texto}
            </button>
        )
    }
}

export default Button;