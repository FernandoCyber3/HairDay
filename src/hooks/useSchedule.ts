import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";

import { SCHEDULES_KEY, type Schedule } from "../models/schedule";

import dayjs from "dayjs";

export function useSchedule(date?: string) {
  const [scheduleData, setScheduleData] = useLocalStorage<Schedule[]>(SCHEDULES_KEY, []);
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  function deleteSchedule(id: string) {
    setScheduleData(
      schedules.filter((schedule) => schedule.id !== id)
    )
  }

  const morningSchedules = schedules.filter(
    (schedule) =>
      dayjs(schedule.datetime).format("YYYY-MM-DD") === date &&
      dayjs(schedule.datetime).format("HH") >= "09" &&
      dayjs(schedule.datetime).format("HH") <= "12",
  );

  const afternoonSchedules = schedules.filter(
    (schedule) =>
      dayjs(schedule.datetime).format("YYYY-MM-DD") === date &&
      dayjs(schedule.datetime).format("HH") > "12" &&
      dayjs(schedule.datetime).format("HH") <= "18",
  );

  const nightSchedules = schedules.filter(
    (schedule) =>
      dayjs(schedule.datetime).format("YYYY-MM-DD") === date &&
      dayjs(schedule.datetime).format("HH") > "18" &&
      dayjs(schedule.datetime).format("HH") <= "21",
  );

  useEffect(() => {
    setSchedules(scheduleData);
  }, [scheduleData]);

  return {
    deleteSchedule,
    morningSchedules,
    afternoonSchedules,
    nightSchedules
  };
}
