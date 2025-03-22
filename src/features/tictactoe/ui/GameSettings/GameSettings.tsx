import { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';

import { gameModeOptions, initialValues } from './helper';
import { useActions } from '@src/app/store/hooks';
import { setGameMode } from '@features/tictactoe/tictactoeSlice';
import Button from '@components/general/Button';
import Select from '@components/inputs/Select';

const GameSettings: FC = () => {
  const navigate = useNavigate();
  const { dispatchSetGameMode } = useActions({ setGameMode });

  const onSubmit = ({ gameMode }: typeof initialValues) => {
    dispatchSetGameMode(gameMode.value);
    navigate('/game');
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Field name="gameMode" label="Game Mode" component={Select} options={gameModeOptions} />

        <Button type="submit" variant="primary">
          Start Game
        </Button>
      </Form>
    </Formik>
  );
};

export default GameSettings;
