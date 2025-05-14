import { Connection, clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter, SolletWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletProvider } from '@solana/wallet-adapter-react';

// Configuración de la red Solana
const network = WalletAdapterNetwork.Devnet; // Puedes cambiar a 'mainnet-beta' si estás listo para usar la Mainnet

// Conectar con Solana
const connection = new Connection(clusterApiUrl(network), 'confirmed');

// Configurar billeteras compatibles
const wallets = [
  new PhantomWalletAdapter(),  // Phantom Wallet
  new SolletWalletAdapter({ network }),  // Sollet Wallet (compatible con Solana Web Wallet)
];

export { connection, wallets };
