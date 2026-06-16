import { profile } from "../../data/cvData.js";

export function ProfileSection() {
  return (
    <section className="intro" aria-labelledby="profil">
      <div>
        <p className="eyebrow">Profil</p>
        <h2 id="profil">{profile.headline}</h2>
      </div>
      <p>{profile.summary}</p>
    </section>
  );
}
