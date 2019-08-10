import React, { useState } from 'react';
import Select, { Option } from '@material/react-select';
import '@material/react-menu-surface/dist/menu-surface.css';
import '@material/react-menu/dist/menu.css';
import '@material/react-select/dist/select.css';

const FilterSelectors = () => {
  const [value, setValue] = useState('None');
  const onEnhancedChange = (index, item) => (
    setValue(item.getAttribute('data-value'))
  );
  return (
    <div>
      <Select
        className=""
        notchedOutlineClassName="pa1"
        enhanced
        outlined
        label="Chose"
        value={value}
        onEnhancedChange={onEnhancedChange}
      >
        <Option value="None">None</Option>
        <Option value="pomsky">Pomsky</Option>
        <Option value="goldenDoodle">Golden Doodle</Option>
      </Select>
    </div>
  );
};

export default FilterSelectors;
