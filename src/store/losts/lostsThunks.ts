import { createAsyncThunk } from '@reduxjs/toolkit';
import { lostsEnergy } from '../../utils/mocks/data.mock';
import { LineData, Energy } from '../../utils/models/Energy.models';
import { formatDate, getRandomColor } from "../../utils/elements/elements";

export const fetchLostsData = createAsyncThunk<LineData[]>(
  'losts/fetchLostsData',
  async () => {
    const data: Energy[] = lostsEnergy;

    const lines: { [key: string]: LineData } = {};
    const colors = {} as any;

    const getColor = (line: string) => {
      if (!colors[line]) {
        colors[line] = getRandomColor();
      }
      return colors[line];
    };

    data.forEach(d => {
      const date = formatDate(d.date, 'yyyy-dd-MM');
      const line = lines[d.line] || { color: getColor(d.line), values: [] };
      line.values.push({ date, value: Number(d.comercial) });
      lines[d.line] = line;
    });

    return Object.entries(lines).map(([line, lineData]) => ({
      ...lineData,
      line,
    }));
  }
);