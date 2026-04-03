import { useEffect, useState } from "react";
import { useScheduleHours } from "../../hooks/useScheduleHours";
import { useScheduleForm } from "../../hooks/useScheduleForm";

import { InputDate } from "../input-date";
import { Label } from "../label";
import { Text } from "../text";
import { TimeSelect } from "../time-select";
import { InputText } from "../input-text";
import { Button } from "../button";

import CustomerIcon from "../../assets/icons/user.svg?react"
import CalendarIcon from "../../assets/icons/calendar.svg?react"

import dayjs from "dayjs";
import { TODAY } from "../../utils/opening-hours";

export function ScheduleForm() {
  const [date, setDate] = useState(TODAY)
  const [time, setTime] = useState("")
  const [customer, setCustomer] = useState("")
  const [isDisabled, setIsDisabled] = useState(true);

  const { createSchedule, schedules } = useScheduleForm()
  const { opening } = useScheduleHours(date, schedules)

  function handleCreateSchedule(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    createSchedule({
      id: Math.random().toString(36).substring(2, 9),
      customer,
      datetime: dayjs(date).add(Number(time), "hour").toDate()
    })

    setCustomer("")
    setTime("")
  }

  useEffect(() => {
    if(date && time && customer) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [date, time, customer])

  return (
    <form onSubmit={handleCreateSchedule}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <Label htmlFor="schedule-date" className="text-gray-200">Data</Label>
          <InputDate
            icon={CalendarIcon}
            id="schedule-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <Label className="text-gray-200">Horários</Label>

          <div className="mt-2">
            <Text as="small" variant={"text-sm"} className="text-gray-300">Manhã</Text>

            <ul className="flex gap-2 flex-wrap mt-2">
              {opening.map(({ hour, scheduleHour, hourAvailable }) => hour <= "12:00" && (
                <li key={hour}>
                  <TimeSelect 
                    id={hour}
                    label={hour}
                    value={scheduleHour}
                    onChange={(e) => setTime(e.target.value)}
                    checked={time === scheduleHour}
                    disabled={hourAvailable}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="my-3">
            <Text as="small" variant={"text-sm"} className="text-gray-300">Tarde</Text>

            <ul className="flex gap-2 flex-wrap mt-2">
              {opening.map(({ hour, scheduleHour, hourAvailable }) => hour > "12:00" && hour <= "18:00" && (
                <li key={hour}>
                  <TimeSelect 
                    id={hour}
                    label={hour}
                    value={scheduleHour}
                    onChange={(e) => setTime(e.target.value)}
                    checked={time === scheduleHour}              
                    disabled={hourAvailable}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Text as="small" variant={"text-sm"} className="text-gray-300">Noite</Text>

            <ul className="flex gap-2 flex-wrap mt-2">
              {opening.map(({ hour, scheduleHour, hourAvailable }) => hour > "18:00" && hour <= "21:00" && (
                <li key={hour}>
                  <TimeSelect 
                    id={hour}
                    label={hour}
                    value={scheduleHour}                    
                    onChange={(e) => setTime(e.target.value)}
                    checked={time === scheduleHour}
                    disabled={hourAvailable}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-6">
          <Label htmlFor="schedule-customer" className="text-gray-200">Cliente</Label>
          <InputText icon={CustomerIcon} id="schedule-customer" value={customer} onChange={(e) => setCustomer(e.target.value)} />
        </div>
      </div>

      <Button className="w-full" disabled={isDisabled}>Agendar</Button>
    </form>
  )
}
