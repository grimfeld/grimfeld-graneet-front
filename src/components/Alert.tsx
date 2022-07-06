import React, { FC, ReactElement } from 'react';

const Alert: FC<{ status?: boolean; length?: number }> = ({
  status = false,
  length = 0,
}) => {
  return (
    <div
      className={[
        status ? 'bg-success' : 'bg-danger',
        'p-4 text-white font-bold',
      ].join(' ')}
    >
      <p>
        {status
          ? `${length} ville${
              length > 1 ? 's' : ''
            } correspondant au texte choisi`
          : 'Aucune ville correspondant au texte choisi'}
      </p>
    </div>
  );
};

export default Alert;
