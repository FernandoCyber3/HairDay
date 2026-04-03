import { Container } from "../container";
import { Text } from "../text";
import { ScheduleForm } from "./schedule-form";

export function ScheduleSidebar() {
  return (
    <div className="py-20 px-5 bg-gray-700 rounded-xl xl:max-w-124.5 xl:px-20">
      <Container size={"sm"}>
        <div className="mb-6">
          <Text as="h1" variant={"title-lg"} className="text-gray-100 mb-1">
            Agende um atendimento
          </Text>
          <Text className="text-gray-300" variant={"text-sm"}>
            Selecione data, horário e informe o nome do cliente para criar o
            agendamento
          </Text>
        </div>

        <ScheduleForm />
      </Container>
    </div>
  );
}
