import { create } from "zustand"
import { courseMock } from "../data/course-mock"

type Course = {
	modules: Array<{
		id: string
		title: string
		lessons: Array<{ id: string; title: string; duration: string }>
	}>
}

export type PlayerState = {
	course: Course | null
	currentModuleIndex: number
	currentLessonIndex: number
	loading: boolean
	load: () => Promise<void>
	play: (indexes: [number, number]) => void
	next: () => void
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
	course: null,
	currentModuleIndex: 0,
	currentLessonIndex: 0,
	loading: false,
	load: async () => {
		set({ loading: true })

		// Simulando delay de API
		await new Promise((resolve) => setTimeout(resolve, 500))

		set({ course: courseMock, loading: false })
	},
	play: (indexes: [number, number]) => {
		set({
			currentModuleIndex: indexes[0],
			currentLessonIndex: indexes[1],
		})
	},
	next: () => {
		const { currentModuleIndex, currentLessonIndex, course } = get()

		const nextLessonIndex = currentLessonIndex + 1
		const nextLesson =
			course?.modules[currentModuleIndex].lessons[nextLessonIndex]

		if (nextLesson) {
			set({ currentLessonIndex: nextLessonIndex })
		} else {
			const nextModuleIndex = currentModuleIndex + 1
			const nextModule = course?.modules[nextModuleIndex]

			if (nextModule) {
				set({
					currentModuleIndex: nextModuleIndex,
					currentLessonIndex: 0,
				})
			}
		}
	},
}))

export const useCurrentLesson = () => {
	const currentModuleIndex = usePlayerStore((state) => state.currentModuleIndex)
	const currentLessonIndex = usePlayerStore((state) => state.currentLessonIndex)
	const course = usePlayerStore((state) => state.course)

	const currentModule = course?.modules[currentModuleIndex]
	const currentLesson = currentModule?.lessons[currentLessonIndex]

	return { currentModule, currentLesson }
}