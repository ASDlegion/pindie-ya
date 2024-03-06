import { getGamesByCategory } from "../data/data-utils"
import { CardList } from "../components/CardsList/CardsList"


export default function Runner() {
  const runnerGames = getGamesByCategory("runner")

  return (
    <main className={"main-inner"}>
      <CardList id="runner" title="Ранеры" data={runnerGames} / >
    </main>
  )
}