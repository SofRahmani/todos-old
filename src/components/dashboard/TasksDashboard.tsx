import AddTaskButton from "./AddTaskButton";
import { AddTaskForm } from "./AddTaskForm";

export interface TasksDashboardProps {
  children: React.ReactNode;
  title: string;
}

export default function TasksDashboard({ children, title }: TasksDashboardProps) {
  return (
    <section className=" relative size-full overflow-hidden p-4 pl-0 ">
      <div className=" flex size-full flex-col gap-8 rounded-xl bg-slate-800 p-4 py-6 ">
        <div className=" flex justify-between">
          <h1 className=" select-none font-mono text-4xl ">{title}</h1>
          <AddTaskForm>
            <AddTaskButton />
          </AddTaskForm>
        </div>
        <div className=" relative grid gap-2 overflow-y-auto overflow-x-hidden md:grid-cols-4 ">
          {children}
        </div>
      </div>
    </section>
  );
}
