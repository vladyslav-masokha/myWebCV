export function Section({ icon: Icon, title, children }) {
  const headingId = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <section className="section" aria-labelledby={headingId}>
      <div className="section-title">
        <Icon aria-hidden="true" />
        <h2 id={headingId}>{title}</h2>
      </div>
      {children}
    </section>
  );
}
