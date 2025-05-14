import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata';
import { generateSigner } from '@metaplex-foundation/umi';

const umi = createUmi('http://127.0.0.1:8899').use(mplTokenMetadata());
const signer = generateSigner(umi);

umi.use(signerIdentity(signer));
