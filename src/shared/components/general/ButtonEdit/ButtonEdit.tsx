import { FC, PropsWithChildren } from 'react';

import Button from '../Button/Button';

interface IProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  pending?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const ButtonEdit: FC<PropsWithChildren<IProps>> = (props) => {
  return (
    <Button variant="info" {...props}>
      <i className="fa-regular fa-pen-to-square" />
    </Button>
  );
};

export default ButtonEdit;
