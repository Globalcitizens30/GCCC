import React, { useState, useEffect } from 'react';
import './GlobalCommunityCenterLobby.css';
import { Globe, Users, Target, TrendingUp, MessageCircle, Calendar, MapPin, ChevronRight, Bell, Search, Image, Lock, Play, Camera, Coffee, Gamepad2, BookOpen, Music, Video, UserCheck, Star, Heart } from 'lucide-react';
const GlobalCommunityCenterLobby = () => {
    const [activeSection, setActiveSection] = useState('overview');
    const [connectedCountries, setConnectedCountries] = useState(147);
    const [activeMissions, setActiveMissions] = useState(23);
    const [liveUsers, setLiveUsers] = useState(2847);
    const [isMember, setIsMember] = useState(false);
    const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);
    // Game state
    const [planetHealth, setPlanetHealth] = useState(65);
    const [doomsdayTimer, setDoomsdayTimer] = useState(1938);
    const [gameEnergy, setGameEnergy] = useState(100);
    const [completedGoals, setCompletedGoals] = useState(4);
    const [planetMood, setPlanetMood] = useState('concerned');
    const [lastAction, setLastAction] = useState('');
    const [gameScore, setGameScore] = useState(2847);

    // Simulate real-time updates
    useEffect(() => {
      const interval = setInterval(() => {
        setLiveUsers(prev => prev + Math.floor(Math.random() * 10 - 5));
        if (Math.random() < 0.1) {
          setActiveMissions(prev => prev + (Math.random() < 0.5 ? 1 : -1));
        }
        // Game timer countdown
        setDoomsdayTimer(prev => {
          const newTimer = prev - (Math.random() < 0.3 ? 1 : 0);
          return Math.max(0, newTimer);
        });
        // Planet mood changes based on health
        if (planetHealth > 80) setPlanetMood('thriving');
        else if (planetHealth > 60) setPlanetMood('hopeful');
        else if (planetHealth > 40) setPlanetMood('concerned');
        else if (planetHealth > 20) setPlanetMood('distressed');
        else setPlanetMood('critical');
      }, 3000);
      return () => clearInterval(interval);
    }, [planetHealth]);

    const regions = [
      { name: 'Sub-Saharan Africa', countries: 48, progress: 34, color: 'bg-orange-500' },
      { name: 'South Asia', countries: 8, progress: 42, color: 'bg-blue-500' },
      { name: 'East Asia & Pacific', countries: 25, progress: 78, color: 'bg-green-500' },
      { name: 'Latin America', countries: 32, progress: 56, color: 'bg-purple-500' },
      { name: 'Middle East & North Africa', countries: 21, progress: 61, color: 'bg-yellow-500' },
      { name: 'Europe & Central Asia', countries: 48, progress: 89, color: 'bg-indigo-500' }
    ];

    const galleryItems = [
      { 
        id: 1, 
        type: 'image', 
        title: 'Solar Village - Kenya', 
        description: 'First solar-powered village brings electricity to 2,000 residents',
        country: 'Kenya',
        likes: 342,
        views: 1247,
        thumbnail: 'bg-gradient-to-br from-yellow-400 to-orange-600'
      },
      { 
        id: 2, 
        type: 'video', 
        title: 'Clean Water Project - Bangladesh', 
        description: 'Community celebrates new water treatment facility',
        country: 'Bangladesh',
        likes: 189,
        views: 856,
        thumbnail: 'bg-gradient-to-br from-blue-400 to-cyan-600'
      },
      { 
        id: 3, 
        type: 'image', 
        title: 'School Opening - Mali', 
        description: '500 children attend first day at new primary school',
        country: 'Mali',
        likes: 278,
        views: 923,
        thumbnail: 'bg-gradient-to-br from-green-400 to-emerald-600'
      },
      { 
        id: 4, 
        type: 'video', 
        title: 'Microfinance Success - Peru', 
        description: 'Women entrepreneurs share their transformation stories',
        country: 'Peru',
        likes: 156,
        views: 634,
        thumbnail: 'bg-gradient-to-br from-purple-400 to-pink-600'
      }
    ];

    const recRooms = [
      {
        id: 1,
        name: 'Global Café',
        description: 'Casual conversations with members worldwide',
        icon: Coffee,
        members: 23,
        status: 'active',
        activity: 'Maria from Brazil is sharing coffee recipes'
      },
      {
        id: 2,
        name: 'Innovation Lab',
        description: 'Brainstorm solutions and share ideas',
        icon: Target,
        members: 15,
        status: 'active',
        activity: 'Discussing water purification technologies'
      },
      {
        id: 3,
        name: 'Game Lounge',
        description: 'Relax and connect through games',
        icon: Gamepad2,
        members: 8,
        status: 'quiet',
        activity: 'Playing geography trivia'
      },
      {
        id: 4,
        name: 'Story Circle',
        description: 'Share experiences and cultural stories',
        icon: BookOpen,
        members: 31,
        status: 'active',
        activity: 'Ahmed sharing stories from Sudan'
      },
      {
        id: 5,
        name: 'Music Corner',
        description: 'Share music from your culture',
        icon: Music,
        members: 12,
        status: 'quiet',
        activity: 'Listening to Kenyan folk music'
      },
      {
        id: 6,
        name: 'Movie Night',
        description: 'Watch documentaries together',
        icon: Video,
        members: 45,
        status: 'scheduled',
        activity: 'Next: "The End of Poverty?" at 8 PM UTC'
      }
    ];

    const recentActivities = [
      { country: 'Bangladesh', action: 'Launched microfinance program', time: '2 min ago', impact: '+12,000 beneficiaries' },
      { country: 'Kenya', action: 'Solar energy project completed', time: '7 min ago', impact: '50 villages connected' },
      { country: 'Peru', action: 'Education initiative milestone', time: '15 min ago', impact: '500 teachers trained' },
      { country: 'Philippines', action: 'Clean water access expanded', time: '23 min ago', impact: '25,000 people served' }
    ];

    const globalGoals = [
      { id: 1, name: 'No Poverty', completed: true, impact: '+15 health', color: 'bg-red-500' },
      { id: 2, name: 'Zero Hunger', completed: true, impact: '+12 health', color: 'bg-yellow-500' },
      { id: 3, name: 'Good Health', completed: true, impact: '+18 health', color: 'bg-green-500' },
      { id: 4, name: 'Quality Education', completed: true, impact: '+10 health', color: 'bg-blue-500' },
      { id: 5, name: 'Gender Equality', completed: false, impact: '+14 health', color: 'bg-orange-500' },
      { id: 6, name: 'Clean Water', completed: false, impact: '+16 health', color: 'bg-cyan-500' },
      { id: 7, name: 'Clean Energy', completed: false, impact: '+20 health', color: 'bg-amber-500' },
      { id: 8, name: 'Economic Growth', completed: false, impact: '+13 health', color: 'bg-purple-500' },
    ];

    const gameActions = [
      { 
        name: 'Feed Hungry Communities', 
        cost: 20, 
        healthGain: 8, 
        description: 'Provide meals to 10,000 people',
        goal: 'Zero Hunger'
      },
      { 
        name: 'Build Solar Farm', 
        cost: 35, 
        healthGain: 15, 
        description: 'Clean energy for 5,000 homes',
        goal: 'Clean Energy'
      },
      { 
        name: 'Train Teachers', 
        cost: 25, 
        healthGain: 12, 
        description: 'Educate 500 new teachers',
        goal: 'Quality Education'
      },
      { 
        name: 'Dig Wells', 
        cost: 30, 
        healthGain: 18, 
        description: 'Clean water for 20 villages',
        goal: 'Clean Water'
      },
      { 
        name: 'Support Women Entrepreneurs', 
        cost: 28, 
        healthGain: 14, 
        description: 'Fund 200 women-led businesses',
        goal: 'Gender Equality'
      }
    ];

    const performGameAction = (action) => {
      if (gameEnergy >= action.cost) {
        setGameEnergy(prev => prev - action.cost);
        setPlanetHealth(prev => Math.min(100, prev + action.healthGain));
        setGameScore(prev => prev + action.healthGain * 10);
        setLastAction(`${action.name}: ${action.description}`);
        if (Math.random() < 0.3) {
          setCompletedGoals(prev => Math.min(17, prev + 1));
        }
      }
    };

    const restorePlanet = () => {
      if (gameEnergy >= 50) {
        setGameEnergy(prev => prev - 50);
        setPlanetHealth(prev => Math.min(100, prev + 25));
        setGameScore(prev => prev + 500);
        setLastAction('Used global cooperation to restore ecosystems!');
      }
    };

    const renderOverview = () => (
      <div className="overview-section">Overview content here</div>
    );

    const renderGallery = () => (
      <div className="gallery-section">Gallery content here</div>
    );

    const renderRecreation = () => (
      <div className="recreation-section">Recreation content here</div>
    );

    const renderGame = () => {
      return (
        <div className="game-section">Game content here</div>
      );
    };

    return (
      <div className="global-lobby-container">
        <header className="header">Global Community Center</header>
        <nav className="nav">
          <button onClick={() => setActiveSection('overview')}>Overview</button>
          <button onClick={() => setActiveSection('gallery')}>Gallery</button>
          <button onClick={() => setActiveSection('recreation')}>Rec Rooms</button>
          <button onClick={() => setActiveSection('game')}>Save Planet</button>
        </nav>
        <main>
          {activeSection === 'overview' && renderOverview()}
          {activeSection === 'gallery' && renderGallery()}
          {activeSection === 'recreation' && renderRecreation()}
          {activeSection === 'game' && renderGame()}
        </main>
      </div>
    );
  };


export default GlobalCommunityCenterLobby;
