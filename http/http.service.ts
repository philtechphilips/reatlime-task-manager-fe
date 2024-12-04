import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
  CreateAxiosDefaults,
} from "axios";

type HttpServiceConstructorParams = CreateAxiosDefaults<any>;

type HttpServiceParams<DTO, DQO> = {
  path: string;
  method: "post" | "get" | "delete" | "put" | "patch";
  body?: DTO;
  query?: DQO;
  headers?: Record<string, string>;
  options?: {
    handleError?: boolean;
    throwError?: boolean;
  };
};

export type HttpServiceResolverError = {
  message: string;
  statusCode: number;
};

export type HttpServiceResolverData<T = null> = {
  data: T;
  message: string;
};

export type HttpServiceResolverDTO<T> = {
  data: HttpServiceResolverData<T> | null;
  error: HttpServiceResolverError | null;
};

export default class HttpService {
  axiosInstance: AxiosInstance;

  constructor(private params: HttpServiceConstructorParams) {
    this.axiosInstance = axios.create(this.params);
  }

  async resolver<T>(
    fn: Promise<AxiosResponse>,
  ): Promise<HttpServiceResolverDTO<T>> {
    let data: HttpServiceResolverData<T> | null = null;
    let error: HttpServiceResolverError | null = null;
    try {
      const { data: apiResponse } = await fn;
      data = apiResponse;
    } catch (_error: any) {
      error = _error.response?.data || {
        message: _error.message,
        statusCode: 400,
      };
    }
    return { data, error };
  }

  async SendRequest<DAO, DTO = Record<any, any>, DQO = Record<any, any>>(
    params: HttpServiceParams<DTO, DQO>,
  ): Promise<HttpServiceResolverDTO<DAO>> {
    const config: AxiosRequestConfig = {
      params: params.query || {},
      headers: params.headers || {},
    };

    const response = await this.resolver<DAO>(
      this.axiosInstance.request({
        url: params.path,
        method: params.method,
        data: params.body,
        ...config,
      }),
    );

    if (response.error && params.options?.throwError) {
      throw response.error;
    }

    return response;
  }
}
