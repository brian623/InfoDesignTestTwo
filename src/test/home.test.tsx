import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../store'; 
import Home from '../pages/home';

describe('Home Component', () => {
    it('Should render correctly with all child components', () => {
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        );
        expect(screen.getByTestId('home-container')).toBeInTheDocument();

    });
});
