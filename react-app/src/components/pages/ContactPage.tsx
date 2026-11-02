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
          <h1 className="page-title">Let’s create<br /><span className="serif-word">with purpose.</span></h1>
          <p className="large-copy">For enquiries about visual identity, graphic design, or digital experiences, share a brief overview of your project and objectives. I’ll follow up to discuss scope and next steps.</p>
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
              Project overview
              <textarea name="project" required rows={4} />
            </label>
            <button className="button button-dark" type="submit">
              Prepare enquiry <ArrowIcon />
            </button>
            <p className="contact-form-note">Your email application will open with the enquiry details ready to review and send.</p>
          </form>
          <div className="contact-guidance">
            <p className="eyebrow"><span className="eyebrow-line" /> Helpful project details</p>
            <p>
              Include the project’s goals, intended audience, scope, and any
              relevant timing. If the brief is still taking shape, an initial
              outline is a useful place to begin.
            </p>
          </div>
        </div>
        <div className="contact-card">
          <span className="contact-symbol">✳</span>
          <p className="eyebrow">Project availability</p>
          <h2>Taking select<br />commissions</h2>
          <p>Open to considered collaborations across visual identity, graphic design, and digital experiences.</p>
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
