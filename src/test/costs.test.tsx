import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { act } from 'react';
import store from '../store';
import Costs from '../components/Costs';

describe('Costs Component', () => {
    it('Should render correctly', async () => {
        await act(async () => {
            render(
                <Provider store={store}>
                    <Costs />
                </Provider>
            );
        });

        expect(await screen.findByText('Costs Energy')).toBeInTheDocument();
        expect(await screen.findByRole('img')).toBeInTheDocument();
    });
});
