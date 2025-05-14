import React from 'react';
import Hero from '../../components/Home/Hero';
import { useMockWallet } from '../../hooks/useMockWallet';  // Usamos el hook mockeado
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { connection, wallets } from '../../services/TokenServices/walletConfig';  // Correcta configuración de walletConfig

const Home = () => {
    // Usar el hook mockeado para simular la conexión de la billetera
    const { connected, wallet, disconnect } = useMockWallet();

    return (
        <>
        <Hero />
        </>
    );
};

export default Home;
