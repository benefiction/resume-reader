import React from 'react';

export const MockComponent: React.FC<{ contentString: string }> = ({ contentString }) => (
  <div>{contentString}</div>
);
