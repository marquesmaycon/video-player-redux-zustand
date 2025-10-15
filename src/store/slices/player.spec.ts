import { describe, expect, it } from "vitest"

import { next, play, player, playerSlice } from "./player"

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

const initialState = {
	...playerSlice.getInitialState(),
	course,
}

describe("player slice", () => {
	it("should be able to play a lesson", () => {
		const state = player(initialState, play([1, 2]))

		expect(state.currentModuleIndex).toEqual(1)
		expect(state.currentLessonIndex).toEqual(2)
	})

	it("should be able to play next lesson automatically", () => {
		const state = player(initialState, next())

		expect(state.currentModuleIndex).toEqual(0)
		expect(state.currentLessonIndex).toEqual(1)
	})

	it("should be able to play next module automatically", () => {
		const state = player(
			{
				...initialState,
				currentLessonIndex:
					initialState.course?.modules[0].lessons.length ?? 0 - 1,
			},
			next(),
		)

		expect(state.currentModuleIndex).toEqual(1)
		expect(state.currentLessonIndex).toEqual(0)
	})

	it("should not update module or lesson if there is no next lesson", () => {
		const lastModuleIndex = (initialState.course?.modules.length ?? 0) - 1
		const lastLessonIndex =
			(initialState.course?.modules[lastModuleIndex].lessons.length ?? 0) - 1
		const state = player(
			{
				...initialState,
				currentModuleIndex: lastModuleIndex,
				currentLessonIndex: lastLessonIndex,
			},
			next(),
		)

		expect(state.currentModuleIndex).toEqual(lastModuleIndex)
		expect(state.currentLessonIndex).toEqual(lastLessonIndex)
	})
})
