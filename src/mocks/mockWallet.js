// src/mocks/mockWallet.js
export const mockWallet = {
  connected: true,
  wallet: {
    publicKey: {
      toString: () => 'FakePublicKey12345',  // Clave pública de la billetera mockeada
    },
  },
  connect: () => {
    console.log("Conectado (mock)");
  },
  disconnect: () => {
    console.log("Desconectado (mock)");
  },
};
