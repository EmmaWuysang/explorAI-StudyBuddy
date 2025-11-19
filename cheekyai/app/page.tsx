'use client'
import LiquidChrome from '../components/LiquidChrome';

export default function Home() {
  return (
    <div className="font-mono grid grid-rows-[20px_1fr_20px] justify-items-center items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <LiquidChrome
          style={{ width: '100%', height: '100%', position: 'absolute', padding: 0, margin: 0, top: 0, left: 0, zIndex:-1}}
          baseColor={[0.4, 0, 0.1]}
          speed={0.1}
          amplitude={0.3}
          interactive={false}
        />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <div className="text-4xl font-bold text-slate-100">
          cheeky.ai
        </div>

      </main>
    </div>
  );
}
