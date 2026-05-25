import { portfolio } from '../data/portfolio'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line px-6 py-6 text-center text-sm text-muted">
      <p className="m-0">
        &copy; {year} {portfolio.name}. Built with React &amp; Vite.
      </p>
    </footer>
  )
}

export default Footer
