import { createAsyncThunk } from '@reduxjs/toolkit';
import { costsEnergy } from '../../utils/mocks/data.mock';
import { LineData, Energy } from '../../utils/models/Energy.models';
import { formatDate, getRandomColor } from "../../utils/elements/elements";

export const fetchCostsData = createAsyncThunk<LineData[]>(
  'costs/fetchCostsData',
  async () => {
    const data: Energy[] = costsEnergy;

    const lines: { [key: string]: LineData } = {};
    const colors = {} as any;

    const getColor = (line: string) => {
      if (!colors[line]) {
        colors[line] = getRandomColor();
      }
      return colors[line];
    };

    data.forEach(d => {
      const date = formatDate(d.date, 'yyyy-MM-dd');
      const line = lines[d.line] || { color: getColor(d.line), values: [] };
      line.values.push({ date, value: parseInt(d.comercial) });
      lines[d.line] = line;
    });

    return Object.entries(lines).map(([line, lineData]) => ({
      ...lineData,
      line,
    }));
  }
);
