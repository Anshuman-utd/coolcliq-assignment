import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Shield } from 'lucide-react';

export default function Login() {
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState(1);
  const [code, setCode] = useState(['', '', '', '']);
  const navigate = useNavigate();

  const handleSendCode = (e) => {
    e.preventDefault();
    if (phone.length > 5) setStep(2);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="flex flex-col h-full p-6 relative bg-background">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 bg-primary/20 rounded-full blur-[60px] pointer-events-none" />

      <div className="flex-1 flex flex-col justify-center items-center w-full z-10 max-w-[320px] mx-auto">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-14 h-14 bg-card rounded-2xl flex items-center justify-center mb-6 border border-gray-800 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
        >
          <Shield className="w-6 h-6 text-primary" />
        </motion.div>

        <h1 className="text-2xl font-bold text-white mb-1 text-center">Enter the Shadows</h1>
        <p className="text-sm text-gray-400 text-center mb-8">Stay anonymous, connect locally.</p>

        {step === 1 ? (
          <form onSubmit={handleSendCode} className="w-full space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Phone Number</label>
              <div className="flex gap-2">
                <div className="bg-card border border-gray-800 rounded-xl px-3 flex items-center justify-center text-gray-400 font-medium text-sm">
                  +1
                </div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 000-0000"
                  className="flex-1 bg-card border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  required
                />
              </div>
            </div>
            <div className="pt-2">
              <Button fullWidth type="submit">Send Code →</Button>
            </div>
          </form>
        ) : (
          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleVerify} 
            className="w-full space-y-5"
          >
            <div className="space-y-2 text-center">
              <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Verification Code</label>
              <div className="flex gap-2 justify-center mt-2">
                {[0, 1, 2, 3].map((i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength={1}
                    className="w-12 h-14 bg-card border border-gray-800 rounded-xl text-center text-xl font-bold text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    value={code[i]}
                    onChange={(e) => {
                      const newCode = [...code];
                      newCode[i] = e.target.value;
                      setCode(newCode);
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="pt-2">
              <Button fullWidth type="submit">Verify & Enter</Button>
            </div>
            <p className="text-[10px] text-gray-500 text-center mt-2 cursor-pointer hover:text-gray-400">Didn't receive it? Resend</p>
          </motion.form>
        )}
      </div>

      <div className="flex justify-center mt-auto pb-4">
        <button 
          onClick={() => navigate('/admin?auto=true')}
          className="text-[10px] text-primary font-medium opacity-80 hover:opacity-100 flex items-center gap-1 bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Access Admin Dashboard
        </button>
      </div>
    </div>
  );
}
