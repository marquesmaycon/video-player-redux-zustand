import { MessageCircle } from "lucide-react"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../store"

import { loadCourse, useCurrentLesson } from "../store/slices/player"
import { Header } from "./header"
import { Module } from "./module"
import { Video } from "./video"

export function Player() {
	const dispatch = useAppDispatch()
	const modules = useAppSelector(({ player }) => player.course?.modules)
	const { currentLesson } = useCurrentLesson()

	useEffect(() => {
		dispatch(loadCourse())
	}, [dispatch])

	useEffect(() => {
		if (currentLesson) {
			document.title = `Assistindo: ${currentLesson.title}`
		}
	}, [currentLesson])

	return (
		<div className="flex items-center justify-center h-screen px-4">
			<div className="flex w-5xl flex-col gap-6">
				<div className="flex items-center justify-between">
					<Header />
					<button
						type="button"
						className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600 transition-colors"
					>
						<MessageCircle className="size-4" />
						Deixar Feedback
					</button>
				</div>

				<main className="relative flex flex-col lg:flex-row overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
					<div className="flex-1 flex">
						<Video />
					</div>

					<aside className="max-h-[405px] divide-y-2 divide-zinc-900 border-l border-zinc-800 bg-zinc-900 overflow-y-scroll">
						{modules?.map(({ id, title, lessons }, index) => (
							<Module
								key={id}
								title={title}
								amountOfLessons={lessons.length}
								moduleIndex={index}
							/>
						))}
					</aside>
				</main>
			</div>
		</div>
	)
}
