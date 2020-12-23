

export interface IAppConfig {
  apiEndpoint: string;
  grantType: string;
  clientId: string;
  clientSecret: string;
  redirect_Uri: string;
  responseType: string;
  scope: string;
  accessType: string;
  tokenKey: string;
  userInfoKey: string;
  cryptoKey: string;
  refreshTokenKey: string,
  refreshTokenExpiry: number,
  refreshTokenGrantType: string,
  identityUrl:string;
}

const apiRootUrl = "https://ccf-api.taazaahost.com/api/1.0/"
// const apiRootUrl = 'http://localhost:51943/api/1.0/';
const client_Id = "web.ui";
const Client_secret = "2haETmDbbuGVtQ5LwczvhFqeTQwP2z";
const GRANT_TYPE = "authorization_code";
const redirect_uri = window.location.origin + "/login-callback";
const response_type = "code";
const scope = "openid email profile CcfApi";
const access_type = "offline";
const refresh_token_expiry_in_day = 0.5;
const refresh_token_grant_type = 'refresh_token';
const token_key = 'tk';
const user_info_key = 'ui';
const crypto_key = 'w9y$B&E)H@McQfTjWnZr4u7x!A%C*F-J';
const refresh_token_key = "rtk";
// const identityUrl="https://localhost:44337/"
const identityUrl = "https://ccf-auth.taazaahost.com/"

export const AppConfig: IAppConfig = {
  apiEndpoint: apiRootUrl,
  clientId: client_Id,
  clientSecret: Client_secret,
  grantType: GRANT_TYPE,
  redirect_Uri: redirect_uri,
  responseType: response_type,
  scope: scope,
  accessType: access_type,
  userInfoKey: user_info_key,
  tokenKey: token_key,
  cryptoKey: crypto_key,
  refreshTokenKey: refresh_token_key,
  refreshTokenExpiry: refresh_token_expiry_in_day,
  refreshTokenGrantType: refresh_token_grant_type,
  identityUrl:identityUrl
};