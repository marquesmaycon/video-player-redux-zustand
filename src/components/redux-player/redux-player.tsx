import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "../../store"
import { loadCourse, useCurrentLesson } from "../../store/slices/player"
import { Module } from "./module"
import { Video } from "./video"

export function ReduxPlayer() {
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
		<>
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
		</>
	)
}
