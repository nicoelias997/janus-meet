// Definimos enn un objeto los tipos de eventos que registraremos en las llamadas
export const callType = {
  CHAT_PERSONAL_CODE: "CHAT_PERSONAL_CODE",
  CHAT_STRANGER: "CHAT_STRANGER",
  VIDEO_PERSONAL_CODE: "VIDEO_PERSONAL_CODE",
  VIDEO_STRANGER: "VIDEO_STRANGER",
};

// Definimos enn un objeto los tipos de respuestas a los eventos que respondemos a la llamada
export const preOfferAnswer = {
  CALLEE_NOT_FOUND: "CALLEE_NOT_FOUND",
  CALL_ACCEPTED: "CALL_ACCEPTED",
  CALL_REJECTED: "CALL_REJECTED",
  CALL_UNAVAILABLE: "CALL_UNAVAILABLE",
};

export const webRTCSignaling = {
  OFFER: "OFFER",
  ANSWER: "ANSWER",
  ICE_CANDIDATE: "ICE_CANDIDATE",
};

export const callState = {
  CALL_AVAILABLE: "CALL_AVAILABLE",
  CALL_UNAVAILABLE: "CALL_UNAVAILABLE",
  CALL_AVAILABLE_ONLY_CHAT: "CALL_AVAILABLE_ONLY_CHAT",
};
