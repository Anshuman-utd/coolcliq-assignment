import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, MapPin, QrCode, AlertTriangle, 
  BarChart3, Settings, LogOut, CheckCircle, Ban, Download, ChevronLeft
} from 'lucide-react';
import Button from '../components/Button';

function StatCard({ title, value, subtext }) {
  return (
    <div className="bg-card p-4 rounded-xl border border-gray-800 shadow-sm shrink-0">
      <h3 className="text-gray-400 text-[10px] font-medium mb-1">{title}</h3>
      <div className="text-xl font-bold text-white mb-0.5">{value}</div>
      {subtext && <p className="text-[9px] text-gray-500">{subtext}</p>}
    </div>
  );
}

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('auto') === 'true') {
      setUsername('admin');
      setPassword('admin');
      setIsAuthenticated(true);
      navigate('/admin', { replace: true });
    }
  }, [location, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-full bg-background p-4 relative">
        <div className="absolute top-4 left-4">
          <button onClick={() => navigate('/login')} className="p-2 bg-card rounded-full text-gray-400">
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
        <div className="w-full max-w-[280px] bg-card p-6 rounded-2xl border border-gray-800 shadow-lg">
          <div className="text-center mb-6">
            <h1 className="text-xl font-bold text-white">Aura Admin</h1>
            <p className="text-gray-400 text-xs mt-1">Sign in to continue</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-3">
            <div>
              <label className="text-[10px] font-semibold text-gray-400 uppercase">Username</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full mt-1 bg-background border border-gray-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none"
              />
            </div>
            <div>
              <label className="text-[10px] font-semibold text-gray-400 uppercase">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 bg-background border border-gray-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none"
              />
            </div>
            <button type="submit" className="w-full mt-4 bg-primary text-white rounded-lg py-2.5 text-sm font-medium transition-colors">
              Login
            </button>
            <button 
              type="button" 
              onClick={() => {
                setUsername('admin');
                setPassword('admin');
                setIsAuthenticated(true);
              }}
              className="w-full mt-2 bg-card border border-gray-700 hover:bg-gray-800 text-gray-300 rounded-lg py-2.5 text-sm font-medium transition-colors"
            >
              Demo Auto-Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'dashboard', icon: BarChart3, label: 'Dash' },
    { id: 'venues', icon: MapPin, label: 'Venues' },
    { id: 'qr', icon: QrCode, label: 'QR' },
    { id: 'moderation', icon: AlertTriangle, label: 'Mod' },
    { id: 'users', icon: Users, label: 'Users' },
  ];

  return (
    <div className="flex flex-col h-full bg-background overflow-hidden relative">
      <div className="flex items-center justify-between p-4 border-b border-gray-800 shrink-0">
        <div>
          <h1 className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Aura Admin
          </h1>
        </div>
        <button 
          onClick={() => setIsAuthenticated(false)}
          className="text-xs text-red-400 flex items-center gap-1"
        >
          <LogOut className="w-3 h-3" />
          Exit
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.15 }}
            className="h-full"
          >
            {activeTab === 'dashboard' && (
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-white mb-2">Platform Overview</h2>
                <div className="grid grid-cols-2 gap-3">
                  <StatCard title="Daily Users" value="1,248" subtext="+12% from yest" />
                  <StatCard title="Active Venues" value="34" subtext="4 added this week" />
                  <StatCard title="Chat Rate" value="68%" subtext="Avg per session" />
                  <StatCard title="Reveal Rate" value="42%" subtext="Users revealing info" />
                </div>
                
                <div className="mt-4 bg-card border border-gray-800 rounded-xl p-4">
                  <h3 className="text-xs font-semibold text-white mb-3">Users per Venue</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Obsidian Room', count: 120, max: 200 },
                      { name: 'Velvet Underground', count: 45, max: 100 },
                      { name: 'Blue Lounge', count: 86, max: 150 },
                    ].map(v => (
                      <div key={v.name}>
                        <div className="flex justify-between text-[10px] mb-1">
                          <span className="text-gray-300">{v.name}</span>
                          <span className="text-white font-medium">{v.count} / {v.max}</span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary" 
                            style={{ width: `${(v.count / v.max) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'venues' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-sm font-bold text-white">Venues</h2>
                  <button className="bg-primary text-white px-2 py-1 rounded text-[10px] font-medium">
                    + Add
                  </button>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Blue Lounge', type: 'Lounge', status: 'Active' },
                    { name: 'Syntax Error', type: 'Barcade', status: 'Active' },
                    { name: 'The Void', type: 'Club', status: 'Inactive' },
                  ].map(v => (
                    <div key={v.name} className="bg-card p-3 rounded-xl border border-gray-800 flex justify-between items-center">
                      <div>
                        <h4 className="text-xs text-white font-medium">{v.name}</h4>
                        <p className="text-[10px] text-gray-500">{v.type}</p>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-[9px] ${v.status === 'Active' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                        {v.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'qr' && (
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-white mb-2">QR Code Generator</h2>
                <div className="bg-card border border-gray-800 rounded-xl p-4">
                  <label className="text-[10px] font-medium text-gray-400 block mb-1.5">Select Venue</label>
                  <select className="w-full bg-background border border-gray-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none mb-4">
                    <option>Blue Lounge</option>
                    <option>Velvet Underground</option>
                  </select>
                  
                  <div className="flex justify-center py-4">
                    <div className="w-32 h-32 bg-white rounded-xl p-2 flex items-center justify-center border-2 border-primary">
                      <QrCode className="w-24 h-24 text-black" />
                    </div>
                  </div>

                  <Button fullWidth className="text-xs py-2 gap-1.5 mt-2">
                    <Download className="w-3.5 h-3.5" />
                    Download PDF
                  </Button>
                </div>
              </div>
            )}

            {activeTab === 'moderation' && (
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-white mb-2">Moderation Queue</h2>
                <div className="space-y-3">
                  {[
                    { target: 'User456', reporter: 'Ghostly', reason: 'Inappropriate language', time: '10m' },
                    { target: 'Anon_X', reporter: 'Shadow99', reason: 'Harassment', time: '1h' }
                  ].map((report, i) => (
                    <div key={i} className="bg-card border border-gray-800 p-3 rounded-xl">
                      <div className="flex items-center justify-between mb-1">
                        <span className="bg-red-500/20 text-red-500 text-[9px] px-1.5 py-0.5 rounded font-bold uppercase">Report</span>
                        <span className="text-gray-500 text-[9px]">{report.time}</span>
                      </div>
                      <p className="text-white text-[11px] leading-tight mb-1">
                        <span className="font-bold text-primary">{report.reporter}</span> reported <span className="font-bold">{report.target}</span>
                      </p>
                      <p className="text-gray-400 text-[10px] mb-3">Reason: {report.reason}</p>
                      
                      <div className="flex gap-2">
                        <button className="flex-1 flex items-center justify-center gap-1 bg-gray-800 text-white py-1.5 rounded text-[10px]">
                          <CheckCircle className="w-3 h-3 text-green-400" /> Ignore
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-1 bg-red-500/10 text-red-500 border border-red-500/20 py-1.5 rounded text-[10px]">
                          <Ban className="w-3 h-3" /> Ban
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-white mb-2">User Management</h2>
                <div className="space-y-3">
                  {[
                    { handle: '@shadow_walker', status: 'Active' },
                    { handle: '@neon_rider', status: 'Active' },
                    { handle: '@bad_actor', status: 'Banned' },
                  ].map(u => (
                    <div key={u.handle} className="bg-card p-3 rounded-xl border border-gray-800 flex justify-between items-center">
                      <h4 className="text-xs text-white font-medium">{u.handle}</h4>
                      <div className="flex items-center gap-2">
                        <span className={`px-1.5 py-0.5 rounded-full text-[9px] ${u.status === 'Active' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                          {u.status}
                        </span>
                        {u.status === 'Active' ? (
                          <button className="text-red-400 p-1 bg-gray-800 rounded"><Ban className="w-3 h-3"/></button>
                        ) : (
                          <button className="text-green-400 p-1 bg-gray-800 rounded"><CheckCircle className="w-3 h-3"/></button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-800">
                   <Button fullWidth variant="outline" className="text-xs py-2 gap-1.5">
                      <Download className="w-3 h-3" /> Export Analytics CSV
                   </Button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Admin Bottom Nav */}
      <div className="absolute bottom-0 left-0 right-0 w-full bg-[#12121A] border-t border-gray-800 z-30 shrink-0 pb-safe">
        <div className="flex justify-around items-center h-14 px-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center w-12 h-full gap-0.5 transition-colors ${
                  isActive ? "text-primary" : "text-gray-500 hover:text-gray-400"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]' : ''}`} />
                <span className="text-[8px] font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
