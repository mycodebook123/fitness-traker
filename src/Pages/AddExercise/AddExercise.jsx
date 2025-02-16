import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { json, useSearchParams } from "react-router-dom";
import exStyle from "./AddExercise.module.css";
import { addExerciseThunkActionCreator } from "../../Redux/action";
import { saveNotesThunkActionCreator } from "../../Redux/action";
import { useNavigate } from "react-router-dom";
import ExCardDet from "./ExCardDet";
import ExStrengthDet from "./ExStrengthDet";
import exercises from "./exercises.json"; 

export default function AddExercise() {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [exDetails, setDetails] = useState({});

  useEffect(() => {
    if (type) {
      setSearchResult(exercises[type]);
    }
  }, [type]);

  const searchExercise = () => {
    const results = exercises[type].filter((exercise) =>
      exercise.title.toLowerCase().includes(title.toLowerCase())
    );
    setSearchResult(results);
  };

  return (
    <div style={{ textAlign: "left", width: "60%", margin: "auto" }}>
      <br />
      <h2 style={{ color: "black", margin: "0" }}>Add {type} Exercise</h2>
      <br />
      <hr />
      <br />
      <div>
        <div>
          <h4 style={{ color: "black", margin: "0" }}>
            Search our exercise database by name:
          </h4>
          <div>
            <input
              className={exStyle.exs_sr_input}
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <button onClick={searchExercise} className={exStyle.exs_button}>
              Search
            </button>
          </div>
        </div>
        <div>
          <h4 style={{ color: "black", margin: "0" }}>Matching Exercises:</h4>
          <br />
          <div className={exStyle.exs_res_con}>
            <div className={exStyle.exs_result_div}>
              <ul>
                {searchResult && searchResult.length > 0 ? (
                  searchResult.map((el) => (
                    <li onClick={() => setDetails(el)} key={el.title}>
                      {el.title}
                    </li>
                  ))
                ) : (
                  <div className={exStyle.loadercontainer}>
                    <h2>No Results Found</h2>
                  </div>
                )}
              </ul>
            </div>
            {searchResult && searchResult.length > 0 && (
              type === "cardio" ? (
                <ExCardDet searchResult={exDetails} />
              ) : (
                <ExStrengthDet searchResult={exDetails} />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
