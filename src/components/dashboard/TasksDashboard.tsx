import AddTaskButton from "./AddTaskButton";

export interface TasksDashboardProps {
  children: React.ReactNode;
  title: string;
}

export default function TasksDashboard({ children, title }: TasksDashboardProps) {
  return (
    <section className=" relative size-full p-4 pl-0 ">
      <div className=" flex size-full flex-col gap-8 rounded-xl bg-slate-800 p-4 py-6 ">
        <div className=" flex justify-between">
          <h1 className=" select-none font-mono text-4xl ">{title}</h1>
          <AddTaskButton />
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
