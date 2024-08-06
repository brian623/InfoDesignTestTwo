import { parse, format, isValid } from 'date-fns';
import { LineData } from '../models/Energy.models';

export const formatDate = (date: string, formato: string): string => {
  const fechaParseada = parse(date, formato, new Date());

  return isValid(fechaParseada) ? format(fechaParseada, 'MMM-yyyy') : 'invalid';
};

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const transformData = (data: LineData[]) => {
  const datasets = data.map((lineData) => ({
    label: lineData.line,
    data: lineData.values.map(({ date, value }) => ({ x: date, y: value })),
    borderColor: lineData.color,
    fill: false,
    tension: 0.1,
  }));

  return { datasets };
};

