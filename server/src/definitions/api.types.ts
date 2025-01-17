export interface SuccessResponse<T> {
  data: T;
}

export interface ErrorResponse {
  error: boolean;
  message: string;
}

export type APIResponse<T> = SuccessResponse<T> | ErrorResponse;

export interface APIParams {
  id: string;
}
