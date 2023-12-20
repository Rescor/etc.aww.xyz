import LanguageSelector from "../components/LanguageSelector/LanguageSelector";
import NavLine from "../components/Navigation/NavLine/NavLine";
import ItemTiles from "../components/ItemTIles/ItemTiles.jsx";

export default function MainPage(props) {
  const sortedItems = Object.values(props.items)
    .sort((a, b) => a.id - b.id);

  return <>
    <LanguageSelector position={"top"} />
    <NavLine page="main" />
    <ItemTiles items={sortedItems} />
  </>
}
