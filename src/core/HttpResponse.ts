export interface HttpResponse<T> extends Response {
  result?: T;
  errorCode?: number,
  message?: { message?: string, messageType?: number }
}
