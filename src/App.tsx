import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center justify-center text-white">
      <div className="text-center space-y-8">
        <div className="flex items-center justify-center gap-4">
          <Clock size={48} className="text-white" />
          <h1 className="text-5xl font-bold tracking-tight">TIME PLEASE</h1>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 shadow-xl">
          <time className="text-7xl font-mono tracking-wider">
            {time.toLocaleTimeString()}
          </time>
        </div>
        
        <div className="text-xl font-light">
          {time.toLocaleDateString(undefined, { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>
      
      <footer className="fixed bottom-4 text-white/60 text-sm">
        Made with ❤️ using React
      </footer>
    </div>
  );
}

export default App;