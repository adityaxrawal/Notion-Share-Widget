import React from 'react'
import Dropdown from '../mUi/Dropdown'
import JSONDATAPERSON from "../MockData/peopleMockData.json";
import '../PeopleList/PeopleList.css';

function PeopleList() {
  return (
    <div>
        <div className='PeopleContainer'>
            <div className='peopleDataContainer'>
           {JSONDATAPERSON.map((val, key) => {
            return (
              <div className="peopleData" key={key}>
                <img src={val.img} alt="avatar" className='avatar'/>
                <div className="peopleDetails">
                  <header>{val.name}</header>
                  <aside>{val.email}</aside>
                </div>
                <div className='peopleDropdown'><Dropdown/></div>
              </div>
            );
            })}
            </div>
        </div>
    </div>
  )
}

export default PeopleList