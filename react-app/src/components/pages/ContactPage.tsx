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
      <p className="eyebrow"><span className="eyebrow-line" /> Your turn</p>
      <div className="contact-content">
        <div>
          <h1 className="page-title">Have a good<br />one in <span className="serif-word">mind?</span></h1>
          <p className="large-copy">Tell me what you’re dreaming up—brand identity, graphic design, or a digital experience. A few details help me understand what you need.</p>
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
              Continue in email <ArrowIcon />
            </button>
            <p className="contact-form-note">This opens your email app with your message ready to send.</p>
          </form>
          <div className="contact-guidance">
            <p className="eyebrow"><span className="eyebrow-line" /> A useful place to start</p>
            <p>
              Tell me what you’re hoping to make, who it’s for, and what you
              already know about the project. A rough idea is welcome; we can
              work through the details together.
            </p>
          </div>
        </div>
        <div className="contact-card">
          <span className="contact-symbol">✳</span>
          <p className="eyebrow">Currently booking</p>
          <h2>Select projects<br />for 2026</h2>
          <p>Available for thoughtful collaborations in graphic design, identity, and digital work.</p>
          <a href="mailto:0420nathi@gmail.com" className="button button-light">Say hello <ArrowIcon /></a>
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
