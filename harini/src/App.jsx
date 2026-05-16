import { useState, useEffect } from 'react';
import './App.css';
import OpeningScene from './components/OpeningScene';
import CountdownScene from './components/CountdownScene';
import CakeScene from './components/CakeScene';
import BalloonScene from './components/BalloonScene';
import VideoScene from './components/VideoScene';
import LetterScene from './components/LetterScene';
import FinalScene from './components/FinalScene';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [currentScene, setCurrentScene] = useState('loading');
  const [musicPlaying, setMusicPlaying] = useState(false);

  // Initialize loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScene('opening');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const BIRTHDAY_LETTER = `hiii paaki naa dhaa unoda waste fellowww🤍 happiest birthday and idhu nama 1st year friendship anniversary 😂 

last year iniku dha unuku happy birthday harini nu message pota apdi dhaan inda waste fellow un life laa vandhan and epaium solluvnga life laaa yelam best things hum last laa dhaa varum nu na apdi ena kadavul ku puniyam panano nee yenakaga vandha apdiyee pesi pesi koncha naalaiye nala close ahh aaitum aprm andha sympo dhan namala romba close ah aakuchu laaaah best memories rii adhulam un kudavey irundha andha 1 month fulaa is the most best phase in my life and color full days ena aariyamaey naa happy ahh irundha days adhuku aprm nama close ahh dhaa irundhum naduvula koncha naal ena avoid pana adhuku oru reason hum sona adhuku aprathula irundhu dhana nama neriya fights poda aaramichom but every fight distance ehh polaa inum dhaa close ahh annom laaah 

class mate -> friends -> best friends -> close freinds -> ipo na un family laa oruthar ahh irukaaan evlo close avaom nu nenachadhey ilaa enaku theirum naa indpendent ah irukanum depend ah iruka kuddhunu anaa yeno therilaa naa un keta fulla depend aaitan adduct aaitan neee yen best freind matum ilaa yen amma ku aaadthu oru person ah una vechirukan epaium ena vitu poga matanu solliruka so na una nambura vitu poidadha nee happy ah irundha apo apo enaku msg panaely naa happy ahh irupan riii 

adhu podhum una next meet panra varaa kanidpa una daily miss pauva un pics eduthu paapan un voice kepan romba mosama miss panuvaan ana un dsitrub pana mataan kandpaa adhukuaga avanuku nama niyabgam ilaa nu irukadhaa un life laa 24hrs una pathi yosikura 5 jeevan laa nanum onu ah irupan adhu unukeu therium kudaa 

always lovee you soooooo much 🫂🤍 and happy born day by your one and only waste fellow`;

  const BALLOON_CAPTIONS = [
    'First day of friendship',
    'Unforgettable moments',
    'Laughter never stops',
    'Adventures together',
    'Memories to cherish',
    'You are amazing',
    'Best friends forever',
    'Through thick and thin',
    'Side by side always',
    'You make me smile',
    'Greatest gift - YOU',
    'Grateful for you',
    'Endless fun times',
    'Heart full of joy',
    'Happy Birthday!',
  ];

  const MEMORY_PHOTOS = Array.from({ length: 15 }, (_, i) =>
    `assets/images/memory${i + 1}.jpg`
  );

  const renderScene = () => {
    switch (currentScene) {
      case 'loading':
        return <LoadingScreen />;
      case 'opening':
        return (
          <OpeningScene
            onStart={() => setCurrentScene('countdown')}
          />
        );
      case 'countdown':
        return (
          <CountdownScene
            onComplete={() => setCurrentScene('cake')}
          />
        );
      case 'cake':
        return (
          <CakeScene
            onComplete={() => setCurrentScene('balloon')}
          />
        );
      case 'balloon':
        return (
          <BalloonScene
            captions={BALLOON_CAPTIONS}
            photos={MEMORY_PHOTOS}
            onComplete={() => setCurrentScene('letter')}
          />
        );
      case 'letter':
        return (
          <LetterScene
            letter={BIRTHDAY_LETTER}
            onNext={() => setCurrentScene('video')}
          />
        );
      case 'video':
        return (
          <VideoScene
            onNext={() => setCurrentScene('final')}
          />
        );
      case 'final':
        return (
          <FinalScene
            onRestart={() => setCurrentScene('opening')}
          />
        );
      default:
        return <OpeningScene onStart={() => setCurrentScene('countdown')} />;
    }
  };

  return (
    <div className="app">
      <div className="music-control">
        <button
          className={`music-btn ${!musicPlaying ? 'paused' : ''}`}
          onClick={() => setMusicPlaying(!musicPlaying)}
          title="Toggle Music"
        >
          {musicPlaying ? '🔊' : '🔇'}
        </button>
      </div>
      {renderScene()}
    </div>
  );
}

export default App;
