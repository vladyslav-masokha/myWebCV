import { MapPin } from "lucide-react";
import { quickFacts } from "../../data/cvData.js";

const factIcons = {
  location: MapPin,
};

export function SummarySection() {
  return (
    <div className="summary-grid">
      {quickFacts.map(({ label, value, icon }) => {
        const Icon = factIcons[icon];

        return (
          <div key={label}>
            <strong>{label}</strong>
            <span>
              {Icon ? <Icon aria-hidden="true" /> : null}
              {value}
            </span>
          </div>
        );
      })}
    </div>
  );
}
