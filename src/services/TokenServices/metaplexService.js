// src/services/metaplexService.js
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata';
import { generateSigner, signerIdentity } from '@metaplex-foundation/umi';
import { Connection } from '@solana/web3.js';

// Conexión con la blockchain
const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

// Función para crear un NFT
export const createNFT = async (wallet, metadataUri) => {
    if (!wallet.publicKey) {
        console.error('La billetera no está conectada');
        return;
    }

    const umi = createUmi(connection).use(signerIdentity(wallet.publicKey));

    const mint = generateSigner(connection);

    try {
        // Crear el NFT
        await createNft(umi, {
            mint,
            name: 'Mi NFT',
            uri: metadataUri,
            sellerFeeBasisPoints: 500,  // 5% de comisión
        }).sendAndConfirm(umi);

        console.log('NFT creado exitosamente');
    } catch (error) {
        console.error('Error al crear el NFT:', error);
    }
};
