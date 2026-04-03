import dayjs from "dayjs";
import { OPENING_HOURS } from "../utils/opening-hours";
import type { Schedule } from "../models/schedule";

export function useScheduleHours(date: string, schedules: Schedule[]) {
  const dataUnavailable = schedules.map((schedule) => dayjs(schedule.datetime).format("YYYY-MM-DD HH:mm"))

  const opening = OPENING_HOURS.map((hour) => {
    const [scheduleHour] = hour.split(":")
    const isHourPast = dayjs(date).add(Number(scheduleHour), "hour").isBefore(dayjs())

    const datetimeSelected = dayjs(date).add(Number(scheduleHour), "hour").format("YYYY-MM-DD HH:mm")
    const hourAvailable = dataUnavailable.includes(datetimeSelected) || isHourPast

    return {
      hour,
      scheduleHour,
      hourAvailable
    }
  })

  return {
    opening
  }
}
