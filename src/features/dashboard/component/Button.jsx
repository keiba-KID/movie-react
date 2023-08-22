import { Link } from "react-router-dom";
import { KanjiText } from "../../../components/Elements/CustomText";

export const LevelButton = ({ level }) => {
  return (
    <Link to={`/videos/${level}`} className="btn-level">
      <span>
        {level}{" "}
        {level === 1 ? "ねん" : <KanjiText title={"年"} pronun={"ねん"} />}
      </span>
    </Link>
  );
};
