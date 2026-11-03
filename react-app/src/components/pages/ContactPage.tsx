import { useState, type FormEvent } from 'react';
import ArrowIcon from '../ArrowIcon';
import { GlitchHeading } from '../GlitchHeading';
import GlitchSlogan from '../GlitchSlogan';
import SnakeGame from '../SnakeGame';
import TapSparkGame from '../TapSparkGame';

function ContactPage() {
  const [customBudget, setCustomBudget] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const service = formData.get('service');
    const selectedBudget = formData.get('budget');
    const budget = selectedBudget === 'custom'
      ? formData.get('customBudget') ? `R${formData.get('customBudget')}` : 'Custom amount not specified'
      : selectedBudget || 'Not specified';
    const subject = `Project enquiry from ${formData.get('name')}${service ? ` — ${service}` : ''}`;
    const body = [
      `Name: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      `Service: ${formData.get('service') || 'Not specified'}`,
      `Timeline: ${formData.get('timeline') || 'Not specified'}`,
      `Estimated budget: ${budget}`,
      '',
      'Project overview:',
      formData.get('project'),
    ].join('\n');
    // Compose the enquiry in the visitor's email app; this form does not send data to a server.
    window.location.href = `mailto:0420nathi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="inner-page page-shell contact-page">
      <p className="eyebrow"><span className="eyebrow-line" /> <GlitchSlogan messages={['Hello, interesting person', 'Well hello, good idea', 'A project is plotting something']} /></p>
      <div className="contact-content">
        <div>
          <GlitchHeading as="h1" className="page-title">Have a good idea?<br /><span className="serif-word">Let’s give it a go.</span></GlitchHeading>
          <p className="large-copy">Have a design problem, a promising idea, or a strong opinion about type? Tell me the essentials and we can work out the scope, next steps, and whether that opinion is justified.</p>
          <p className="contact-aside">A rough brief is welcome. So is a first draft. They can both arrive in their comfortable clothes.</p>
          <a className="contact-email" href="mailto:0420nathi@gmail.com">
            0420nathi@gmail.com <ArrowIcon diagonal />
          </a>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Your name
              <input autoComplete="name" name="name" required />
            </label>
            <label>
              Email address
              <input autoComplete="email" name="email" required type="email" />
            </label>
            <label>
              What kind of help do you need?
              <select name="service" defaultValue="">
                <option value="">Choose a service (optional)</option>
                <option>Visual identity</option>
                <option>Graphic or editorial design</option>
                <option>Web application development</option>
                <option>Mobile application development</option>
                <option>Sound design and audio engineering</option>
                <option>Video editing and post-production</option>
                <option>Back-end application development</option>
                <option>Something else</option>
              </select>
            </label>
            <div className="contact-form-row">
              <label>
                Ideal timing
                <select name="timeline" defaultValue="">
                  <option value="">Still figuring it out</option>
                  <option>As soon as possible</option>
                  <option>Within 1–3 months</option>
                  <option>Within 3–6 months</option>
                  <option>Flexible</option>
                </select>
              </label>
              <label>
                Estimated budget (ZAR)
                <select
                  name="budget"
                  defaultValue=""
                  onChange={(event) => setCustomBudget(event.target.value === 'custom')}
                >
                  <option value="">Still figuring it out</option>
                  <option>Under R10,000</option>
                  <option>R10,000–R25,000</option>
                  <option>R25,000–R50,000</option>
                  <option>R50,000–R100,000</option>
                  <option>R100,000+</option>
                  <option value="custom">I have a different amount</option>
                </select>
              </label>
            </div>
            {customBudget && (
              <label>
                Your budget (ZAR)
                <input
                  autoComplete="off"
                  inputMode="decimal"
                  min="0"
                  name="customBudget"
                  placeholder="e.g. 42,000"
                  required
                  type="number"
                />
              </label>
            )}
            <label>
              Tell me about the project
              <textarea name="project" required rows={5} placeholder="What are you making, who is it for, and what would a good result look like?" />
            </label>
            <button className="button button-dark" type="submit">
              Open the email <ArrowIcon />
            </button>
            <p className="contact-form-note">Your email app will open with everything filled in. You still get to press send; I’m not that confident.</p>
          </form>
          <div className="contact-guidance">
            <p className="eyebrow"><span className="eyebrow-line" /> Helpful project details</p>
            <p>
              A useful starting point: what the project is, who it is for,
              what you need made, and when you hope to launch. A budget range
              helps shape a realistic scope. If some details are still
              mysterious, “not sure yet” is a perfectly good answer.
            </p>
          </div>
        </div>
        <div className="contact-card">
          <span className="contact-symbol">✳</span>
          <p className="eyebrow">The creative corner</p>
          <GlitchHeading as="h2">Making room<br />for good ideas</GlitchHeading>
          <p>From visual identity and digital products to audio, post-production, and back-end engineering, I welcome projects with a clear purpose. For work that spans disciplines, I can shape a cohesive approach across the full experience.</p>
          <a href="mailto:0420nathi@gmail.com" className="button button-light">Send an enquiry <ArrowIcon /></a>
          <div className="contact-game-desktop">
            <SnakeGame />
          </div>
          <div className="contact-game-mobile">
            <TapSparkGame />
          </div>
        </div>
      </div>
      <div className="contact-footer">
        <span>Johannesburg, GP</span>
        <a href="https://github.com/Sisonke0420" target="_blank" rel="noopener noreferrer">GitHub <ArrowIcon diagonal /></a>
      </div>
    </section>
  );
}

export default ContactPage;
