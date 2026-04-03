import { Agenda } from "./components/core/agenda";
import { ScheduleSidebar } from "./components/core/schedule-sidebar";

import logo from "./assets/images/logo.svg"

export function App() {
  return (
    <div>
      <div className="absolute top-0 left-0">
        <img src={logo} alt="logo HairDay" />
      </div>

      <div className="flex flex-col gap-3 xl:flex-row">
        <ScheduleSidebar />
        <Agenda />
      </div>
    </div>
  );
}
