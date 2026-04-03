import { useSchedule } from "../../hooks/useSchedule";

import { Schedules } from "./schedules";
import { SchedulePeriod } from "./schedule-period";
import { InputDate } from "../input-date";
import { Text } from "../text";
import { Container } from "../container";

import SunHorizon from "../../assets/icons/sun-horizon.svg?react";
import CloudSun from "../../assets/icons/cloud-sun.svg?react";
import MoonStars from "../../assets/icons/moon-stars.svg?react";
import CalendarIcon from "../../assets/icons/calendar.svg?react";

import { TODAY } from "../../utils/opening-hours";
import { useState } from "react";

export function Agenda() {
  const [date, setDate] = useState(TODAY);
  const { morningSchedules, afternoonSchedules, nightSchedules } = useSchedule(date);

  return (
    <main className="flex-1 py-20">
      <Container>
        <header className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <Text as="h1" variant={"title-lg"} className="text-gray-100 mb-1">
              Sua agenda
            </Text>
            <Text variant={"text-sm"} className="text-gray-300">
              Consulte os seus cortes de cabelo agendados por dia
            </Text>
          </div>

          <InputDate
            icon={CalendarIcon}
            className="w-50"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </header>

        <div className="flex flex-col gap-3 mt-8">
          <SchedulePeriod
            icon={SunHorizon}
            periodText="Manhã"
            periodHours="09h-12h"
          >
            <Schedules schedulesData={morningSchedules} />
          </SchedulePeriod>

          <SchedulePeriod
            icon={CloudSun}
            periodText="Tarde"
            periodHours="13h-18h"
          >
            <Schedules schedulesData={afternoonSchedules} />
          </SchedulePeriod>

          <SchedulePeriod
            icon={MoonStars}
            periodText="Noite"
            periodHours="19h-21h"
          >
            <Schedules schedulesData={nightSchedules} />
          </SchedulePeriod>
        </div>
      </Container>
    </main>
  );
}
