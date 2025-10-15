import { Loader2 } from "lucide-react"
import ReactPlayer from "react-player"

import { useCurrentLesson, usePlayerStore } from "../../zustand-store"

export function Video() {
	const { currentLesson } = useCurrentLesson()

	const loading = usePlayerStore(({ loading }) => loading)
	const next = usePlayerStore(({ next }) => next)

	return (
		<div className="w-full bg-zinc-950 aspect-video flex">
			{loading ? (
				<Loader2 className="size-6 m-auto text-zinc-400 animate-spin" />
			) : (
				<ReactPlayer
					width="100%"
					height="100%"
					controls
					playing
					src={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
					onEnded={() => next()}
				/>
			)}
		</div>
	)
}
