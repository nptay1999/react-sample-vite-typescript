import create from 'zustand';

interface CountState {
  count: number;
  increase: () => void;
}
const useCountStore = create<CountState>((set, get) => ({
  count: 2,
  increase: () => set((state) => ({ count: state.count + 1 })),
}));

export default useCountStore;
