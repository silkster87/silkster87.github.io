import { useEffect, useState } from 'react';
import { HEADLINE_WORDS } from './constants';
import { advanceTypingState, type TypingState } from './utils';
import { NavLinks } from './components/NavLinks';
import { ExperienceSection, Footer, Hero, InterestsSection, Intro, ProjectsSection, SkillsSection } from './components/PageSections';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headline, setHeadline] = useState('');

  useEffect(() => {
    let state: TypingState = { wordIndex: 0, position: 0, deleting: false, pause: 0 };
    const timer = window.setInterval(() => {
      state = advanceTypingState(state, HEADLINE_WORDS);
      setHeadline(HEADLINE_WORDS[state.wordIndex].slice(0, state.position));
    }, 100);
    return () => window.clearInterval(timer);
  }, []);

  return <>
    <nav className="top-header" aria-label="Main navigation">
      <a className="logo" href="#home"><img src="/images/silky_logo.svg" alt="" /><span>Silky Ng</span></a>
      <div className="navbar"><NavLinks /></div>
      <button className={`menu-toggle${menuOpen ? ' open' : ''}`} type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span /><span />
      </button>
      {menuOpen && <div className="mobile-menu"><NavLinks onNavigate={() => setMenuOpen(false)} /></div>}
    </nav>
    <main id="home">
      <Hero headline={headline} />
      <Intro />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <InterestsSection />
    </main>
    <Footer />
  </>;
}

export default App;
