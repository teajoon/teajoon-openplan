
import axios, { AxiosInstance, AxiosRequestConfig, ResponseType, AxiosResponseHeaders, RawAxiosResponseHeaders } from "axios";

export type TAPIConfig = {
  isLoginCallback?: boolean;
  isErrorCallback?: boolean;
  responseType?: ResponseType;
}

export type TAPIRequest = AxiosRequestConfig & {
  config?: TAPIConfig;
  isLoading?: boolean;
}

type TResponse<T> = {
  success: boolean;
  // status?: string;
  totalCount?: number;
  data?: T;
  error?: unknown;
  headers?: RawAxiosResponseHeaders | AxiosResponseHeaders;
  totalData?: any;
}

class API {
  private instance: AxiosInstance;
  public errorCallback?: (error: unknown) => void = undefined;
  private setisLoading: any;

  constructor (baseURL: string) {
    this.instance = axios.create({
      baseURL,
      timeout: 100000
    });
    this.errorCallback = (error: unknown) => {
      console.log(error);
    }
  }

  setErrorCallback (errorCallback: (error: unknown) => void) {
    this.errorCallback = errorCallback;
  }

  setLoading (setisLoading: (tf: boolean) => void) {
    this.setisLoading = setisLoading;
  }

  async request<T> ({ headers, method, url, params, data, config = {}, isLoading = false }: TAPIRequest): Promise<TResponse<T>> {
    try {
      if (isLoading) this.setisLoading(true);
      const response = await this.instance({ headers, method, url, data, params, responseType: config.responseType })
      if (isLoading) this.setisLoading(false);
      if (response.data.status === "error") {
        if (this.errorCallback) this.errorCallback(response);
      }
      if (response.data.status) return { success: response.data.status === "success", ...response.data, headers: response.headers };
      else return { success: true, data: response.data, headers: response.headers };
    } catch (error: any) {
      if (isLoading) this.setisLoading(false);
      if (!error.response) {
        if (this.errorCallback) this.errorCallback({});
        return { success: false, error: {} };
      }
      if (!config.isErrorCallback) {
        if (this.errorCallback) this.errorCallback(error.response);
      }
      return { success: false, error: error.response }
    }
  }
}

export default API;
