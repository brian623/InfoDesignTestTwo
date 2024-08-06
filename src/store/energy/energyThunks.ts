import { createAsyncThunk } from '@reduxjs/toolkit';
import { consumeEnergy, costsEnergy, lostsEnergy } from '../../utils/mocks/data.mock';
import { EnergyConsolidated } from '../../utils/models/Energy.models';
import { formatDate } from "../../utils/elements/elements";

export const fetchEnergyData = createAsyncThunk<EnergyConsolidated[]>(
  'energy/fetchEnergyData',
  async () => {
    const consolidateMap = new Map<string, EnergyConsolidated>();

    // Process consume data
    consumeEnergy.forEach(d => {
      const date = formatDate(d.date, 'yyyy-dd-MM');
      const key = `${d.line}-${date}`;
      const existing = consolidateMap.get(key) || { line: d.line, date, consume: 0, costs: 0, losts: 0 };      
      existing.consume += Number(d.comercial);
      consolidateMap.set(key, existing);
    });

    // Process costs data
    costsEnergy.forEach(d => {
      const date = formatDate(d.date, 'yyyy-MM-dd');
      const key = `${d.line}-${date}`;
      const existing = consolidateMap.get(key) || { line: d.line, date, consume: 0, costs: 0, losts: 0 };
      existing.costs += parseInt(d.comercial);
      consolidateMap.set(key, existing);
    });

    // Process losts data
    lostsEnergy.forEach(d => {
      const date = formatDate(d.date, 'yyyy-dd-MM');
      const key = `${d.line}-${date}`;
      const existing = consolidateMap.get(key) || { line: d.line, date, consume: 0, costs: 0, losts: 0 };
      existing.losts += Number(d.comercial);
      consolidateMap.set(key, existing);
    });

    return Array.from(consolidateMap.values());
  }
);
