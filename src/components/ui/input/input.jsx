import React, { forwardRef } from 'react';
import style from './style.module.scss';

// forwardRef orqali refni Input komponentiga uzatamiz
export const Input = forwardRef(({ placeholder, type = 'text', variant, size, startIcon, endIcon, value, onChange }, ref) => {
    return (
        <div className={`${style.inputWrapper} ${style[variant]} ${style[size]}`}>
            {/* refni inputga qo'shamiz */} 
            <input
                className={style.input}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                ref={ref}
            />
        </div>
    );
});

