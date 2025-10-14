import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@radix-ui/react-collapsible"
import { ChevronDown } from "lucide-react"

import { Lesson } from "./lesson"

type ModuleProps = {
	title: string
	amountOfLessons: number
	moduleIndex: number
}

export function Module({ title, amountOfLessons, moduleIndex }: ModuleProps) {
	return (
		<Collapsible className="group">
			<CollapsibleTrigger
				type="button"
				className="w-full flex items-center gap-3 bg-zinc-800 p-4"
			>
				<div className="flex size-10 rounded-full items-center justify-center bg-zinc-950 text-sm">
					{moduleIndex + 1}
				</div>
				<div className="flex flex-col gap-1 text-left">
					<strong>{title}</strong>
					<div className="text-xs text-zinc-400">{amountOfLessons} aulas</div>
				</div>
				<ChevronDown className="size-6 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
			</CollapsibleTrigger>

			<CollapsibleContent asChild>
				<nav className="relative flex flex-col gap-4 p-6">
					<Lesson title="Fundamentos" duration="06:56" />
					<Lesson title="Fundamentos" duration="06:56" />
					<Lesson title="Fundamentos" duration="06:56" />
					<Lesson title="Fundamentos" duration="06:56" />
				</nav>
			</CollapsibleContent>
		</Collapsible>
	)
}
