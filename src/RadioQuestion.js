import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  big_text: {
    fontSize: '72px',
    // borderStyle: 'groove'
    padding: '10px'
  },
  'radio_root': {
    padding: '10px'
  },
  'radio_label': {
    fontSize: '24px'
  }
}));



export default function RadioQuestion({question, error, helper_text, on_submit, on_next}) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = event => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    on_submit(value);
  }

  const handleNextClick = event => {
    on_next()
  }

  return (
    <form onSubmit={handleSubmit}>
    <Card className={classes.root} variant="outlined">
    <FormControl className={classes.form} error={error} component="fieldset">
      <CardContent>
          <FormLabel component="legend">{question.title}</FormLabel>
          <Box display="flex" justifyContent="center">
            <div className={classes.big_text}>{question.title_big_text}</div>
          </Box>
          <RadioGroup
            aria-label="answer"
            name="answer"
            value={value}
            onChange={handleChange}
          >
            {question.choices.map(item => (
              <FormControlLabel
                classes={{
                  root: classes.radio_root,
                  label: classes.radio_label
                }}
                key={item.text}
                value={item.text}
                control={<Radio />}
                label={item.text}
                disabled={error}
               />
            ))}
          </RadioGroup>
          {/* <span style={{display:"box"}}>{answer}</span> */}
          <FormHelperText>{helper_text}</FormHelperText>
      </CardContent>
      <CardActions>
          <Button size="small" type="submit" variant="outlined" color="primary">Submit</Button>
          <Button size="small" variant="outlined" color="primary" onClick={handleNextClick}>Next</Button>
      </CardActions>
      </FormControl>
    </Card>
    </form>
  );
}

RadioQuestion.propTypes = {
  question: PropTypes.shape({
    title: PropTypes.string.isRequired,
    title_big_text: PropTypes.string.isRequired,
    choices: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired
      })
    ),
    answer: PropTypes.shape({
      text: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  error: PropTypes.bool,
  helper_text: PropTypes.string.isRequired,
  on_submit: PropTypes.func.isRequired,
  on_next: PropTypes.func.isRequired
};
