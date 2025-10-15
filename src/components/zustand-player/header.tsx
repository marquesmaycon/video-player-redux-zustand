import { useAppSelector } from "../../store"
import { useCurrentLesson } from "../../store/slices/player"

export function Header() {
	const { currentModule, currentLesson } = useCurrentLesson()
	const loading = useAppSelector(({ player }) => player.loading)

	if (loading) {
		return <h3 className="text-2xl font-bold mb-6">Carregando...</h3>
	}
	
	return (
		<div className="flex flex-col gap-1">
			<h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
			<span className="text-sm text-zinc-400">
				Módulo {currentModule?.title}
			</span>
		</div>
	)
}
