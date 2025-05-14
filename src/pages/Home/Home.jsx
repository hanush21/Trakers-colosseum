import React from 'react'
import Hero from '../../components/Home/Hero'
import { useWallet, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Home = () => {
  return (
    <>
      <Hero />
      <WalletMultiButton />
    </>
  )
}

export default Home
