import {
	createAsyncThunk,
	createSlice,
	type PayloadAction,
} from "@reduxjs/toolkit"

import { api } from "../../lib/axios"
import { useAppSelector } from ".."

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
	}	

const initialState: PlayerState = {
	course: null,
	currentModuleIndex: 0,
	currentLessonIndex: 0,
	loading: true,
}

export const loadCourse = createAsyncThunk("player/load", async () => {
	const { data } = await api.get<PlayerState["course"]>("/course")
	return data
})

export const playerSlice = createSlice({
	name: "player",
	initialState: initialState,
	reducers: {
		play: (state, action: PayloadAction<[number, number]>) => {
			state.currentModuleIndex = action.payload[0]
			state.currentLessonIndex = action.payload[1]
		},
		next: (state) => {
			const nextLessonIndex = state.currentLessonIndex + 1
			const nextLesson =
				state.course?.modules[state.currentModuleIndex].lessons[nextLessonIndex]

			if (nextLesson) {
				state.currentLessonIndex = nextLessonIndex
			} else {
				const nextModuleIndex = state.currentModuleIndex + 1
				const nextModule = state.course?.modules[nextModuleIndex]

				if (nextModule) {
					state.currentModuleIndex = nextModuleIndex
					state.currentLessonIndex = 0
				}
			}
		},
	},
	extraReducers: (builder) => {
		builder.addCase(loadCourse.pending, (state) => {
			state.loading = true
		})
		builder.addCase(loadCourse.fulfilled, (state, action) => {
			state.course = action.payload
			state.loading = false
		})
	},
})

export const player = playerSlice.reducer
export const { play, next } = playerSlice.actions

export const useCurrentLesson = () => {
	return useAppSelector(({ player }) => {
		const { currentModuleIndex, currentLessonIndex } = player
		const currentModule = player.course?.modules[currentModuleIndex]
		const currentLesson = currentModule?.lessons[currentLessonIndex]
		return { currentModule, currentLesson }
	})
}
