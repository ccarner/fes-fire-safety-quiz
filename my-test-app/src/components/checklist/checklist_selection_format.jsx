import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function Checklist_Format() {
    const [value, setValue] = React.useState('female');

    function handleChange(event) {
        setValue(event.target.value);
    }

    return (
        <FormControl component="fieldset">


            <FormLabel component="legend"></FormLabel>


            <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>

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