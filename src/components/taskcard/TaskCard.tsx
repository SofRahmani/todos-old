import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import CompleteButton from "./CompleteButton";
import DeleteButton from "./DeleteButton";
import ImportantFlagButton from "./ImportantFlagButton";
import ModifiedButton from "./ModifiedButton";

export interface TaskCardProps {
  completeStatus: boolean;
  priorityStatus: boolean;
  title: string;
  description?: string | null;
  dueDate?: Date;
  id: string;
}

export default function TaskCard({
  completeStatus,
  priorityStatus,
  title,
  description,
  dueDate,
  id
}: TaskCardProps) {

  const formatDateToLocale = (date: Date) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  return (
    // eslint-disable-next-line tailwindcss/no-unnecessary-arbitrary-value
    <Card className=" flex h-80 flex-col overflow-hidden font-mono hover:border-[1px] hover:border-slate-400">
      <CardHeader className=" flex-1 ">
        <CardTitle className="line-clamp-2 overflow-hidden text-ellipsis">{title}</CardTitle>
        <CardDescription className=" line-clamp-5 text-ellipsis text-pretty">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className=" flex items-center justify-between ">
        <div className="flex-1">{dueDate && formatDateToLocale(dueDate)}</div>
        <ImportantFlagButton status={priorityStatus} id={id} />
      </CardContent>
      <CardFooter className=" flex items-center justify-between">
        <CompleteButton status={completeStatus} id={id} />
        <div className="flex items-center justify-center gap-2">
          <ModifiedButton />
          {completeStatus ? <DeleteButton id={id} /> : null}
        </div>
      </CardFooter>
    </Card>
  );
}

// title : 21
// description : 165
