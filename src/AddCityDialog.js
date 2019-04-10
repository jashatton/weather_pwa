import React, { useState } from 'react';

const DEFAULT_LOCATION = '4671654';

export const AddCityDialog = ({ show, onCityAdded, onCancel }) => {
  const [ selectedLocation, setSelectedLocation ] = useState(DEFAULT_LOCATION);

  const handleOnCitySelect = (event) => {
    console.log('selectedCity', event.target.value);
    setSelectedLocation(event.target.value);
  };

  const handleCityAdded = () => {
    onCityAdded(selectedLocation);
  };

  const handleCityAddedCancel = () => {
    onCancel();
  };

  return (
    <div className={show ? 'dialog-container--visible' : 'dialog-container'}>
      <div className="dialog">
        <div className="dialog-title">Add new city</div>
        <div className="dialog-body">
          <select id="selectCityToAdd" defaultValue={DEFAULT_LOCATION.locationKey} onChange={handleOnCitySelect}>
            <option value="4671654">Austin, TX</option>
            <option value="4930956">Boston, MA</option>
            <option value="4887398">Chicago, IL</option>
            <option value="5128581">New York, NY</option>
            <option value="4720131">Portland, OR</option>
            <option value="5391959">San Francisco, CA</option>
            <option value="5809844">Seattle, WA</option>
          </select>
        </div>
        <div className="dialog-buttons">
          <button id="butAddCity"
                  className="button"
                  onClick={handleCityAdded}>Add
          </button>
          <button id="butAddCancel"
                  className="button"
                  onClick={handleCityAddedCancel}>Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
