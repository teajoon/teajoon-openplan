import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

import { TSubmitResult } from "@web/types";

export const useStore = create(
  persist(
    (set) => ({
      datas: {},
      updateDatas: (datas: { submitResult: TSubmitResult }) => set({ ...datas }),
    }),
    {
      name: "store-data",
      storage: createJSONStorage(() => localStorage)
    }
  ),
);
