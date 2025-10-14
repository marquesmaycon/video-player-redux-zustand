import { describe, expect, it } from "vitest"

import { next, play, player, playerSlice } from "./player"

describe("player slice", () => {
	const initialState = playerSlice.getInitialState()

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
		const lastModuleIndex = initialState.course?.modules.length ?? 0 - 1
		const lastLessonIndex =
			initialState.course?.modules[lastModuleIndex].lessons.length ?? 0 - 1
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
