import * as React from 'react';
import './footer.css'

type T_Props = {}

export const Footer: React.FC<T_Props> = (props: T_Props) => {
  return (
    <div className='footer'>
      © Copyright 2022
    </div>
  );
}
