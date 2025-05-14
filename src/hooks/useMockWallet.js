// src/hooks/useMockWallet.js
import { mockWallet } from '../mocks/mockWallet';

// Creamos un hook que devuelve la billetera mockeada
export const useMockWallet = () => {
  return mockWallet;
};
