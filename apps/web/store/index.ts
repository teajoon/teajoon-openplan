import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

import { TSubmitResult } from "@web/types";

const storeKey = "store-data";

export const useStore = create<{
  datas: {
    submitResult?: TSubmitResult;
  },
  updateDatas: (datas: {
    submitResult?: TSubmitResult
  }) => void;
}>()(
  persist(
    (set) => ({
      datas: localStorage.getItem(storeKey) || {},
      updateDatas: (newDatas) => set({ datas: { ...newDatas } }),
    }),
    {
      name: storeKey,
      storage: createJSONStorage(() => localStorage)
    }
  ),
);
