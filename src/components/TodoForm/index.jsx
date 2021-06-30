import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null
}

function TodoForm(props) {

    var {onSubmit} = props;
    var [ value, setValue] = useState('');
    function handleOnChange(e) {
        console.log(e.target.value);
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!onSubmit) {
            return
        }
        const formValue = {
            title: value,
        };
        onSubmit(formValue)
        setValue('');


    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="" id="" 
            value={value} 
            onChange={handleOnChange}
            />
        </form>
    );
}

export default TodoForm;