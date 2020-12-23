import { HttpResponse } from "./HttpResponse";
import { AppConfig } from "./app.config";
import { ShowErrorMessage, ShowException } from "../shared/helpers/message.helper";
import { Decrypt } from "../shared/helpers/crypto.helper";

export async function http<T>(request: RequestInfo): Promise<HttpResponse<T>> {
  let response: HttpResponse<T> = {} as HttpResponse<T>;
  let actualResponse: any;
  let _parseJSON = function (response: any) {
    return response.text().then(function (text) {
      return text ? JSON.parse(text) : {}
    })
  }

  response = await fetch(request)
    .then((x) => {
      actualResponse = x;
      return actualResponse;
    })
    .then(_parseJSON)
    .then((x) => {
      actualResponse.result = x.data != undefined ? x.data : x;
      actualResponse.message = x.message;
      actualResponse.errorCode = x.statusCode;
      return actualResponse;
    })
    .catch((ex) => {
      return Promise.reject(ex?.message);
    });

  if (!response.ok) {
    if (response.status == 401) {
      //ShowException(response.message ? response.message : "Session expired, please login again.");
      localStorage.clear();
      window.location.href = window.location.origin + "/login";
    } else if (response.status == 403) {
      ShowErrorMessage("Your role does not allow to perform this action");
    } else {
      ShowException(response.message ? response.message : response);
    }

    // return Promise.reject(response.result ? response.result : response);
    return Promise.reject(response);
  }

  return response;
}

export class HttpWrapper {
  get<T>(
    path: string,
    args: RequestInit = {
      method: "get",
    }
  ): Promise<HttpResponse<T>> {
    this.setHeader(args);
    return http<T>(new Request(path, args));
  }

  delete<T>(
    path: string,
    body?: any,
    args: RequestInit = {
      method: "delete",
      body: JSON.stringify(body),
    }
  ): Promise<HttpResponse<T>> {
    this.setHeader(args);
    return http<T>(new Request(path, args));
  }

  async post<T>(
    path: string,
    body: any,
    args: RequestInit = {
      method: "post",
      body: JSON.stringify(body),
    },
    contentType?: string
  ): Promise<HttpResponse<T>> {
    this.setHeader(args, contentType);
    return await http<T>(new Request(path, args));
  }

  async put<T>(
    path: string,
    body: any,
    args: RequestInit = {
      method: "put",
      body: JSON.stringify(body),
    }
  ): Promise<HttpResponse<T>> {
    this.setHeader(args);
    return await http<T>(new Request(path, args));
  }

  async getFileByPost(
    path: string,
    body: any,
    args: RequestInit = {
      method: "post",
      body: JSON.stringify(body),
    }
  ): Promise<any> {
    this.setHeader(args);
    return await fetch(new Request(path, args)).then((x) => x.arrayBuffer());
  }

  private setHeader(args: RequestInit, contentType?: string) {
    let token = Decrypt<string>(
      localStorage.getItem(AppConfig.tokenKey)
    ) as string;
    let headers = new Headers();
    headers.append("Content-Type", contentType ? contentType : "application/json");
    if (token) {
      headers.append("Authorization", `bearer ${token}`);
    }
    args.headers = headers;
  }
}
