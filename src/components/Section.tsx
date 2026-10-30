import type { CSSProperties, ReactNode } from 'react';

interface SectionProps {
  id: string;
  label: string;
  children: ReactNode;
}

/** Sección con el nombre en la columna izquierda, que se «teclea» al entrar en pantalla. */
export function Section({ id, label, children }: SectionProps) {
  const headingId = `${id}-h`;
  return (
    <section className="sec" aria-labelledby={headingId}>
      <h2 id={headingId} className="sec-label">
        <span className="sec-label-mark" aria-hidden="true">
          ›{' '}
        </span>
        <span className="tw" style={{ '--n': label.length } as CSSProperties}>
          {label}
        </span>
      </h2>
      {children}
    </section>
  );
}

interface EntryProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  when?: ReactNode;
  children?: ReactNode;
}

/** Entrada tipo CV: título y subtítulo a la izquierda, fechas a la derecha y detalle debajo. */
export function Entry({ title, subtitle, when, children }: EntryProps) {
  const hasHead = Boolean(title || subtitle);
  return (
    <div className="entry">
      {hasHead && (
        <div className="entry-head">
          {title && <h3 className="entry-title">{title}</h3>}
          {subtitle && <p className="entry-sub">{subtitle}</p>}
        </div>
      )}
      {when && <p className="when">{when}</p>}
      {children && <div className={hasHead ? 'entry-body' : 'entry-lead'}>{children}</div>}
    </div>
  );
}

export function DashList({ items }: { items: string[] }) {
  return (
    <ul className="dash">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
