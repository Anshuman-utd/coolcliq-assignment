import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

export default function Profile() {
  const [handle, setHandle] = useState('');
  const [ageRange, setAgeRange] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    if (handle) {
      localStorage.setItem('aura_user', JSON.stringify({ handle, ageRange, gender }));
      navigate('/home');
    }
  };

  return (
    <div className="flex flex-col h-full bg-background overflow-hidden">
      <Navbar title="Aura" showBack onBack={() => navigate(-1)} />
      
      <div className="flex-1 flex flex-col p-5 overflow-y-auto">
        <div className="text-center mb-6 mt-2">
          <h2 className="text-xl font-bold text-white mb-1">Choose your mask 🎭</h2>
          <p className="text-xs text-gray-400">Set up your profile to start discovering.</p>
        </div>

        <div className="mx-auto w-20 h-20 bg-card rounded-full border border-dashed border-gray-700 flex items-center justify-center mb-6 relative shrink-0">
          <span className="text-gray-500 text-xs font-medium">Avatar</span>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center border border-background cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-4 flex-1 flex flex-col">
          <div className="space-y-1.5">
            <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Anonymous Handle</label>
            <input
              type="text"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              placeholder="@ shadow_walker"
              className="w-full bg-card border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Age Range</label>
            <select
              value={ageRange}
              onChange={(e) => setAgeRange(e.target.value)}
              className="w-full bg-card border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 appearance-none"
            >
              <option value="" disabled className="text-gray-500">Select range</option>
              <option value="18-24">18 - 24</option>
              <option value="25-34">25 - 34</option>
              <option value="35-44">35 - 44</option>
              <option value="45+">45+</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Gender Identity</label>
            <div className="flex gap-2">
              {['Female', 'Male', 'Non-binary'].map(g => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGender(g)}
                  className={`flex-1 py-2 px-1 rounded-xl text-[11px] font-medium border transition-all ${
                    gender === g 
                      ? 'bg-primary/20 border-primary text-primary' 
                      : 'bg-card border-gray-800 text-gray-400 hover:bg-gray-800/50'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-4 pb-4">
            <Button fullWidth type="submit">Continue →</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
