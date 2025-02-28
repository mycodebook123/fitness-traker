import React, { useState, forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

import exStyle from "./Exdatestyle.module.css";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function ExDate() {
  const [startDate, setStartDate] = useState(new Date());

  console.log(startDate);
  const ComBtnDate = forwardRef(({ value, onClick }, ref) => (
    // <button  onClick={onClick} ref={ref} >
    //     <FontAwesomeIcon icon={faCaretRight} color="white" size="xl" />
    // </button>

    <div className={exStyle.dtpicker_con}>
      <button>
        <FontAwesomeIcon icon={faCaretLeft} color="#e0c031ef" size="xl" />
      </button>

      <div>
        <h3 style={{ margin: "0" }} onClick={onClick} ref={ref}>
          {value}
        </h3>
      </div>
      <button>
        <FontAwesomeIcon icon={faCaretRight} color="#e0c031ef" size="xl" />
      </button>
      <button onClick={onClick} ref={ref} className={exStyle.btncalender}>
        <FontAwesomeIcon icon={faCalendarDays} color="#e0c031ef" size="xl" />
      </button>
    </div>
  ));
  return (
    <div className={exStyle.ex_date_main_con}>
      <div>
        <h3 style={{ marginRight: "10px", width: "350px" }}>
          Your Exercise Diary of:
        </h3>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="MMMM dd, yyyy"
          customInput={<ComBtnDate />}
        />
      </div>
    </div>
  );
}
