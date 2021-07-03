import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFilterForm.defaultProps ={
    onSubmit: null,
}

function PostFilterForm(props) {
    const {onSubmit} = props;
    const [valueS , setValueS] = useState('');
    const typingTimeoutRef = useRef(null);

    function handleOnSubmit(e) {
        const tmpValue = e.target.value;
        setValueS(tmpValue);
        if (!onSubmit) {
            return;
        }

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm : tmpValue
            }
            onSubmit(formValues);

        }, 300);

    }

    return (
        <form action="">
            <input type="text"
            value={valueS}
            onChange={handleOnSubmit} />
        </form>
    );
}

export default PostFilterForm;