// wallet-integration.tsx (drop into app/dashboard or components)
'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'

// TonConnect UI can be heavy; load dynamically
const TonConnectUI = dynamic(() => import('@tonconnect/ui-react').then(m=>m.TonConnectButton), { ssr:false })

export default function WalletConnectPanel(){
  const [address, setAddress] = useState<string | null>(null)

  return (
    <div className="p-4 bg-[#080816] rounded-lg">
      <h3 className="font-semibold">Connect Wallet</h3>
      <p className="text-sm text-gray-400">Connect Ton wallet to interact with Aura-IDToken</p>
      <div className="mt-4">
        {/* Place TonConnect button here */}
        {/* Example: <TonConnectButton/> -- ensure @tonconnect/ui-react is installed and configured */}
        <button className="px-4 py-2 bg-gradient-to-r from-[#7D5FFF] to-[#00F5D4] rounded" onClick={()=>alert('Replace with TonConnect flow')}>Connect Wallet (placeholder)</button>
      </div>
      <div className="mt-3 text-sm">{address ? `Connected: ${address}` : 'Not connected'}</div>
    </div>
  )
}
