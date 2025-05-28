"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Button from "@repo/ui/elements/button";
import Text from "@repo/ui/elements/text";
import { Spinner } from "@repo/ui/elements/loading";

import { mutation } from "@web/utils/request";
import { TSubmitResult } from "@web/types";
import { useStore } from "@web/store";

export default function Home() {
  const router = useRouter();
  const { isPending, mutateAsync } = mutation<TSubmitResult>(['submit'], {});
  const datas = useStore(state => state.datas);
  const updateDatas = useStore(state => state.updateDatas);
  
  const submit = async () => {
    if (isPending) return;
    const { success, data } = await mutateAsync({
      method: "get",
      url: "/id/0/info"
    });
    if (success) {
      updateDatas({ submitResult: data });
      router.push("/result");
    }
  }

  useEffect(() => {
    if (datas?.submitResult) {
      router.push('/result');
    }
  }, []);

  return (
    <div className="grid h-screen grid-rows-[52px_1fr_140px]">
      <div className="grid h-full justify-center content-center">
        <Text size="" weight="font-medium text-[15px]">지원자분 성함을 적어주세요</Text>
      </div>
      <div className="grid h-full justify-center content-center">
        <Text size="text-[32px]" weight="font-semibold" align="text-center" color="text-black-100">안녕하세요<br />김태준입니다.</Text>
      </div>
      <div className="grid h-full justify-center content-center">
        <Button variant="flat" color="black" width="w-[335px]" borderRadius="rounded-[12px]" height="h-[58px]"
          onClick={() => submit()}>
          {
            isPending ? (
              <Spinner color="var(--color-white-100)" />
            ) : (
              <Text size="text-[24px]" color="text-white-100" weight="font-semibold">다음</Text>
            )
          }
        </Button>
      </div>
    </div>
  ); 
}
