"use client";

import { useRouter } from "next/navigation";

import Button from "@repo/ui/elements/button";
import Text from "@repo/ui/elements/text";

const Custom404 = () => {
  const router = useRouter();
  return (
    <div className="grid w-full h-screen justify-center content-center justify-items-center gap-[120px]">
      <Text size="text-[24px]" color="text-text-primary" weight="font-semibold">404 - Page Not Found</Text>
      <Button variant="flat" color="black" width="w-[335px]" borderRadius="rounded-[12px]" height="h-[58px]"
        onClick={() => router.back()}>
        <Text size="text-[24px]" color="text-white-100" weight="font-semibold">Go back</Text>
      </Button>
    </div>
  );
};

export default Custom404;
