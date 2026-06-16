import { CalendarDays } from "lucide-react";

export function Period({ children }) {
  return (
    <span>
      <CalendarDays aria-hidden="true" />
      {children}
    </span>
  );
}
