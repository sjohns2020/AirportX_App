import { render, screen, fireEvent } from '@testing-library/react';
import Header from './components/Header';

describe('Header', () => {
  let header;
  
  beforeEach(() => {
    header = render(<Header />)
  })

  it('should have a title for Arrivals and Departures', () => {
    const title = header.getByTestId('get-header');
    expect(title.textContent).toEqual('Arrivals & Departures');
  })
})
