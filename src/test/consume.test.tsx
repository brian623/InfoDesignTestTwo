import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { act } from 'react';
import store from '../store';
import Consume from '../components/Consume';

describe('Consume Component', () => {
    it('Should render correctly', async () => {
        await act(async () => {
            render(
                <Provider store={store}>
                    <Consume />
                </Provider>
            );
        });
        expect(await screen.findByText('Consume Energy')).toBeInTheDocument();
        expect(await screen.findByRole('img')).toBeInTheDocument();
    });
});