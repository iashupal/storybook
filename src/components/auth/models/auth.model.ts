export interface AuthModel {
  grant_type: string;
  code: string | null;
  client_id: string;
  client_secret: string;
  redirect_uri: string;
  refresh_token?: string | null;
}
