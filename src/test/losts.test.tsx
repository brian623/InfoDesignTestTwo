import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { act } from 'react';
import store from '../store';
import Losts from '../components/Losts';

describe('Losts Component', () => {
    it('Should render correctly', async () => {
        await act(async () => {
            render(
                <Provider store={store}>
                    <Losts />
                </Provider>
            );
        });
        expect(await screen.findByText('Losts Energy')).toBeInTheDocument();
        expect(await screen.findByRole('img')).toBeInTheDocument();
    });
});
