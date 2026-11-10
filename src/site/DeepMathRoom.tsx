import { links } from "./data";
import "./ux/room.css";

/* The DeepMath 2026 programme as a band: who spoke and whose papers were in
   the same sessions. Every name is from the conference programme (links.programme);
   affiliations for invited speakers are as printed there. */

type Person = { name: string; where: string };

const speakers: Person[] = [
  { name: "Alfred Hero", where: "University of Michigan · former President, IEEE Signal Processing Society" },
  { name: "Renyuan Xu", where: "Stanford University" },
  { name: "Yuting Wei", where: "Wharton, University of Pennsylvania" },
  { name: "Wenjing Liao", where: "Georgia Tech" },
  { name: "Randall Balestriero", where: "Brown University" },
  { name: "Mo Zhou", where: "University of Washington" },
];

const posters: Person[] = [
  { name: "René Vidal", where: "University of Pennsylvania" },
  { name: "Richard Baraniuk", where: "Rice University · National Academy of Engineering" },
  { name: "Laura Balzano", where: "University of Michigan" },
  { name: "Jonathan Keating", where: "University of Oxford" },
  { name: "Christos Thrampoulidis", where: "University of British Columbia" },
  { name: "Ness Shroff", where: "The Ohio State University" },
  { name: "Aylin Yener", where: "The Ohio State University" },
  { name: "Zhihui Zhu", where: "The Ohio State University" },
];

const talks: Person[] = [
  { name: "Patrick Jaillet", where: "MIT" },
  { name: "Qing Qu", where: "University of Michigan" },
  { name: "Eric Shea-Brown", where: "University of Washington" },
];

function Group({ label, people }: { label: string; people: Person[] }) {
  return (
    <div className="rx-room-group">
      <h3 className="rx-room-k">{label}</h3>
      <ul className="rx-room-list">
        {people.map((p) => (
          <li key={p.name}><b>{p.name}</b><span>{p.where}</span></li>
        ))}
      </ul>
    </div>
  );
}

export default function DeepMathRoom({ headingId = "rx-room-h" }: { headingId?: string }) {
  return (
    <section className="rx-room" aria-labelledby={headingId}>
      <div className="rx-wrap">
        <p className="rx-room-eb">DeepMath 2026 · The Ohio State University · 29–30 October</p>
        <h2 id={headingId}>
          One of 41 accepted papers. <em>Sole author, age 18, no university.</em>
        </h2>
        <p className="rx-room-lede">
          DeepMath is the Conference on the Mathematical Theory of Deep Neural Networks, now in its eighth year. Papers
          are accepted after double-blind review. This is who else was on the 2026 programme.
        </p>
        <div className="rx-room-grid">
          <Group label="Invited speakers" people={speakers} />
          <Group label="Co-authors in the same poster session" people={posters} />
          <Group label="Co-authors of contributed talks" people={talks} />
        </div>
        <p className="rx-room-src">
          Names from the{" "}
          <a href={links.programme} target="_blank" rel="noreferrer">conference programme (PDF)</a>, which lists all 41
          accepted papers. Raadh&rsquo;s is paper 36.
        </p>
      </div>
    </section>
  );
}
