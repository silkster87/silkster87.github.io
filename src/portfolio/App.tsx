import { useEffect, useState } from 'react';

const navigation = [
  ['Home', '#home'], ['Skills', '#skills'], ['Experience', '#experience'],
  ['Projects', '#projects'], ['Interests', '#interests'], ['Contact', '#contact'],
];

const skills = [
  ['reactLogo.svg', 'React'], ['logo-javascript.svg', 'JavaScript'], ['typescriptLogo.svg', 'TypeScript'],
  ['html5Icon.svg', 'HTML 5'], ['css3Icon.svg', 'CSS 3'], ['nodejsIcon.svg', 'NodeJS'],
  ['expressLogo.svg', 'Express'], ['gitIcon.svg', 'Git'], ['githubIcon.svg', 'GitHub'], ['mongodbIcon.svg', 'MongoDB'],
];

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return <ul>{navigation.map(([label, href]) => <li key={label}><a href={href} onClick={onNavigate}>{label}</a></li>)}</ul>;
}

function Video({ src, title }: { src: string; title: string }) {
  return <iframe className="youtube-video" src={src} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headline, setHeadline] = useState('');

  useEffect(() => {
    const words = ['Full Stack Developer', 'Runner', 'Pianist'];
    let wordIndex = 0;
    let position = 0;
    let deleting = false;
    let pause = 0;
    const timer = window.setInterval(() => {
      const word = words[wordIndex];
      if (!deleting && position === word.length) {
        if (++pause === 15) { deleting = true; pause = 0; }
      } else if (deleting && position === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
      if (pause === 0) position += deleting ? -1 : 1;
      setHeadline(words[wordIndex].slice(0, position));
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
      <header className="hero">
        <div><h1>Silky Ng</h1><h2 className="typing-text" aria-label={headline}>{headline}</h2></div>
        <img src="/images/profile_pic_comp.jpg" alt="Silky profile picture" className="profile-pic" />
      </header>
      <section className="intro">
        <p>A front-end oriented full stack developer with proven experience working in cross-functional teams to deliver high quality user experiences.</p>
        <div className="links-container">
          <a className="personal-links" href="https://github.com/silkster87/"><img src="/images/githubIcon.svg" alt="" /><strong>Github</strong></a>
          <a className="personal-links" href="https://linkedin.com/in/silky-ng/"><img src="/images/linkedinIcon.svg" alt="" /><strong>Linkedin</strong></a>
          <a className="personal-links" href="mailto:contact@silkyng.com"><img src="/images/email.svg" alt="" /><span>contact@silkyng.com</span></a>
        </div>
      </section>

      <section className="content-section" id="skills">
        <h2>Skills</h2>
        <div className="skills-list">{skills.map(([image, label]) => <figure key={label}><img src={`/images/${image}`} alt={`${label} logo`} /><figcaption>{label}</figcaption></figure>)}</div>
      </section>

      <section className="content-section experience" id="experience">
        <h2>Experience</h2>
        <article className="card"><a href="https://eeze.com/" target="_blank" rel="noreferrer"><img className="company-logo" src="/images/eeze_logo.svg" alt="Eeze Logo" /></a><p>Eeze | June 2023 - Present | London</p><p>Eeze deliver online casino games in the iGaming industry with over 20 years experience. Role as a front-end develeper working in the Core team creating admin dashboards for gaming statistics and also game tournament advertising. Working in cross-functional teams to deliver API data, charts and complex state handling.</p></article>
        <article className="card"><img className="company-logo" src="/images/kixyLogo.svg" alt="Kixy Logo" /><p>Kixy | July 2022 - Feb 2023 | London</p><p>Kixy is a social money transfer app. Primary front-end role in refactoring and implementing new features on the internal dashboard. Features include details of transactions, pairs rates, customers and configuration settings. The dashboard is built using React JavaScript, connected to AWS AppSync, Cognito with dynamoDB and GraphQL in a serverless architecture.</p><a href="https://kixy.com" target="_blank" rel="noreferrer" className="personal-links"><img src="/images/kixySmileIcon.svg" alt="" />Official Website</a></article>
        <article className="card"><img className="company-logo" src="/images/finWizLogo.png" alt="FinWiz Investment Tracker" /><p>FinWiz | May 2022 | Remote</p><Video src="https://www.youtube.com/embed/tp0J9fNyDNU" title="FinWiz Investment Tracker" /><p>Open source group project for an investment portfolio app to track investments from stocks, crypto and commodities. Primarily back-end role implementing Express server with PostgreSQL with Prisma ORM. API data obtained from <a href="https://coinmarketcap.com/api/">CoinMarketCap</a>, <a href="https://iexcloud.io/">iex cloud</a> and <a href="https://newsapi.org/">News API</a></p><a className="personal-links" href="https://github.com/silkster87/FinWiz_server" target="_blank" rel="noreferrer"><img src="/images/githubIcon.svg" alt="" />Github Repo</a></article>
        <article className="card"><img className="company-logo" src="/images/jobColumnLogo.png" alt="Job Column Logo" /><p>JobColumn | April 2022 | Remote</p><p>Open source project to refactor into TypeScript and improve UI and data flow. Implemented unit and integration tests using Jest and E2E testing with Cypress.</p><a className="personal-links" href="https://github.com/silkster87/Job-COLumn" target="_blank" rel="noreferrer"><img src="/images/githubIcon.svg" alt="" />Github Repo</a></article>
        <article className="card"><img className="company-logo" src="/images/dfeIcon.svg" alt="Department for Education Logo" /><p>Department for Education | Jan 2017 - Feb 2022 | London</p><p>2nd Line Support resolving IT incidents and requests. Collaborated with agile IT toolset team to design and implement a mobile app, resulting in a 10% reduction in service desk calls and streamlined tracking of user return to office.</p></article>
      </section>

      <section className="content-section" id="projects"><h2>Projects</h2><article className="card"><img className="company-logo" src="/images/plantSpotterIcon.svg" alt="Plant Spotter Logo" /><p>PlantSpotter</p><Video src="https://www.youtube.com/embed/9dDHbwZbm78" title="Plant Spotter App" /><p>An React Native Expo app for identifying plants. By taking a picture or uploading a photo of a plant it will suggest the best result from <a href="https://plant.id/">plant.id API.</a> Implemented firebase login authentication and mongoDB for data storage.</p><a className="personal-links" href="https://github.com/silkster87/plantspotter" target="_blank" rel="noreferrer"><img src="/images/githubIcon.svg" alt="" />Github Repo</a></article></section>

      <section className="content-section" id="interests"><h2>Interests</h2><article className="card"><p>Piano</p><Video src="https://www.youtube.com/embed/vQY-Nx5vee8" title="Over the Rainbow Jazz Piano" /><p>I have been playing the piano for over 25 years and am a member of <a href="https://www.bromleymusicmakers.org/">Bromley Music Makers</a> in which I manage their website. I enjoy performing and listening to a variety of musicians.</p></article><article className="card"><p>Running</p><p>I'm also a keen runner and member of <a href="https://www.pettswoodrunners.org/">Petts Wood Runners</a>. From Parkruns to marathons, I thoroughly enjoy races and always looking forward to my next marathon adventure.</p><p>Personal Bests</p><div className="pb-container"><span>5K</span><span>18:06</span><span>10k</span><span>38:48</span><span>HM</span><span>1:25:59</span><span>Mar</span><span>3:02:38</span></div><iframe className="strava" title="Strava activity summary" src="https://www.strava.com/athletes/25077231/activity-summary/59c57c577e4420449133edaba3285a2edc258420" /></article></section>
    </main>

    <footer id="contact"><section className="content-section"><h2>Contact</h2><p>I always take pleasure in being curious and inquisitve about other people. Whether that is collaborating on new coding projects, music or running related I am more than happy to help. It is best to email me and I shall respond swiftly.</p><div className="contact-actions"><a className="footer-btn" href="mailto:contact@silkyng.com">contact@silkyng.com</a><a className="footer-btn" href="tel:+447541069941">Give a call</a></div></section><p className="last-section">Created by Silky Ng on <a href="https://github.com/silkster87/silkster87.github.io">Github Pages</a> 2023</p></footer>
  </>;
}

export default App;
