import './styles.css';
import React from 'react';

export default function Input({ label, showLabel='true', placeholder, disabled, type, width, height, color, fontSize, value, onChange}) {
    return (
        <div className='input'>
            {showLabel && <div> <label className='input_label'>{label}</label> <br className='brInputComponents' /> </div>}
            <input className='input_box' type={type} placeholder={placeholder} disabled={disabled} style={{ width, height, color, fontSize}} value={value} onChange={onChange} />
        </div>
    )
}
