import { useState } from "react"
import TaskForm from "@/components/TaskForm"
import TaskCard from "@/components/TaskCard"

export default function Dashboard() {
  const [tasks, setTasks] = useState<string[]>([])

  const handleAddTask = (title: string) => {
    setTasks((prev) => [...prev, title])
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">Welcome to Tascend</h1>
      <TaskForm onAdd={handleAddTask} />

      <div className="space-y-2 mt-4">
        {tasks.length === 0 ? (
          <p className="text-muted-foreground">No tasks yet.</p>
        ) : (
          tasks.map((task, idx) => <TaskCard key={idx} title={task} />)
        )}
      </div>
    </div>
  )
}
