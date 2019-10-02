// The base of this function is obtained from material-ui
// This function is then modified to suit our app

import React from 'react';
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@material-ui/core';
import PropTypes from 'prop-types';


// Three buttons are displayed, each has a corresponding value.
// When a user makes a selection, the value will be passed to the parent class.
function Checklist_Format(props) {

    const [value, setValue] = React.useState('female');
    function handleChange(event) {
        props.answerFeedback(event.target.value);
        setValue(event.target.value);
    }

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend"></FormLabel>
            <RadioGroup aria-label="position" name="position" value={value}
                onChange={handleChange} row>
                <FormControlLabel
                    value="option1"
                    control={<Radio color="primary" />}
                    label="Yes"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="option2"
                    control={<Radio color="primary" />}
                    label="No"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="option3"
                    control={<Radio color="primary" />}
                    label="Not Sure"
                    labelPlacement="start"
                />
            </RadioGroup>
        </FormControl>
    );

}

// To ensure the correct props are passed
Checklist_Format.propTypes = {
    answerFeedback: PropTypes.object.isRequired,
    value: PropTypes.object.isRequired,
};

export default Checklist_Format;
