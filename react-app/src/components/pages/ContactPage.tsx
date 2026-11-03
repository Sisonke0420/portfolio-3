import type { FormEvent } from 'react';
import ArrowIcon from '../ArrowIcon';

function ContactPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = `Project enquiry from ${formData.get('name')}`;
    const body = [
      `Name: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      '',
      'Project details:',
      formData.get('project'),
    ].join('\n');
    // Compose the enquiry in the visitor's email app; this form does not send data to a server.
    window.location.href = `mailto:0420nathi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="inner-page page-shell contact-page">
      <p className="eyebrow"><span className="eyebrow-line" /> Start a conversation</p>
      <div className="contact-content">
        <div>
          <h1 className="page-title">Have a good idea?<br /><span className="serif-word">Let’s make it real.</span></h1>
          <p className="large-copy">Have a design problem, a promising idea, or a strong opinion about type? Tell me the essentials and we can work out the scope, next steps, and whether that opinion is justified.</p>
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
              What are you working on?
              <textarea name="project" required rows={4} />
            </label>
            <button className="button button-dark" type="submit">
              Open the email <ArrowIcon />
            </button>
            <p className="contact-form-note">Your email app will open with everything filled in. You still get to press send; I’m not that confident.</p>
          </form>
          <div className="contact-guidance">
            <p className="eyebrow"><span className="eyebrow-line" /> Helpful project details</p>
            <p>
              Share the project’s goals, audience, scope, and any timing. If
              the brief is still taking shape, send the rough version. Perfect
              briefs are famously good at staying in drafts.
            </p>
          </div>
        </div>
        <div className="contact-card">
          <span className="contact-symbol">✳</span>
          <p className="eyebrow">Project availability</p>
          <h2>Taking select<br />commissions</h2>
          <p>Open to thoughtful collaborations across visual identity, graphic design, and digital experiences. Good questions welcome; “make it pop” may need follow-up.</p>
          <a href="mailto:0420nathi@gmail.com" className="button button-light">Send an enquiry <ArrowIcon /></a>
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
