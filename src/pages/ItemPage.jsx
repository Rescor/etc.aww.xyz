import { useParams } from "react-router-dom";
import LanguageSelector from "../components/LanguageSelector/LanguageSelector";
import ItemPageInfo from "../components/ItemPageInfo/ItemPageInfo";

export default function ItemPage(props) {
  const { item } = useParams();

  return <>
    <LanguageSelector position={"bottom"} />
    <ItemPageInfo item={props.items[item]} />
  </>
}
