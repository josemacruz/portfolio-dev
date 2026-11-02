import { DashList, Entry, Section } from '@/components/Section';
import { TerminalBar } from '@/components/TerminalBar';
import { getDictionary, lastUpdated, type Locale } from '@/content/dictionaries';
import { education, jobs, sideProjectTech, site } from '@/content/site';
import { formatDuration, formatYearMonth, monthsBetween, yearsSince } from '@/lib/dates';

export function Portfolio({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const facts = [dict.facts.location, dict.facts.experience(yearsSince(site.careerStart)), dict.facts.english];

  return (
    <>
      <a className="skip" href="#contenido">
        {dict.skipToContent}
      </a>
      <TerminalBar locale={locale} dict={dict} />

      <main id="contenido" className="wrap">
        <section className="hero">
          <h1 className="hero-name">{site.name}</h1>
          <p className="hero-intro">{dict.intro}</p>
          <p className="hero-facts">{facts.join(' · ')}</p>
          <ul className="links" aria-label={dict.contactLabel}>
            {site.cvPath && (
              <li>
                <a className="lnk" href={site.cvPath} download>
                  cv.pdf <span aria-hidden="true">↓</span>
                </a>
              </li>
            )}
            <li>
              <a className="lnk" href={site.linkedin} rel="me">
                linkedin <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a className="lnk" href={site.github} rel="me">
                github <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </section>

        <Section id="now" label={dict.sections.now}>
          <Entry when={formatYearMonth(lastUpdated, locale)}>
            <DashList items={dict.now.items} />
          </Entry>
        </Section>

        <Section id="experience" label={dict.sections.experience}>
          <ol className="stack">
            {jobs.map((job) => {
              const copy = dict.jobs[job.id];
              const end = job.end ? formatYearMonth(job.end, locale) : dict.present;
              return (
                <li key={job.id}>
                  <Entry
                    title={copy.role}
                    subtitle={
                      <>
                        {job.companyUrl ? (
                          <a className="lnk strong" href={job.companyUrl}>
                            {job.company}
                          </a>
                        ) : (
                          <span className="strong">{job.company}</span>
                        )}
                        {copy.context} · {copy.place}
                      </>
                    }
                    when={
                      <>
                        {formatYearMonth(job.start, locale)} — {end}
                        <br />
                        <span className="when-soft">{formatDuration(monthsBetween(job.start, job.end), locale)}</span>
                      </>
                    }
                  >
                    <DashList items={copy.points} />
                    <p className="tech">{job.tech.join(', ')}</p>
                  </Entry>
                </li>
              );
            })}
          </ol>
        </Section>

        <Section id="side-project" label={dict.sections.sideProject}>
          <Entry
            title={
              <a className="lnk" href={site.opositandos}>
                Opositandos <span aria-hidden="true" className="when-soft">↗</span>
              </a>
            }
            subtitle={dict.sideProject.role}
            when={
              <a className="lnk" href={site.opositandos}>
                opositandos.es
              </a>
            }
          >
            <DashList items={dict.sideProject.points} />
            <p className="tech">{sideProjectTech.join(', ')}</p>
          </Entry>
        </Section>

        <Section id="education" label={dict.sections.education}>
          <div className="stack">
            <Entry
              title={dict.education.master}
              subtitle={dict.education.school}
              when={
                education.masterStart ? (
                  <>
                    {formatYearMonth(education.masterStart, locale)} — {dict.present}
                    <br />
                    <span className="when-soft">{dict.education.inProgress}</span>
                  </>
                ) : (
                  dict.education.inProgress
                )
              }
            />
            <Entry title={dict.education.bachelor} subtitle={dict.education.university} when={education.bachelorYears}>
              <p className="muted-15">
                {dict.education.thesis}:{' '}
                {education.thesisUrl ? (
                  <a className="lnk strong" href={education.thesisUrl} lang={locale}>
                    {dict.education.thesisTitle}
                  </a>
                ) : (
                  <span lang={locale}>{dict.education.thesisTitle}</span>
                )}
              </p>
            </Entry>
          </div>
        </Section>

        <Section id="languages" label={dict.sections.languages}>
          <div className="stack stack-tight">
            {dict.languages.map((language) => (
              <Entry key={language.name} title={language.name} when={language.level}>
                {language.note && <p className="muted-15">{language.note}</p>}
              </Entry>
            ))}
          </div>
        </Section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <span>
            © {new Date().getFullYear()} {site.name} · {dict.footer.updated}: {formatYearMonth(lastUpdated, locale)}
          </span>
          <a href="#top" className="mini">
            ↑ {dict.footer.top}
          </a>
        </div>
      </footer>
    </>
  );
}
