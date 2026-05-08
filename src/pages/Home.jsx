import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import { renderToString } from 'react-dom/server';
import { MapPin, ScanLine, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import VenueCard from '../components/VenueCard';
import BottomNav from '../components/BottomNav';
import mockData from '../data/mock.json';
import Button from '../components/Button';

const customMarkerIcon = L.divIcon({
  html: renderToString(<div className="text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"><MapPin size={24} fill="#12121A" /></div>),
  className: 'custom-leaflet-icon',
  iconSize: [24, 24],
  iconAnchor: [12, 24],
});

export default function Home() {
  const navigate = useNavigate();
  const [venues, setVenues] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState(null);

  useEffect(() => {
    setVenues(mockData.venues);
  }, []);

  return (
    <div className="flex flex-col h-full bg-background relative overflow-hidden">
      <Navbar title="Aura Discovery" />
      
      <div className="relative h-[35%] bg-[#12121A] shrink-0 border-b border-gray-800">
        <MapContainer 
          center={[40.7128, -74.0060]}
          zoom={14} 
          scrollWheelZoom={true} 
          className="w-full h-full z-0"
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://carto.com/">Carto</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          {venues.map((venue, index) => {
            const lat = 40.7128 + (index * 0.005 - 0.002);
            const lng = -74.0060 + (index * 0.005 - 0.002);
            return (
              <Marker 
                key={venue.id} 
                position={[lat, lng]} 
                icon={customMarkerIcon}
                eventHandlers={{ click: () => setSelectedVenue(venue) }}
              />
            );
          })}
        </MapContainer>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/scan')}
          className="absolute bottom-3 right-3 z-10 bg-primary text-white p-3 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.6)] flex items-center justify-center"
        >
          <ScanLine className="w-5 h-5" />
        </motion.button>
      </div>

      <div className="flex-1 p-4 bg-background z-10 relative overflow-y-auto pb-[70px]">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-white">Nearby Venues</h2>
          <span className="text-[10px] text-gray-500">{venues.length} found</span>
        </div>
        
        <div className="space-y-2.5">
          {venues.map((venue, i) => (
            <motion.div
              key={venue.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <VenueCard venue={venue} onClick={() => setSelectedVenue(venue)} />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedVenue && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute bottom-[56px] left-0 right-0 bg-card border-t border-gray-800 p-5 z-40 rounded-t-2xl shadow-[0_-10px_30px_rgba(0,0,0,0.8)]"
          >
            <button 
              onClick={() => setSelectedVenue(null)}
              className="absolute top-3 right-3 text-gray-400 p-1 bg-gray-800/50 rounded-full hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
            <h3 className="text-lg font-bold text-white mb-0.5 pr-6 truncate">{selectedVenue.name}</h3>
            <p className="text-xs text-gray-400 mb-3">{selectedVenue.distance} • {selectedVenue.activeUsers} Active</p>
            
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 mb-4">
              <p className="text-primary text-xs text-center font-medium">Scan QR at venue to join</p>
            </div>
            
            <Button fullWidth onClick={() => navigate('/scan')} className="gap-2 text-xs py-2.5">
              <ScanLine className="w-4 h-4" />
              Scan QR to Join
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <BottomNav />
    </div>
  );
}
