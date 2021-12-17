import React from 'react';
import Select from 'react-select'

import "../SelectOption/SelectOption.css";

const SelectOption = () => {

    const options = [
        { value: 'Action', label: 'Action' },
        { value: 'Animation', label: 'Animation' },
        { value: 'Comedy', label: 'Comedy' },
        { value: 'Crime', label: 'Crime' },
        { value: 'Drama', label: 'Drama' },
        { value: 'Fantasy', label: 'Fantasy' },
        { value: 'Historical', label: 'Historical' },
        { value: 'Horror', label: 'Horror' },
        { value: 'Romance', label: 'Romance' },
        { value: 'Science-fiction', label: 'Science-fiction' },
        { value: 'Thriller', label: 'Thriller' },
        { value: 'Western', label: 'Western' },
        { value: 'Thriller', label: 'Thriller' },
        { value: 'Other', label: 'Other' },
      ];


    return(
        <Select
        defaultValue
        isMulti
        name="ganre"
        options={options}
        className="basic-multi-select"
        classNamePrefix="Select genre"
      />
    )
    
}

export default SelectOption;