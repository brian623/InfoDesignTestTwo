import { createAsyncThunk } from '@reduxjs/toolkit';
import { consumeEnergy } from '../../utils/mocks/data.mock';
import { LineData, Energy } from '../../utils/models/Energy.models';
import { formatDate, getRandomColor } from "../../utils/elements/elements";

export const fetchConsumeData = createAsyncThunk<LineData[]>(
  'consume/fetchConsumeData',
  async () => {
    const data: Energy[] = consumeEnergy;

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
      line.values.push({ date, value: parseInt(d.comercial) });
      lines[d.line] = line;
    });

    return Object.entries(lines).map(([line, lineData]) => ({
      ...lineData,
      line,
    }));
  }
);
