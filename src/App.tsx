import { useEffect, useState } from 'react';
import { Trophy, Apple, Users, Calendar, MapPin, MessageCircle, Target } from 'lucide-react';
import JunghyunImage from './images/junghyimage.png';
import VineetImage from './images/VineetImage.jpg';
import KishanImage from './images/KishanImage.jpeg';
import PratikImage from './images/PratikImage.JPG';
import SakshiImage from './images/SakshiImage.PNG';
import PragyeshImage from './images/PragyeshImage.png';
import VikashImage from './images/VikashImage.png';

function App() {
  const [isSending, setIsSending] = useState(false);
  const envVars = import.meta.env as unknown as Record<string, string | undefined>;
  const API_BASE = typeof window !== 'undefined' && window.location.hostname === 'localhost'
    ? envVars['VITE_PROD_URL'] || 'https://town-cup-website.vercel.app'
    : '';
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const canSubmit = form.name.trim().length > 0 && isValidEmail && form.message.trim().length > 0;
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <div className="min-h-screen bg-white page-gradient">
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4 bg-white/80 backdrop-blur">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/favicon.svg" alt="TownCup" className="w-8 h-8 rounded select-none" />
            <span className="text-xl font-bold text-gray-900">TownCup</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-orange-500 transition-colors">Home</a>
            <a href="#features" className="text-gray-600 hover:text-orange-500 transition-colors">Features</a>
            <a href="#about" className="text-gray-600 hover:text-orange-500 transition-colors">About Us</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative px-6 py-24 bg-transparent overflow-hidden">
        <div className="absolute -top-32 right-0 gradient-blob" />
        <div className="absolute -bottom-40 -left-10 gradient-blob" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(59,130,246,.45), rgba(59,130,246,0) 60%)' }} />
        <div className="max-w-7xl mx-auto reveal">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  <Trophy className="w-4 h-4 mr-2" />
                  Sports Platform
                </div>
                <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight">
                 Level up
                  <span className="block">Your Sports Journey</span>
                  <span className="block">
                    with <span className="text-gradient-orange shine inline-block">TownCup</span>
                  </span>
                </h1>
                <div className="h-[2px] w-48 bg-gradient-to-r from-orange-500/80 via-orange-400 to-transparent rounded-full" />
                <p className="text-xl text-gray-600 leading-relaxed">
                  Connect with players, teams, clubs, and leagues. Easily organize matches, run tournaments, and manage all your events in one place. TownCup makes playing easier.
                </p>
                <p className="text-lg text-gray-500">
                  The TownCup app will be available for iOS and Android soon.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => alert('Coming soon')}
                  className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors w-56"
                  aria-label="App Store badge"
                >
                  <Apple className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wide text-gray-300">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </button>
                <button
                  onClick={() => alert('Coming soon')}
                  className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors w-56"
                  aria-label="Google Play badge"
                >
                  <svg className="w-6 h-6" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M96 64l256 192L96 448V64z" fill="#34A853"/>
                    <path d="M352 256L96 64l224 224-224 224 256-192z" fill="#FBBC05"/>
                    <path d="M320 288l64-48-64-48L192 64l160 224z" fill="#EA4335"/>
                    <path d="M96 448l224-224 64 48L96 448z" fill="#4285F4"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wide text-gray-300">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="relative reveal">
              <img 
                src="/HeroSection.png" 
                alt="TownCup Hero" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* Features Section - First Image Centered */}
      

      {/* Features Section - First Image Centered */}
      <section id="showcase" className="relative px-6 py-20 bg-transparent overflow-hidden">
        <div className="absolute -top-24 -left-10 gradient-blob" />
        <div className="absolute -bottom-28 right-0 gradient-blob" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(59,130,246,.35), rgba(59,130,246,0) 60%)' }} />
        <svg className="absolute -z-10 right-6 top-6 opacity-10" width="180" height="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4" />
          <path d="M22 35c12 8 44 8 56 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
        <div className="max-w-4xl mx-auto text-center reveal">
          <img 
            src="/MiddleSection.png" 
            alt="TownCup Features" 
            className="w-full h-auto rounded-2xl mx-auto"
          />
        </div>
      </section>

      {/* Feature Cards Section with title */}
      <section id="features" className="relative px-6 py-20 bg-transparent overflow-hidden">
        <div className="absolute -top-24 left-0 gradient-blob" />
        <div className="absolute -bottom-24 right-4 gradient-blob" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(59,130,246,.30), rgba(59,130,246,0) 60%)' }} />
        <svg className="absolute -z-10 left-6 top-10 opacity-10" width="140" height="140" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-7z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <div className="max-w-7xl mx-auto reveal">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900">
              Everything You Need to
              <span className="block text-gradient-orange">Elevate Your Sports</span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-3xl mx-auto">TownCup gives you all the tools to create, manage, and participate in your local sports activities.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Create & Join Teams */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 hover:ring-1 hover:ring-orange-200 cursor-pointer" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Create & Join Teams</h3>
              <p className="text-gray-600 leading-relaxed">
                Build your dream team or join existing ones. Connect with players who share your passion and skill level.
              </p>
            </div>

            {/* Organize Leagues */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 hover:ring-1 hover:ring-orange-200 cursor-pointer" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Organize Leagues</h3>
              <p className="text-gray-600 leading-relaxed">
                Set up competitive leagues with custom rules, schedules, and tournaments for your community.
              </p>
            </div>

            {/* Group Management */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 hover:ring-1 hover:ring-orange-200 cursor-pointer" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Group Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Create rosters, track player statistics, manage schedules, and handle membership fees—all in one place to keep your group organized.
              </p>
            </div>

            {/* Group Communication */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 hover:ring-1 hover:ring-orange-200 cursor-pointer" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Group Communication</h3>
              <p className="text-gray-600 leading-relaxed">
                Built-in messaging and coordination tools to keep your team connected and organized.
              </p>
            </div>

            {/* Event Management */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 hover:ring-1 hover:ring-orange-200 cursor-pointer" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Event Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Create and manage sports events, from casual pickup games to major tournaments with ease.
              </p>
            </div>

            {/* Find Challenges */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 hover:ring-1 hover:ring-orange-200 cursor-pointer" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Find Challenges</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover and challenge other players or teams in your area. Level up your competitive spirit.
              </p>
            </div>

            {/* Book Officials */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 hover:ring-1 hover:ring-orange-200 cursor-pointer" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Book Officials</h3>
              <p className="text-gray-600 leading-relaxed">
                Easily search for and book qualified referees and scorekeepers to ensure fairness and professionalism in every match.
              </p>
            </div>

            {/* Book Trainers/Coachs */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 hover:ring-1 hover:ring-orange-200 cursor-pointer" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="w-16 h-16 bg-orange-400 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Book Trainers/Coachs</h3>
              <p className="text-gray-600 leading-relaxed">
                Access experienced trainers and coaches to sharpen your skills and boost your performance.
              </p>
            </div>

            {/* Book Venues */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 hover:ring-1 hover:ring-orange-200 cursor-pointer" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="w-16 h-16 bg-blue-400 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Book Venues</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover and reserve top venues for matches or practice sessions, conveniently located near you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="about" className="relative px-6 py-20 bg-transparent overflow-hidden">
        <div className="absolute -top-28 left-0 gradient-blob" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(249,115,22,.22), rgba(249,115,22,0) 60%)' }} />
        <div className="absolute -bottom-32 right-0 gradient-blob" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(59,130,246,.22), rgba(59,130,246,0) 60%)' }} />
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Row 1 */}
            <div className="text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                <img src={JunghyunImage} alt="Junghyun Gu" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">Junghyun Gu</h3>
              <p className="text-gray-600 text-xs">CEO</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                <img src={VineetImage} alt="Vineet Partida" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">Vineet Patidar</h3>
              <p className="text-gray-600 text-xs">Lead Developer</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                <img src={KishanImage} alt="Kishan Makani" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">Kishan Makani</h3>
              <p className="text-gray-600 text-xs">Developer</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                <img src={PratikImage} alt="Pratik Patre" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">Pratik Patre</h3>
              <p className="text-gray-600 text-xs">Developer</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {/* Row 2 - Centered */}
            <div className="text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                <img src={SakshiImage} alt="Sakshi Burse" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">Sakshi Burse</h3>
              <p className="text-gray-600 text-xs">Developer</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                <img src={VikashImage} alt="Vikash Mishra" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">Vikash Mishra</h3>
              <p className="text-gray-600 text-xs">QA Tester</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                <img src={PragyeshImage} alt="Pragyesh Mishra" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">Pragyesh Mishra</h3>
              <p className="text-gray-600 text-xs">QA Tester</p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="relative px-6 py-20 bg-transparent overflow-hidden">
        <div className="absolute -top-20 right-0 gradient-blob" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(249,115,22,.18), rgba(249,115,22,0) 60%)' }} />
        <div className="absolute -bottom-24 left-0 gradient-blob" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(59,130,246,.18), rgba(59,130,246,0) 60%)' }} />
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
          <p className="text-gray-600 mb-8">Our platform is launching soon! Have questions or ideas?<br />Drop us a message and we'll get back to you.</p>
            <form
            onSubmit={async (e) => {
              e.preventDefault();
              const { name, email, message } = form;
              setIsSending(true);
              try {
                const resp = await fetch(`${API_BASE}/api/send-email`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ name, email, message })
                });
                if (!resp.ok) throw new Error('Failed to send');
                alert('Message sent!');
                setForm({ name: '', email: '', message: '' });
                } catch (error) {
                  console.error(error);
                alert('Sorry, something went wrong. Please try again.');
              } finally {
                setIsSending(false);
              }
            }}
            className="space-y-4 text-left"
          >
            <div>
              <label className="block text-sm text-gray-700 mb-1">Name</label>
              <input name="name" type="text" required placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input name="email" type="email" required placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Message</label>
              <textarea name="message" rows={4} required placeholder="Write your message..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <button type="submit" className="w-full sm:w-auto bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 mx-auto block disabled:opacity-60" disabled={isSending || !canSubmit}>Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 px-6 py-12">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-1">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/favicon.svg" alt="TownCup" className="w-7 h-7 rounded" />
              <span className="text-white font-semibold">Towncup</span>
            </div>
            <p className="text-sm">Connect athletes and sports enthusiasts while empowering clubs, leagues, and communities to create and organize with ease.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-700 text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between">
          <p>Townty Sports Inc., Copyright © 2019-2025</p>
          <p>100-713 Columbia Street, New Westminster, BC, V3M 1B9, Canada</p>
        </div>
      </footer>
    </div>
  );
}

export default App;