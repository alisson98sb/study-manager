import React from 'react';
import style from './button.module.scss';

class Button extends React.Component <{ 
    texto: string,
    type?: "button" | "submit" | "reset" | undefined
}> {
    render() {
        const { type = "button" } = this.props;
        return (
            <button 
                className={style.button}
                type={type}
            >
                {this.props.texto}
            </button>
        )
    }
}

export default Button;