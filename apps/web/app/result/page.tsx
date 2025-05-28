"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import Text from "@repo/ui/elements/text";
import Button from "@repo/ui/elements/button";
import { useStore } from "@web/store";

const Result = () => {
  const router = useRouter(); 
  const { datas, updateDatas } = useStore(state => state);
  const [isReady, setIsReady] = useState(false);

  const goBack = () => {
    router.replace("/");
    updateDatas({ submitResult: undefined });
  };

  useEffect(() => {
    if (isReady && !datas?.submitResult) {
      setTimeout(router.back, 1000);
    }
  }, [datas?.submitResult, isReady, router.back]); 

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!datas?.submitResult) return null;

  return (
    <div className="relative h-screen grid grid-rows-[52px_40px_1fr_60px]">
      <div className="grid justify-center content-center z-1">
        <Text size="text-[15px]" color="text-white-100" weight="font-medium">김태준</Text>
      </div>
      <div />
      <div className="grid justify-center content-center z-1">
        <div className="grid grid-cols-[660px_660px] gap-[80px]">
          <div className="relative">
            <Image fill className="rounded-[24px] object-cover" alt="download_url"
              placeholder="blur" blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBAB  bWyZJf74GZgAAAABJRU5ErkJggg=="
              src={datas?.submitResult?.download_url} />
          </div>
          <div className="grid content-center gap-[12px]">
            <div className="bg-white-100 rounded-[16px] p-[20px]">
              <div className="grid grid-cols-[1fr_1fr] gap-[16px]">
                <div>
                  <div>
                    <Text size="text-[15px]" color="text-text-primary" weight="font-medium">
											id
                    </Text>
                  </div>
                  <div>
                    <Text size="text-[15px]" color="text-primary-600" weight="font-medium">
                      {datas?.submitResult?.id}
                    </Text>
                  </div>
                </div>
                <div>
                  <div>
                    <Text size="text-[15px]" color="text-text-primary" weight="font-medium">
											author
                    </Text>
                  </div>
                  <div>
                    <Text size="text-[15px]" color="text-primary-600" weight="font-medium">
                      {datas?.submitResult?.author}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-100 rounded-[16px] p-[20px]">
              <div className="grid grid-cols-[1fr_1fr] gap-[16px]">
                <div>
                  <div>
                    <Text size="text-[15px]" color="text-text-primary" weight="font-medium">
											width
                    </Text>
                  </div>
                  <div>
                    <Text size="text-[15px]" color="text-primary-600" weight="font-medium">
                      {datas?.submitResult?.width}
                    </Text>
                  </div>
                </div>
                <div>
                  <div>
                    <Text size="text-[15px]" color="text-text-primary" weight="font-medium">
											height
                    </Text>
                  </div>
                  <div>
                    <Text size="text-[15px]" color="text-primary-600" weight="font-medium">
                      {datas?.submitResult?.height}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-100 rounded-[16px] p-[20px]">
              <div className="grid gap-[16px]">
                <div>
                  <div>
                    <Text size="text-[15px]" color="text-text-primary" weight="font-medium">
											url
                    </Text>
                  </div>
                  <div>
                    <Text size="text-[15px]" color="text-primary-600" weight="font-medium">
                      {datas?.submitResult?.url}
                    </Text>
                  </div>
                </div>
                <div>
                  <div>
                    <Text size="text-[15px]" color="text-text-primary" weight="font-medium">
											download_url
                    </Text>
                  </div>
                  <div>
                    <Text size="text-[15px]" color="text-primary-600" weight="font-medium">
                      {datas?.submitResult?.download_url}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid justify-center">
              <Button variant="flat" color="black" width="w-[154px]" borderRadius="rounded-[12px]" height="h-[48px]"
                onClick={() => goBack()}>
                <Text size="text-[16px]" color="text-white-100" weight="font-semibold">이전</Text>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div />
      <div className="absolute bg-no-repeat bg-center bg-cover -top-px -bottom-px -left-px -right-px z-0 opacity-30"
        style={{ backgroundImage: `url(${datas?.submitResult?.download_url})` }}/>
    </div>
  );
};

export default Result;
