import React from 'react';
import style from './button.module.scss';

class Button extends React.Component <{ 
    texto: string,
    type?: "button" | "submit" | "reset" | undefined, 
    onClick?: () => void
}> {
    render() {
        const { type = "button", onClick } = this.props;
        return (
            <button 
                className={style.button}
                type={type}
                onClick={onClick}
            >
                {this.props.texto}
            </button>
        )
    }
}

export default Button;