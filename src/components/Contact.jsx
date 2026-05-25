import { useState } from 'react'
import { portfolio } from '../data/portfolio'
import SectionTitle from './SectionTitle'

const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

const inputClass =
  'w-full rounded-lg border border-line bg-page px-4 py-3 font-sans text-base text-heading outline-none transition-colors placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/20'

function Contact() {
  const { intro, form } = portfolio.contact
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const isConfigured = Boolean(accessKey)

  async function handleSubmit(event) {
    event.preventDefault()

    if (!isConfigured) {
      setStatus('error')
      setErrorMessage(form.notConfigured)
      return
    }

    const formElement = event.currentTarget
    const data = new FormData(formElement)

    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || form.error)
      }

      setStatus('success')
      formElement.reset()
    } catch (error) {
      setStatus('error')
      setErrorMessage(error.message || form.error)
    }
  }

  return (
    <section id="contact" className="py-20 max-sm:py-14">
      <SectionTitle
        label="05 — Red"
        title="Hablemos"
        titleAccent="?"
        accentPosition="end"
      />

      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <p className="m-0 max-w-xl text-[1.0625rem] leading-relaxed text-muted">
            {intro}
          </p>
          <a
            href={`mailto:${portfolio.email}`}
            className="mt-6 inline-block font-display text-2xl font-light text-heading no-underline hover:text-accent"
          >
            {portfolio.email}
          </a>
          <ul className="mt-6 flex list-none flex-wrap gap-4 p-0">
            {portfolio.social.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-xl border border-line bg-surface p-6 shadow-(--shadow-card) md:p-8"
        >
          {!isConfigured && (
            <p
              className="m-0 rounded-lg border border-line bg-accent-soft px-4 py-3 text-sm text-accent"
              role="status"
            >
              {form.notConfigured}
            </p>
          )}

          <input type="hidden" name="access_key" value={accessKey ?? ''} />
          <input
            type="hidden"
            name="subject"
            value={`Portfolio — Nuevo mensaje de contacto`}
          />
          <input type="hidden" name="from_name" value="Portfolio Matias Figueroa" />
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-name" className="font-sans text-sm font-medium text-heading">
              {form.name}
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              autoComplete="name"
              className={inputClass}
              placeholder="Tu nombre"
              disabled={status === 'sending'}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-email" className="font-sans text-sm font-medium text-heading">
              {form.email}
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              className={inputClass}
              placeholder="tu@correo.com"
              disabled={status === 'sending'}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-message"
              className="font-sans text-sm font-medium text-heading"
            >
              {form.message}
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              className={`${inputClass} resize-y min-h-32`}
              placeholder="Cuéntame en qué puedo ayudarte…"
              disabled={status === 'sending'}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-1 w-full rounded-lg bg-accent px-6 py-3.5 font-sans text-base font-semibold text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:self-start"
          >
            {status === 'sending' ? form.sending : form.submit}
          </button>

          {status === 'success' && (
            <p className="m-0 text-sm font-medium text-accent" role="status">
              {form.success}
            </p>
          )}
          {status === 'error' && (
            <p className="m-0 text-sm font-medium text-red-600 dark:text-red-400" role="alert">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
