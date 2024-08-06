import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { act } from 'react';
import store from '../store';
import EnergyTable from '../components/EnergyTable';

describe('EnergyTable Component', () => {
    it('Should render correctly', async () => {
        await act(async () => {
            render(
                <Provider store={store}>
                    <EnergyTable />
                </Provider>
            );
        });
        expect(await screen.findByTestId('energyTable')).toBeInTheDocument();
    });
});
