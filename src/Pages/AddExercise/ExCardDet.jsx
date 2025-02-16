import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import exStyle from "./AddExercise.module.css";
import { addExerciseThunkActionCreator } from "../../Redux/action";

export default function ExCardDet({ searchResult }) {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [lsCardio, setLsCardio] = useState([]);
  const [minutes, setMinutes] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(0);

  useEffect(() => {
    setLsCardio(JSON.parse(localStorage.getItem("cardio")) || []);
  }, []);

  useEffect(() => {
    if (searchResult.calories_per_minute && minutes) {
      setCaloriesBurned(searchResult.calories_per_minute * minutes);
    }
  }, [minutes, searchResult]);

  const addExercise = () => {
    if (searchResult.title) {
      const updatedExercise = { ...searchResult, minutes, calories_burned: caloriesBurned };
      dispatch(addExerciseThunkActionCreator(type, updatedExercise));
      localStorage.setItem("cardio", JSON.stringify([...lsCardio, updatedExercise]));
      navigate("/exercise");
    } else {
      alert("Select any exercise");
    }
  };

  return (
    <div className={exStyle.exs_res_det_con}>
      <h4>Adding:</h4>
      <h5>{searchResult.title}</h5>
      <div>
        <h4>How long? (minutes)</h4>
        &nbsp;
        <input 
          value={minutes} 
          type="number" 
          onChange={(e) => setMinutes(e.target.value)} 
        />
      </div>
      <div>
        <h4>Calories Burned: </h4>
        &nbsp;
        <input 
          value={caloriesBurned} 
          type="number"
          readOnly
        />
      </div>
      <p>
        The calories burned will be calculated automatically based on the exercise and duration you enter.
      </p>
      <button onClick={addExercise} className={exStyle.exs_button}>
        Add Exercise
      </button>
    </div>
  );
}
