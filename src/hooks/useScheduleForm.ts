import useLocalStorage from "use-local-storage";
import { SCHEDULES_KEY, type Schedule } from "../models/schedule";

export function useScheduleForm() {
  const [schedules, setSchedules] = useLocalStorage<Schedule[]>(SCHEDULES_KEY, [])

  function createSchedule(data: Schedule) {
    setSchedules([...schedules, data])
  }

  return {
    schedules,
    createSchedule
  }
}
