import { create } from 'zustand';
import { categories } from '@/lib/conversions';
export type ConverterState = {
  category: string;
  fromUnit: string;
  toUnit: string;
  fromValue: string;
  toValue: string;
  actions: {
    setCategory: (category: string) => void;
    setFromUnit: (unit: string) => void;
    setToUnit: (unit: string) => void;
    setFromValue: (value: string) => void;
    setToValue: (value: string) => void;
    swapUnits: () => void;
  };
};
export const useConverterStore = create<ConverterState>((set) => ({
  category: 'Length',
  fromUnit: 'm',
  toUnit: 'ft',
  fromValue: '1',
  toValue: '',
  actions: {
    setCategory: (category) => {
      const newUnits = categories[category].units;
      set({
        category,
        fromUnit: newUnits[0].symbol,
        toUnit: newUnits.length > 1 ? newUnits[1].symbol : newUnits[0].symbol,
      });
    },
    setFromUnit: (unit) => set({ fromUnit: unit }),
    setToUnit: (unit) => set({ toUnit: unit }),
    setFromValue: (value) => set({ fromValue: value }),
    setToValue: (value) => set({ toValue: value }),
    swapUnits: () => set((state) => ({ fromUnit: state.toUnit, toUnit: state.fromUnit, fromValue: state.toValue, toValue: state.fromValue })),
  },
}));
export const useConverterActions = () => useConverterStore((state) => state.actions);