// src/services/TokenServices/walletConfig.js

import { Connection, clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';

// Leer las variables de entorno para configurar la red y la URL RPC
const network = import.meta.env.REACT_APP_SOLANA_NETWORK || WalletAdapterNetwork.Devnet;
const rpcUrl = import.meta.env.REACT_APP_SOLANA_RPC_URL || clusterApiUrl('devnet');  // Asegúrate de usar `https://`

// Crear la conexión a la red Solana
const connection = new Connection(rpcUrl, 'confirmed');

// Configuración de las billeteras compatibles
const wallets = [
  new PhantomWalletAdapter(),  // Phantom Wallet
];

export { connection, wallets };
