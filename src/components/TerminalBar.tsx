import { ThemeToggle } from '@/components/ThemeToggle';
import type { Dictionary, Locale } from '@/content/dictionaries';

const LANGUAGES: { code: Locale; href: string; name: string }[] = [
  { code: 'es', href: '/', name: 'Español' },
  { code: 'en', href: '/en', name: 'English' },
];

export function TerminalBar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <header id="top" className="bar">
      <div className="wrap bar-inner">
        <p className="prompt">
          <span className="prompt-user">josema@dev</span>:<span className="prompt-path">{dict.path}</span> ${' '}
          <span className="cursor" aria-hidden="true" />
        </p>
        <div className="bar-controls">
          <nav aria-label={dict.languageLabel} className="lang">
            {LANGUAGES.map(({ code, href, name }, i) => (
              <span key={code}>
                {i > 0 && <span aria-hidden="true">/</span>}
                <a href={href} hrefLang={code} lang={code} aria-label={name} aria-current={code === locale ? 'true' : undefined}>
                  {code}
                </a>
              </span>
            ))}
          </nav>
          <ThemeToggle label={dict.themeLabel} />
        </div>
      </div>
    </header>
  );
}
