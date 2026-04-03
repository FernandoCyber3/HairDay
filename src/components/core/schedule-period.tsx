import { Icon } from "../icon";
import { Text } from "../text";

interface PeriodProps extends React.ComponentProps<"div"> {
  icon: React.ComponentProps<typeof Icon>["svg"];
  periodText: string;
  periodHours: string;
}

export function SchedulePeriod({
  icon,
  periodText,
  periodHours,
  children,
  className,
  ...props
}: PeriodProps) {
  return (
    <div className="border border-gray-600 rounded-lg" {...props}>
      <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-600">
        <Icon svg={icon} className="fill-yellow" />
        <Text as="span" variant="text-sm" className="text-gray-300 flex-1">{periodText}</Text>
        <Text as="span" variant="text-sm" className="text-gray-300">{periodHours}</Text>
      </div>

      <ul role="list" className="p-5">{children}</ul>
    </div>
  );
}
