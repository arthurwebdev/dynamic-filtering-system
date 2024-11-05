import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import Products from './components/products';
import mockData from './mock-data/mock-data';

const mockStore = configureStore([]);

describe('Products Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      products: {
        data: {
          current_page: 1,
          last_page: 5,
          data: mockData
        },
        isEmpty: false,
        isFetching: false,
        isFetchingByFilter: false,
        isFetchingNextData: false,
        isEmptyByfilter: false,
      },
    });
  });

  test('renders Products component', () => {
    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );
    
    expect(screen.getByText(/No products/)).toBeInTheDocument()
  });

});
