import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import mockData from '../data/mock.json';
import { MapPin, Users, ShieldAlert, MessageCircle } from 'lucide-react';

export default function Venue() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [venue, setVenue] = useState(null);

  const anonymousUsers = [
    { id: '123', name: 'User123', status: 'online' },
    { id: '456', name: 'User456', status: 'idle' },
    { id: '789', name: 'Anon_X', status: 'online' },
    { id: '999', name: 'Ghostly', status: 'online' }
  ];

  useEffect(() => {
    const found = mockData.venues.find(v => v.id === id) || mockData.venues[0];
    setVenue(found);
  }, [id]);

  if (!venue) return null;

  return (
    <div className="flex flex-col h-full bg-background relative overflow-hidden">
      <Navbar title="Aura Discovery" showBack onBack={() => navigate('/home')} />
      
      <div className="flex-1 overflow-y-auto pb-[70px] scrollbar-hide flex flex-col">
        <div className="relative h-36 bg-card shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
             <div className="w-full h-full bg-primary/20 blur-[50px]"></div>
          </div>
          
          <div className="absolute bottom-0 left-0 p-4 z-20 w-full">
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-primary/20 text-primary px-2 py-0.5 rounded-full text-[10px] font-semibold flex items-center gap-1 border border-primary/30">
                <Users className="w-2.5 h-2.5" />
                {venue.activeUsers} People
              </span>
            </div>
            <h1 className="text-xl font-bold text-white mb-0.5">{venue.name}</h1>
            <p className="text-gray-400 flex items-center gap-1 text-[11px]">
              <MapPin className="w-3 h-3" />
              Downtown Arts District
            </p>
          </div>
        </div>

        <div className="p-4 space-y-4 flex-1">
          <div className="bg-card border border-gray-800 rounded-xl p-3 flex items-start gap-2 shadow-sm">
            <div className="bg-primary/20 p-1.5 rounded-lg text-primary shrink-0">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] text-white font-medium mb-0.5">You are anonymous 👀</p>
              <p className="text-[10px] text-gray-400 leading-tight">
                Your identity is hidden. Chat with others securely. Reveal your table inside the chat.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-white font-medium mb-2 flex items-center gap-2 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
              Active Users
            </h3>
            
            <div className="space-y-2">
              {anonymousUsers.map((user, i) => (
                <motion.div 
                  key={user.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => navigate(`/chat/${user.id}`)}
                  className="bg-card border border-gray-800 hover:border-gray-700 rounded-lg p-2.5 flex items-center justify-between cursor-pointer active:scale-[0.98] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center relative shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      {user.status === 'online' && (
                        <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border-2 border-card"></div>
                      )}
                    </div>
                    <span className="text-xs text-gray-200 font-medium">{user.name}</span>
                  </div>
                  <button className="text-primary bg-primary/10 p-1.5 rounded-full shrink-0">
                    <MessageCircle className="w-3 h-3" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-3 bg-background/95 backdrop-blur-md border-t border-card z-30 pb-safe shrink-0">
        <Button fullWidth variant="outline" onClick={() => navigate('/home')} className="text-xs py-2.5">
          Leave Venue
        </Button>
      </div>
    </div>
  );
}
