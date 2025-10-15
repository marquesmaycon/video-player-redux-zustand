import { useEffect } from "react"

import { usePlayerStore } from "../../zustand-store"
import { Module } from "./module"
import { Video } from "./video"

export function ZustandPlayer() {
	const modules = usePlayerStore(({ course }) => course?.modules)
	const load = usePlayerStore(({ load }) => load)

	useEffect(() => {
		load()
	}, [load])

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
