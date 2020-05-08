import React from 'react';
import { render } from '@testing-library/react';
import {App} from './App';

test('renders main component', () => {
  const { getByText } = render(<App contacts={[]} loadContactsAsync={()=>{}}/>);
  const linkElement = getByText(/A fellowship of 1337/i);
  expect(linkElement).toBeInTheDocument();
});
