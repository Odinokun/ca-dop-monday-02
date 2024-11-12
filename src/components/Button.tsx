import { FC } from 'react';

type PropsType = {
  name: string;
  callback: () => void;
};

export const Button: FC<PropsType> = ({ name, callback }) => {
  const onClickHandler = () => {
    callback();
  };

  return <button onClick={onClickHandler}>{name}</button>;
};
