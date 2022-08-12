export interface IFetchOptions {
  headers: IHeaderObject;
  body?: string;
}

export interface IHeaderObject {
  [key: string]: string;
}

export interface ReqUser extends Request {
  user?: { username?: string; email?: string; password?: string };
}
