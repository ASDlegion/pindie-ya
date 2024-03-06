import { getGamesByCategory } from "../data/data-utils"
import { CardList } from "../components/CardsList/CardsList"


export default function Pixel() {
  const pixelGames = getGamesByCategory("pixel")

  return (
    <main className={"main-inner"}>
      <CardList id="pixel" title="Пиксели" data={pixelGames} / >
    </main>
  )
}