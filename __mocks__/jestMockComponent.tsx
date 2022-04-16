import React from 'react';
import { MockComponent } from './MockComponent';

export const jestMockedComponent = (text) =>
  jest.fn().mockImplementation(() => <MockComponent contentString={text} />);
