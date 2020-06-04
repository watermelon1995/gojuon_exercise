import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import RadioQuestion from './RadioQuestion';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        watermelon1995
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function shuffle(a) {
  let j = 0;
  let x = 0;
  let i = 0;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

export default function Quiz() {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const [replyState, setReplyState] = React.useState(-1);
  const [helperText, setHelperText] = React.useState('');
  // const handleChange = (event, value) => {
  //   setPage(value);
  // };
  const data = [
    {
      flat: 'ん',
      chip: 'ン',
      sound: 'n',
    },
    {
      flat: 'わ',
      chip: 'ワ',
      sound: 'wa',
    },
    {
      flat: 'ら',
      chip: 'ラ',
      sound: 'ra',
    },
    {
      flat: 'や',
      chip: 'ヤ',
      sound: 'ya',
    },
    {
      flat: 'ま',
      chip: 'マ',
      sound: 'ma',
    },
    {
      flat: 'は',
      chip: 'ハ',
      sound: 'ha',
    },
    {
      flat: 'な',
      chip: 'ナ',
      sound: 'na',
    },
    {
      flat: 'た',
      chip: 'タ',
      sound: 'ta',
    },
    {
      flat: 'さ',
      chip: 'サ',
      sound: 'sa',
    },
    {
      flat: 'か',
      chip: 'カ',
      sound: 'ka',
    },
    {
      flat: 'あ',
      chip: 'ア',
      sound: 'a',
    },
    {
      flat: 'り',
      chip: 'リ',
      sound: 'ri',
    },
    {
      flat: 'み',
      chip: 'ミ',
      sound: 'mi',
    },
    {
      flat: 'ひ',
      chip: 'ヒ',
      sound: 'hi',
    },
    {
      flat: 'に',
      chip: 'ニ',
      sound: 'ni',
    },
    {
      flat: 'ち',
      chip: 'チ',
      sound: 'chi',
    },
    {
      flat: 'し',
      chip: 'シ',
      sound: 'shi',
    },
    {
      flat: 'き',
      chip: 'キ',
      sound: 'ki',
    },
    {
      flat: 'い',
      chip: 'イ',
      sound: 'i',
    },
    {
      flat: 'る',
      chip: 'ル',
      sound: 'ru',
    },
    {
      flat: 'ゆ',
      chip: 'ユ',
      sound: 'yu',
    },
    {
      flat: 'む',
      chip: 'ム',
      sound: 'mu',
    },
    {
      flat: 'ふ',
      chip: 'フ',
      sound: 'fu',
    },
    {
      flat: 'ぬ',
      chip: 'ヌ',
      sound: 'nu',
    },
    {
      flat: 'つ',
      chip: 'ツ',
      sound: 'tsu',
    },
    {
      flat: 'す',
      chip: 'ス',
      sound: 'su',
    },
    {
      flat: 'く',
      chip: 'ク',
      sound: 'ku',
    },
    {
      flat: 'う',
      chip: 'ウ',
      sound: 'u',
    },
    {
      flat: 'れ',
      chip: 'レ',
      sound: 're',
    },
    {
      flat: 'め',
      chip: 'メ',
      sound: 'me',
    },
    {
      flat: 'へ',
      chip: 'ヘ',
      sound: 'he',
    },
    {
      flat: 'ね',
      chip: 'ネ',
      sound: 'ne',
    },
    {
      flat: 'て',
      chip: 'テ',
      sound: 'te',
    },
    {
      flat: 'せ',
      chip: 'セ',
      sound: 'se',
    },
    {
      flat: 'け',
      chip: 'ケ',
      sound: 'ke',
    },
    {
      flat: 'え',
      chip: 'エ',
      sound: 'e',
    },
    {
      flat: 'を',
      chip: 'ヲ',
      sound: 'wo',
    },
    {
      flat: 'ろ',
      chip: 'ロ',
      sound: 'ro',
    },
    {
      flat: 'よ',
      chip: 'ヨ',
      sound: 'yo',
    },
    {
      flat: 'も',
      chip: 'モ',
      sound: 'mo',
    },
    {
      flat: 'ほ',
      chip: 'ホ',
      sound: 'ho',
    },
    {
      flat: 'の',
      chip: 'ノ',
      sound: 'no',
    },
    {
      flat: 'と',
      chip: 'ト',
      sound: 'to',
    },
    {
      flat: 'そ',
      chip: 'ソ',
      sound: 'so',
    },
    {
      flat: 'こ',
      chip: 'コ',
      sound: 'ko',
    },
    {
      flat: 'お',
      chip: 'オ',
      sound: 'o',
    },
  ];

  // Pick a random character from data
  const character = data[(data.length * Math.random()) | 0];
  let choices = [];
  choices.push({
    text: character.flat,
  });

  while (choices.length < 4) {
    let temp = data[(data.length * Math.random()) | 0];
    if (temp.flat !== character.flat) {
      choices.push({
        text: temp.flat,
      });
    }
  }
  // Shuffle
  shuffle(choices);

  // Construct the question obj
  let temp = {
    title: '哪個是以下發音的平假名？',
    title_big_text: character.sound,
    choices: choices,
    answer: {
      text: character.flat,
    },
  };
  const [question, setQuestion] = React.useState(temp);

  const handleNextQuestion = () => {
    // Pick a random character from data
    const answerIdx = (data.length * Math.random()) | 0;
    const character = data[answerIdx];
    const questionType = Math.floor(2 * Math.random());
    let choices = [];
    choices.push({
      text: questionType == 0 ? character.flat : character.sound,
    });

    let choiceSet = new Set();
    choiceSet.add(answerIdx);

    while (choices.length < 4) {
      let idx = (data.length * Math.random()) | 0;
      let temp = data[idx];
      if (choiceSet.has(idx) === false) {
        choiceSet.add(idx);
        choices.push({
          text: questionType == 0 ? temp.flat : temp.sound,
        });
      }
    }
    // Shuffle
    shuffle(choices);

    const newQuestion = {
      title:
        questionType === 0
          ? '哪個是以下發音的平假名？'
          : '哪個是以下平假名的發音？',
      title_big_text: questionType === 0 ? character.sound : character.flat,
      choices,
      answer: {
        text: questionType === 0 ? character.flat : character.sound,
      },
    };

    setQuestion(newQuestion);
    setHelperText('');
    setReplyState(-1);
  };

  const handleSubmitQuestion = reply => {
    if (reply === question.answer.text) {
      setReplyState(0);
      setHelperText('Correct!!');
    } else {
      setHelperText('You are wrong, the answer is ' + question.answer.text);
      setReplyState(1);
    }
  };

  return (
    <Container component="main" maxWidth="xl">
      <CssBaseline />
      <Box mt={8}>
        <RadioQuestion
          question={question}
          on_next={handleNextQuestion}
          on_submit={handleSubmitQuestion}
          error={replyState == 1}
          helper_text={helperText}
        />
        <Copyright />
      </Box>
    </Container>
  );
}
