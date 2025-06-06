import * as store from "./store.js";
import * as ui from "./ui.js";
import * as webRTCHandler from "./webRTCHandler.js";
import * as constants from "./constants.js";
import * as strangerUtils from "./strangerUtils.js";

let socketIO = null;


export const registerSocketEvents = (socket) => {
  socketIO = socket;
  // En la conexion, establecemos al "state", le asignamos el socketId
  socket.on("connect", () => {
    // Guarda el socketID
    store.setSocketId(socket.id);
    // Muestra el socketId
    ui.updatePersonalCode(socket.id);
  });

  // Escucha cuando otro usuario quiere iniciar una llamada:
  socket.on("pre-offer", (data) => {
    webRTCHandler.handlePreOffer(data);
  });

  // Escucha la respuesta del receptor de la llamada:
  socket.on("pre-offer-answer", (data) => {
    webRTCHandler.handlePreOfferAnswer(data);
  });

  socket.on("user-hanged-up", () => {
    webRTCHandler.handleConnectedUserHangedUp();
  });
  // ??
  socket.on("webRTC-signaling", (data) => {
    switch (data.type) {
      case constants.webRTCSignaling.OFFER:
        webRTCHandler.handleWebRTCOffer(data);
        break;
      case constants.webRTCSignaling.ANSWER:
        webRTCHandler.handleWebRTCAnswer(data);
        break;
      case constants.webRTCSignaling.ICE_CANDIDATE:
        webRTCHandler.handleWebRTCCandidate(data);
        break;
      default:
        return;
    }
  });

  socket.on("stranger-socket-id", (data) => {
    strangerUtils.connectWithStranger(data);
  });
};
   

// Envia un evento "pre-offer" al servidor, para iniciar una videollamada:
export const sendPreOffer = (data) => {
  socketIO.emit("pre-offer", data);
};

// Envía una respuesta al intento de conexión:
export const sendPreOfferAnswer = (data) => {
  socketIO.emit("pre-offer-answer", data);
};

// ??
export const sendDataUsingWebRTCSignaling = (data) => {
  socketIO.emit("webRTC-signaling", data);
};

export const sendUserHangedUp = (data) => {
  socketIO.emit("user-hanged-up", data);
};

export const changeStrangerConnectionStatus = (data) => {
  socketIO.emit("stranger-connection-status", data);
};

export const getStrangerSocketId = () => {
  socketIO.emit("get-stranger-socket-id");
};
