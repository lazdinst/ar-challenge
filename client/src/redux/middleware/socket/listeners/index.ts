import { RootState, AppDispatch } from "../../../store";

import {
  setWebSocketConnected,
  setWebSocketDisconnected,
} from "../../../slices/websocket";

import { setServerAlive } from "../../../slices/api";

export const initializeSocketListeners = (
  socket: WebSocket,
  getState: () => RootState,
  dispatch: AppDispatch
) => {
  setupSocketStateListeners(socket, getState, dispatch);
};

export const setupSocketStateListeners = (
  socket: WebSocket,
  _getState: () => RootState, // Temp unused
  dispatch: AppDispatch
) => {
  socket.onopen = () => {
    console.log("Websocket Opened ...");
    dispatch(setWebSocketConnected());
  };

  socket.onclose = () => {
    console.log("Websocket Closed...");
    dispatch(setServerAlive(false));
    dispatch(setWebSocketDisconnected());
  };

  socket.onerror = (error) => {
    console.error("WebSocket error:", error);
  };

  socket.onmessage = (event) => {
    console.log(event.data);
  };
};
