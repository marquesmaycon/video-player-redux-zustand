import { MessageCircle } from "lucide-react"

import { Header } from "./header"
import { Module } from "./module"
import { Video } from "./video"

export function Player() {
	return (
		<div className="flex items-center justify-center h-screen">
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

				<main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
					<div className="flex-1">
						<Video />
					</div>

					<aside className="w-80 absolute top-0 divide-y-2 divide-zinc-900 bottom-0 right-0 border-l border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
						<Module
							title="Desvendando o Redux"
							amountOfLessons={12}
							moduleIndex={0}
						/>
						<Module
							title="Desvendando o Redux"
							amountOfLessons={12}
							moduleIndex={1}
						/>
						<Module
							title="Desvendando o Redux"
							amountOfLessons={12}
							moduleIndex={2}
						/>
						<Module
							title="Desvendando o Redux"
							amountOfLessons={12}
							moduleIndex={3}
						/>
					</aside>
				</main>
			</div>
		</div>
	)
}
