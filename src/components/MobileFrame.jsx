import { useLocation } from 'react-router-dom';

export default function MobileFrame({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#050508] sm:bg-gradient-to-br sm:from-[#0B0B0F] sm:to-[#12121A] p-0 sm:p-4 font-sans">
      <div className="relative w-full h-[100dvh] sm:w-[375px] sm:h-[812px] bg-background sm:rounded-[40px] shadow-2xl sm:border-[8px] sm:border-[#1A1A24] sm:ring-1 sm:ring-white/10 flex flex-col overflow-hidden shrink-0">
        {/* Fake Notch */}
        <div className="hidden sm:flex absolute top-0 inset-x-0 h-6 justify-center z-50 pointer-events-none">
          <div className="w-32 h-6 bg-[#1A1A24] rounded-b-[20px]"></div>
        </div>
        
        {/* App Content Container */}
        <div className="flex-1 w-full h-full flex flex-col relative overflow-hidden bg-background">
          {children}
        </div>
      </div>
    </div>
  );
}
