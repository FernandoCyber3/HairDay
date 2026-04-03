import { useSchedule } from "../../hooks/useSchedule";
import { ButtonIcon } from "../button-icon";
import { Text } from "../text";

import TrashIcon from "../../assets/icons/trash.svg?react";
import dayjs from "dayjs";

import type { Schedule } from "../../models/schedule";

interface ScheduleProps {
  schedulesData: Schedule[];
}

export function Schedules({ schedulesData }: ScheduleProps) {
  const { deleteSchedule } = useSchedule();
  
  const schedules = [...schedulesData].sort(
    (smallerHour, biggerHour) =>
      Number(dayjs(smallerHour.datetime).format("HH")) -
      Number(dayjs(biggerHour.datetime).format("HH")),
  );

  function handleDeleteSchedule(id: string) {
    deleteSchedule(id);
  }

  return (
    <>
      {schedules.length === 0 ? (
        <Text className="text-gray-300 py-2" variant={"text-sm"}>
          Você ainda não tem agendamentos cadastrados nesse período.
        </Text>
      ) : (
        schedules.map((schedule) => (
          <li key={schedule.id} className="py-2 flex items-center gap-5">
            <Text as="strong" variant={"title-md"} className="text-gray-200">
              {dayjs(schedule.datetime).format("HH:mm")}
            </Text>
            <Text as="span" className="flex-1 text-gray-200">
              {schedule.customer}
            </Text>

            <ButtonIcon
              icon={TrashIcon}
              onClick={() => handleDeleteSchedule(schedule.id)}
            />
          </li>
        ))
      )}
    </>
  );
}
