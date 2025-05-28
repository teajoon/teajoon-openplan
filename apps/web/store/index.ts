import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

import { TSubmitResult } from "@web/types";

type TDatas = {
  submitResult?: TSubmitResult;
}

const storeKey = "store-data";

export const useStore = create(
  persist<{
    datas?: TDatas,
    updateDatas: (datas: TDatas) => void;
  }>(
    (set) => ({
      datas: undefined,
      updateDatas: (newDatas) => set({ datas: { ...newDatas } }),
    }),
    {
      name: storeKey,
      storage: createJSONStorage(() => localStorage)
    }
  ),
);
