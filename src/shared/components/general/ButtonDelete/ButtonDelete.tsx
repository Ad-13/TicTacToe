import { FC, PropsWithChildren } from 'react';

import Button from '../Button/Button';

interface IProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  pending?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const ButtonDelete: FC<PropsWithChildren<IProps>> = (props) => {
  return (
    <Button variant="danger" {...props}>
      <i className="fa-regular fa-trash-can" />
    </Button>
  );
};

export default ButtonDelete;
