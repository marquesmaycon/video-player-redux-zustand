import { beforeEach, describe, expect, it } from "vitest"

import { usePlayerStore as playerStore } from "."

const course = {
	id: "1",
	modules: [
		{
			id: "1",
			title: "Iniciando com React",
			lessons: [
				{ id: "Jai8w6K_GnY", title: "CSS Modules", duration: "13:45" },
				{ id: "w-DW4DhDfcw", title: "Estilização do Post", duration: "10:05" },
			],
		},
		{
			id: "2",
			title: "Estrutura da aplicação",
			lessons: [
				{ id: "gE48FQXRZ_o", title: "Componente: Comment", duration: "13:45" },
				{ id: "Ng_Vk4tBl0g", title: "Responsividade", duration: "10:05" },
			],
		},
	],
}

const initialState = playerStore.getState()

describe("zustand store", () => {
	beforeEach(() => {
		playerStore.setState({ ...initialState, course }, true)
	})

	it("should be able to play", () => {
		const { play } = playerStore.getState()

		play([1, 2])

		const { currentModuleIndex, currentLessonIndex } = playerStore.getState()

		expect(currentModuleIndex).toEqual(1)
		expect(currentLessonIndex).toEqual(2)
	})

	it("should be able to play next lesson automatically", () => {
		const { next } = playerStore.getState()

		next()

		const { currentModuleIndex, currentLessonIndex } = playerStore.getState()

		expect(currentModuleIndex).toEqual(0)
		expect(currentLessonIndex).toEqual(1)
	})

	it("should be able to play next module automatically", () => {
		const { next } = playerStore.getState()

		playerStore.setState({ currentLessonIndex: 1 })
		next()

		const { currentModuleIndex, currentLessonIndex } = playerStore.getState()

		expect(currentModuleIndex).toEqual(1)
		expect(currentLessonIndex).toEqual(0)
	})

	it("should not update module or lesson if there is no next lesson", () => {
		const { next } = playerStore.getState()

		playerStore.setState({ currentModuleIndex: 1, currentLessonIndex: 1 })
		next()

		const { currentModuleIndex, currentLessonIndex } = playerStore.getState()

		expect(currentModuleIndex).toEqual(1)
		expect(currentLessonIndex).toEqual(1)
	})
})
