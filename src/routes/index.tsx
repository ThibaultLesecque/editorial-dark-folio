import { createFileRoute } from "@tanstack/react-router";
import headshot from "@/assets/headshot.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thibault Lesecque — Odoo / Python Engineer Résumé" },
      {
        name: "description",
        content:
          "Résumé of Thibault Lesecque: Odoo and Python development, custom modules, integrations, and full-stack products with TypeScript and Next.js.",
      },
      { property: "og:title", content: "Thibault Lesecque — Odoo / Python Engineer Résumé" },
      {
        property: "og:description",
        content:
          "Single-page résumé: Odoo development, Python, PostgreSQL, TypeScript and Next.js.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Resume,
});

const experienceTags = ["Python", "Odoo ORM", "QWeb", "PostgreSQL", "APIs"];
const educationTags = ["SQL", "Vue.js", "ASP.NET", "Cybersecurity", "Scrum", "ITIL"];

const skills = [
  {
    index: "01",
    name: "Odoo",
    category: "Primary focus",
    primary: true,
    text: "Custom modules, integrations, workflows.",
  },
  {
    index: "02",
    name: "Process Analysis",
    category: "Business analysis",
    text: "Business processes mapped into software.",
  },
  {
    index: "03",
    name: "Python",
    category: "Core language",
    text: "Backend development and automation.",
  },
  {
    index: "04",
    name: "PostgreSQL",
    category: "Data storage",
    text: "Relational storage and queries for apps.",
  },
  {
    index: "05",
    name: "TypeScript",
    category: "Typed JavaScript",
    text: "Typed interfaces and application logic.",
  },
  {
    index: "06",
    name: "Next.js",
    category: "React framework",
    text: "React apps with server-side rendering.",
  },
  {
    index: "07",
    name: "ASP.NET",
    category: "Web framework",
    text: "Server-side apps and APIs with C#/.NET.",
  },
  {
    index: "08",
    name: "Scrum",
    category: "Agile delivery",
    text: "Sprint planning and iterative delivery.",
  },
];

function Resume() {
  return (
    <div className="cv-screen">
      <button
        type="button"
        className="cv-print-btn cv-no-print"
        onClick={() => window.print()}
      >
        Print / Save PDF
      </button>

      <main className="cv-page">
        <header>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
            <p className="cv-status">
              <span className="cv-dot" aria-hidden="true" />
              System initialized
            </p>
            <p className="cv-wordmark">THIBAULT LESECQUE</p>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", gap: 24 }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h1 className="cv-name">Thibault Lesecque</h1>
              <p className="cv-role">Odoo / Python / Full-stack product development</p>

              <address className="cv-meta" style={{ fontStyle: "normal" }}>
                <a href="mailto:thibault.lesecque@outlook.com">
                  thibault.lesecque@outlook.com
                </a>
                <a
                  href="https://linkedin.com/in/thibault-lesecque"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/thibault-lesecque
                </a>
                <a href="https://github.com/ThibaultLesecque" target="_blank" rel="noreferrer">
                  github.com/ThibaultLesecque
                </a>
              </address>
            </div>
            <img
              className="cv-portrait"
              src={headshot.url}
              alt="Portrait of Thibault Lesecque"
              width={88}
              height={88}
            />
          </div>

        </header>

        <section className="cv-section">
          <h2 className="cv-label">01 / Profile</h2>
          <p className="cv-body" style={{ marginTop: 16, maxWidth: "58ch" }}>
            I build practical software for real business needs. Professionally I focus on Odoo
            and Python — custom modules, integrations, and workflows that fit how companies
            actually operate. Independently I build full-stack products with TypeScript and
            Next.js.
          </p>
          <p className="cv-body" style={{ marginTop: 12 }}>
            Open to junior engineering opportunities, Odoo/Python work, and practical web
            products.
          </p>
        </section>

        <section className="cv-section">
          <h2 className="cv-label">02 / Experience</h2>
          <article className="cv-row cv-row--primary">
            <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
              <span className="cv-index">01</span>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    flexWrap: "wrap",
                  }}
                >
                  <h3 className="cv-entry-title">Odoo Development</h3>
                  <span className="cv-badge">Current</span>
                </div>
                <p className="cv-skill-cat">Software Engineer</p>
                <p className="cv-body" style={{ marginTop: 10, maxWidth: "62ch" }}>
                  I build custom Odoo modules, integrations, and end-to-end business workflows,
                  tailoring systems to how a company operates—from sales and inventory to
                  accounting and automation—so teams work with software that fits their
                  process.
                </p>
                <ul className="cv-tags" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {experienceTags.map((tag) => (
                    <li key={tag} className="cv-tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </section>

        <section className="cv-section">
          <h2 className="cv-label">03 / Education</h2>
          <article className="cv-row">
            <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
              <span className="cv-index">02</span>
              <div style={{ flex: 1 }}>
                <h3 className="cv-entry-title">Programming Degree</h3>
                <p className="cv-skill-cat">Graduate Programme in Programming</p>
                <p className="cv-body" style={{ marginTop: 10, maxWidth: "62ch" }}>
                  A structured foundation in software development—databases, web frameworks,
                  security, and IT service management—and the fundamentals everything else
                  builds on.
                </p>
                <ul className="cv-tags" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {educationTags.map((tag) => (
                    <li key={tag} className="cv-tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </section>

        <section className="cv-section">
          <h2 className="cv-label">04 / Skills</h2>
          <p className="cv-body" style={{ marginTop: 12 }}>
            Tools and practices I use to build useful, dependable software.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0" }}>
            {skills.map((skill) => (
              <li key={skill.index} className="cv-skill">
                <span className="cv-index">{skill.index}</span>
                <span>
                  <span className="cv-skill-name">{skill.name}</span>
                </span>
                <span>
                  {skill.primary ? (
                    <span className="cv-badge">Primary focus</span>
                  ) : (
                    <span className="cv-skill-cat">{skill.category}</span>
                  )}
                </span>
                <span className="cv-body">{skill.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="cv-footer">© 2026 Thibault Lesecque</footer>
      </main>
    </div>
  );
}
