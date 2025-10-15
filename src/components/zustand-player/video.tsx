import { Loader2 } from "lucide-react"
import ReactPlayer from "react-player"
import { useAppDispatch, useAppSelector } from "../../store"
import { next, useCurrentLesson } from "../../store/slices/player"

export function Video() {
	const dispatch = useAppDispatch()
	const { currentLesson } = useCurrentLesson()
	const loading = useAppSelector(({ player }) => player.loading)

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
					onEnded={() => dispatch(next())}
				/>
			)}
		</div>
	)
}
