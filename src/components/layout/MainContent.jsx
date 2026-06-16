import { BriefcaseBusiness, GraduationCap, UserRound } from "lucide-react";
import { EducationSection } from "../sections/EducationSection.jsx";
import { ExperienceSection } from "../sections/ExperienceSection.jsx";
import { ProfileSection } from "../sections/ProfileSection.jsx";
import { SummarySection } from "../sections/SummarySection.jsx";
import { Section } from "../ui/Section.jsx";

export function MainContent() {
  return (
    <div className="content">
      <ProfileSection />

      <Section icon={BriefcaseBusiness} title="Berufserfahrung">
        <ExperienceSection />
      </Section>

      <Section icon={GraduationCap} title="Studium">
        <EducationSection />
      </Section>

      <Section icon={UserRound} title="Kurzprofil">
        <SummarySection />
      </Section>
    </div>
  );
}
