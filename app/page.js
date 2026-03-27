// app/page.js
import CanvasBackground from '../components/CanvasBackground';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <CanvasBackground />
      <div className="glow-cursor" id="glowCursor"></div>

      {/* Paste your <nav> here from your original HTML. Change class= to className= */}
      
      {/* Paste your <section id="hero"> here */}
      
      {/* Paste your <section id="about"> here */}
      
      {/* Paste your <section id="experience"> here */}
      
      {/* Paste your <section id="projects"> here */}
      
      {/* Paste your <section id="skills"> here */}
      
      {/* Paste your <section id="education"> here */}

      <section id="contact">
        <div className="section-eyebrow">// 06 — Contact</div>
        <h2 className="section-title">Let's Work<br/>Together.</h2>
        <div className="section-rule"></div>
        <div className="contact-layout reveal">
          <div className="contact-intro">
            {/* Paste your contact intro text and links here */}
          </div>
          
          {/* Drop in our new full-stack React component */}
          <ContactForm />
          
        </div>
      </section>

      {/* Paste your <footer> here */}
    </>
  );
}
