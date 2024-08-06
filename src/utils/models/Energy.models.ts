export interface Energy {
    line: string
    date: string
    comercial: string
    industrial: string
    residential: string
    [key: string]: string
}

export interface LineData {
    color: string;
    line: string;
    values: Array<{date: string, value: number}>;
}

export interface EnergyConsolidated {
    line: string;
    date: string;
    consume: number;
    costs: number;
    losts: number;
  }