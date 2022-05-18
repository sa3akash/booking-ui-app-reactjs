import { useState } from "react";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faBed,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOption, setOpenOption] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
  });

  const navigate = useNavigate()

  const hangleClick = (name,operation)=>{
    setOptions(prev=>{ 
        return{
        ...prev, [name] : operation === 'i' ? options[name]+1 : options[name]-1
    }})
  }
const hangleSearch = ()=> {
  navigate('/hotels', {state: {destination, date, options}})
}

  return (
    <div className="header">
      <div className={type === "list" ? 'headerContainer listMode' : 'headerContainer'}>
        <div className="headerLists">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        { type !== "list" &&
          <>
          <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
        <p className="headerDesc">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free SA2Booking.com account
        </p>
        <button className="headerButton">Sign in/Register</button>

        <div className="headerSearch">
          <div className="searchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="searchInput"
              onChange={e=>setDestination(e.target.value)}
              required
            />
          </div>
          <div className="searchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              className="headerSearchText"
              onClick={() => setOpenDate(!openDate)}>
            {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
              date[0].endDate,
              "dd/MM/yyyy"
            )}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
                className="dateComponent"
              />
            )}
          </div>
          <div className="searchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span className="headerSearchText" onClick={()=>setOpenOption(!openOption)}>
                {`${options.adult} Adult . ${options.children} Children . ${options.room} Room`}
            </span>
       { openOption && <div className="options">
                <div className="optionItem">
                    <div className="optionText">Adult</div>
                    <div className="counter">
                        <button className="optionCounterButton" disabled={options.adult <=1} onClick={()=> hangleClick("adult", "d")}>-</button>
                        <span>{options.adult}</span>
                        <button className="optionCounterButton" onClick={()=> hangleClick("adult", "i")}>+</button>
                    </div>
                </div>
                <div className="optionItem">
                    <div className="optionText">Children</div>
                    <div className="counter">
                        <button className="optionCounterButton" disabled={options.children <=0} onClick={()=> hangleClick("children", "d")}>-</button>
                        <span>{options.children}</span>
                        <button className="optionCounterButton" onClick={()=> hangleClick("children", "i")}>+</button>
                    </div>
                </div>
                <div className="optionItem">
                    <div className="optionText">Room</div>
                    <div className="counter">
                        <button className="optionCounterButton" disabled={options.room <=1} onClick={()=> hangleClick("room", "d")}>-</button>
                        <span>{options.room}</span>
                        <button className="optionCounterButton" onClick={()=> hangleClick("room", "i")}>+</button>
                    </div>
                </div>
            </div>}
          </div>
          <div className="searchItem">
            <button className="headerButton" onClick={hangleSearch}>Search</button>
          </div>
        </div>
          </>
        }
      </div>
    </div>
  );
};

export default Header;
