import { PlayCircle, Video } from "lucide-react"

type LessonProps = {
	title: string
	duration: string
	active: boolean
	onPlay: () => void
}

export function Lesson({ title, duration, active, onPlay }: LessonProps) {
	const Icon = active ? PlayCircle : Video
	return (
		<button
			type="button"
			className="group flex items-center gap-4 text-sm text-zinc-400 hover:text-zinc-100 data-[active=true]:text-emerald-400 transition-colors"
			onClick={onPlay}
			data-active={active}
		>
			<Icon className="size-4 text-zinc-500 group-data-[active=true]:text-emerald-400" />
			<span>{title}</span>
			<span className="ml-auto font-mono text-xs text-zinc-500">
				{duration}
			</span>
		</button>
	)
}
