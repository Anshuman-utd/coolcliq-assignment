import { motion } from 'framer-motion';
import { MapPin, Users } from 'lucide-react';

export default function VenueCard({ venue, onClick }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-card rounded-xl p-3 flex items-center justify-between cursor-pointer border border-gray-800/50 shadow-sm"
      onClick={() => onClick(venue)}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
          <MapPin className="w-5 h-5 text-primary" />
        </div>
        <div className="min-w-0">
          <h3 className="text-white font-medium text-sm truncate">{venue.name}</h3>
          <p className="text-xs text-gray-400 truncate">{venue.type} • {venue.distance}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 bg-primary/20 text-primary px-2 py-1 rounded-full text-[10px] font-semibold shrink-0">
        <Users className="w-3 h-3" />
        <span>{venue.activeUsers}</span>
      </div>
    </motion.div>
  );
}
