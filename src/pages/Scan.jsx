import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import BottomNav from '../components/BottomNav';
import { QrCode, Zap, History } from 'lucide-react';
import Button from '../components/Button';

export default function Scan() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-background overflow-hidden relative">
      <Navbar title="Aura Discovery" />
      
      <div className="flex-1 relative flex flex-col items-center justify-center p-4">
        {/* Fake camera background (dark gray) */}
        <div className="absolute inset-0 bg-[#15151F] z-0" />
        
        <div className="relative z-10 w-full max-w-[240px] aspect-square mb-6 mt-[-15%] shrink-0">
          {/* Scanner corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-xl" />
          
          {/* Scanning animation line */}
          <motion.div 
            animate={{ y: [0, 240, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-0.5 bg-primary shadow-[0_0_12px_rgba(168,85,247,0.8)] z-20"
          />

          <div className="absolute inset-4 flex flex-col items-center justify-center bg-card/80 backdrop-blur-sm rounded-lg border border-gray-800">
            <QrCode className="w-16 h-16 text-white opacity-80 mb-2" />
            <span className="text-[9px] text-primary font-bold tracking-wider uppercase px-2 py-0.5 bg-primary/20 rounded-full border border-primary/30">
              Demo QR: Blue Lounge
            </span>
          </div>
        </div>

        <div className="relative z-10 flex gap-8 mb-8 shrink-0">
          <div className="flex flex-col items-center gap-1.5">
            <button className="w-10 h-10 rounded-full bg-card/50 border border-gray-800 flex items-center justify-center text-white backdrop-blur-md shrink-0">
              <Zap className="w-4 h-4" />
            </button>
            <span className="text-[10px] text-gray-400">Flash</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <button className="w-10 h-10 rounded-full bg-card/50 border border-gray-800 flex items-center justify-center text-white backdrop-blur-md shrink-0">
              <History className="w-4 h-4" />
            </button>
            <span className="text-[10px] text-gray-400">History</span>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-[240px] shrink-0">
          <Button fullWidth onClick={() => navigate('/venue/1')} className="text-sm py-2.5">
            Simulate Scan
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
