import { getGamesByCategory } from "../data/data-utils"
import { CardList } from "../components/CardsList/CardsList"


export default function TDS() {
  const tdsGames = getGamesByCategory("new")

  return (
    <main className={"main-inner"}>
      <CardList id="tds" title="TDS" data={tdsGames} / >
    </main>
  )
}