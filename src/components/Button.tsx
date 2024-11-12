import { FC } from 'react';

type PropsType = {
  name: string;
  callback: () => void;
  className?: string;
};

export const Button: FC<PropsType> = ({ name, callback, className }) => {
  const onClickHandler = () => {
    callback();
  };

  return (
    <button className={className} onClick={onClickHandler}>
      {name}
    </button>
  );
};
