import './list.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'

const List = () => {
  const [openDate, setOpenDate] = useState(false)
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)


  const hangleSearch = () =>{
  
  }
  return (
    <>
    <Navbar/>
    <Header type="list"/>

   <div className="listContainer">
     <div className="listWrapper">
       <div className="listSearch">
         <h1 className="lsTitle">Search</h1>
         <div className="lsItem">
           <label>Destination/property name:</label>
           <div className="inputBox">
             <FontAwesomeIcon icon={faSearch} />
             <input type="text" placeholder={destination} onChange={e=>setDestination(e.target.value)}/>
           </div>
         </div>
         <div className="lsItem">
           <label>Check-in date</label>
           <div className="inputBox dateOpen">
             <FontAwesomeIcon icon={faCalendar} />
             <span onClick={()=> setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
              date[0].endDate,
              "dd/MM/yyyy"
            )}`}</span>
           {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
                className="dateComponent2"
              />
            )}
           </div>
         </div>
         <div className="lsItem">
           <label>Options</label>
           <div className="optionBox">
            <div className="optionItem">
              <span>Min price (per night)</span>
              <input type="number" />
            </div>
            <div className="optionItem">
              <span>Max price (per night)</span>
              <input type="number" />
            </div>
            <div className="optionItem">
              <span>Adult</span>
              <input type="number" min={1} placeholder={options.adult}/>
            </div>
            <div className="optionItem">
              <span>Children</span>
              <input type="number" min={0} placeholder={options.children}/>
            </div>
            <div className="optionItem">
              <span>Room</span>
              <input type="number" min={1} placeholder={options.room}/>
            </div>
           </div>
           <button className='searchBoxButton' onClick={hangleSearch}>Search</button>
         </div>
       </div>

{/* Search item  */}
       <div className="listResult">
         <SearchItem />
         <SearchItem />
         <SearchItem />
         <SearchItem />
         <SearchItem />
         <SearchItem />
         <SearchItem />
         <SearchItem />
         <SearchItem />
         <SearchItem />
         <SearchItem />
         <SearchItem />
         
       </div>
     </div>
   </div>
    
    </>
  )
}

export default List
