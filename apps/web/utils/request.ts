import { useMutation, useQuery } from "@tanstack/react-query";

import API, { TAPIRequest } from "@repo/utils/api";

type TQueryProps = TAPIRequest & {
  key: unknown[];
  gcTime?: number;
  staleTime?: number;
}

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const query = <T,>({
  key, method, url, headers, params, data,
  gcTime = 1000 * 60 * 60, staleTime = 1000 * 60 * 60
}: TQueryProps) => {
  const innerAPI = new API(baseURL || "");
  innerAPI.setErrorCallback(error => {
    console.log(error)
  })
  const { data: resultData, isLoading } = useQuery({
    queryKey: key,
    gcTime, staleTime,
    queryFn: () => innerAPI.request<T>({
      method,
      headers,
      url,
      params,
      data,
    })
  });

  return {
    success: resultData?.success,
    data: resultData?.data,
    error: resultData?.error,
    isLoading
  }
}

type TMutationOptionProps = {
  gcTime?: number;
  saveKey?: boolean;
}

export const mutation = <T,>(key: string[], { gcTime = 1000 * 60 * 60 }: TMutationOptionProps) => {
  const innerAPI = new API(baseURL || "");
  innerAPI.setErrorCallback(error => {
    console.log(error)
  })
  const { mutate, mutateAsync, data, isPending } = useMutation({
    mutationKey: key,
    gcTime,
    mutationFn: ({ method, url, headers, params, data }: TAPIRequest) => innerAPI.request<T>({
      method,
      headers,
      url,
      params,
      data,
    }),
  });
  return {
    mutate, mutateAsync, data, isPending
  }
}
