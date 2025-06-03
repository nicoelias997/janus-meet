import * as constants from "./constants.js";

let state = {
  socketId: null,                   // ID del cliente asignado por Socket.io
  localStream: null,               // Flujo de video/audio del usuario local (cam/mic)
  remoteStream: null,             // Flujo de video/audio del usuario remoto
  screenSharingActive: false,     // Si el usuario está compartiendo pantalla
  screenSharingStream: null,      // El stream de la pantalla que está compartiendo
  allowConnectionsFromStrangers: false, // Permitir o no conexiones de usuarios desconocidos
  callState: constants.callState.CALL_AVAILABLE_ONLY_CHAT,

};

//Definimos un estado global "state", donde agarraremos siempre el estado anterior que tenia y le definimos. 
//Cada funcion actualiza un estado de la propiedad objeto "state". Lo hace de una forma inmutable usando el operador ...
// Copia todo el objeto y modifica solo la parte deseada.

export const setSocketId = (socketId) => {
  state = {
    ...state,
    socketId,
  };
};

export const setLocalStream = (stream) => {
  state = {
    ...state,
    localStream: stream,
  };
};

export const setAllowConnectionsFromStrangers = (allowConnection) => {
  state = {
    ...state,
    allowConnectionsFromStrangers: allowConnection,
  };
};

export const setScreenSharingActive = (screenSharingActive) => {
  state = {
    ...state,
    screenSharingActive,
  };
};

export const setScreenSharingStream = (stream) => {
  state = {
    ...state,
    screenSharingStream: stream,
  };
};

export const setRemoteStream = (stream) => {
  state = {
    ...state,
    remoteStream: stream,
  };
};

export const setCallState = (callState) => {
  state = {
    ...state,
    callState,
  };
};

export const getState = () => {
  return state;
};
