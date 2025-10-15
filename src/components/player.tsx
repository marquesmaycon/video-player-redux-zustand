import { useState } from "react"

import reduxIcon from "../assets/redux.svg"
import zustandIcon from "../assets/zustand.svg"
import { Header } from "./redux-player/header"
import { ReduxPlayer } from "./redux-player/redux-player"
import { ZustandPlayer } from "./zustand-player/zustand-player"

type PlayerLib = "redux" | "zustand"

export function Player() {
	const [player, setPlayer] = useState<PlayerLib>("zustand")

	const srcIcon = player === "zustand" ? reduxIcon : zustandIcon

	return (
		<div className="flex items-center justify-center h-screen px-4">
			<div className="flex w-5xl flex-col gap-6">
				<div className="flex items-center justify-between">
					<Header />
					<button
						type="button"
						className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600 transition-colors"
						onClick={() =>
							setPlayer((p) => (p === "redux" ? "zustand" : "redux"))
						}
					>
						<img src={srcIcon} alt={player} className="h-8 w-8" />
						Trocar para {player === "redux" ? "Zustand" : "Redux"}
					</button>
				</div>

				<main className="relative flex flex-col lg:flex-row overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
					{player === "redux" ? <ReduxPlayer /> : <ZustandPlayer />}
				</main>
			</div>
		</div>
	)
}
