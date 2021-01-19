import React from 'react';

function RadioButton (item) {
  return (
    <div>
      {Object.keys(item.item.items).length === 3 
        ? 
        <div>
          <div className="radio">
            <h3> {item.strings.en.s1}</h3>
            <label>
              <input
                type="radio"
                value={item.strings.en.s2}
                checked={item.strings.en.s10 === "Yes"}
                onChange={item.onCovidValueChange}
              />
              {item.strings.en.s2}
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value={item.strings.en.s3}
                checked ={item.strings.en.s10 === "No"}
                onChange={item.onCovidValueChange}
              />
              {item.strings.en.s3}
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value={item.strings.en.s4}
                checked ={item.strings.en.s10 === "Not sure"}
                onChange={item.onCovidValueChange}
              />
              {item.strings.en.s4}
            </label>
          </div>
        </div>
        :
         <div>
          <div className="radio">
            <h3>  {item.strings.en.s5}</h3>
            <label>
              <input
                type="radio"
                value={item.strings.en.s6}
                checked ={item.strings.en.s11 === "Yes"}
                onChange={item.onTraveledValueChange}
              />
              {item.strings.en.s6}
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value={item.strings.en.s7}
                checked ={item.strings.en.s11 === "No"}
                onChange={item.onTraveledValueChange}
              />
              {item.strings.en.s7}
            </label>
          </div>
        </div>
      }
    </div>
  )
}

export default (RadioButton);