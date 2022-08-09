import { useAppSelector } from '../hooks/store';
import React from 'react';

function ErrorMessage(): JSX.Element | null {
  const { INITIAL_ERROR } = useAppSelector((state) => state);

  if (INITIAL_ERROR) {
    return (
      <div
        style={{
          position: 'fixed',
          top: '30px',
          right: '30px',
          padding: '10px',
          backgroundColor: '#d96666',
          color: 'white',
          borderRadius: '5px',
        }}
      >
        {INITIAL_ERROR}
      </div>
    );
  }

  return null;
}

export default ErrorMessage;
