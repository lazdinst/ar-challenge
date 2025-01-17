import { AsyncThunkAction } from "@reduxjs/toolkit";

export interface ServerStatusState {
  alive: boolean;
  error: string | null;
  loading: boolean;
  status: string | null;
}

export interface ServerStatusResponse {
  status: string;
}

export type FetchServerStatusAction = AsyncThunkAction<
  ServerStatusState,
  void,
  object
>;
