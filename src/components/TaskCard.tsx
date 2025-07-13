interface Props {
  title: string
}

export default function TaskCard({ title }: Props) {
  return (
    <div className="border p-4 rounded-md shadow-sm bg-white">
      <h3 className="font-medium">{title}</h3>
    </div>
  )
}
