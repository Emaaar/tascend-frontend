import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface Props {
  onAdd: (title: string) => void
}

export default function TaskForm({ onAdd }: Props) {
  const [title, setTitle] = useState("")

  const handleSubmit = () => {
    if (title.trim()) {
      onAdd(title)
      setTitle("")
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Task</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
        </DialogHeader>
        <Input
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button className="mt-2" onClick={handleSubmit}>
          Submit
        </Button>
      </DialogContent>
    </Dialog>
  )
}
