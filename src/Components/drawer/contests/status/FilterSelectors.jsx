import React, { useState } from 'react';
import Dialog, {
  DialogTitle,
  DialogContent,
} from '@material/react-dialog';
import MaterialIcon from '@material/react-material-icon';
import Fab from '@material/react-fab';
import '@material/react-fab/dist/fab.css';
import '@material/react-dialog/dist/dialog.css';
import '@material/react-menu-surface/dist/menu-surface.css';
import '@material/react-menu/dist/menu.css';
import '@material/react-select/dist/select.css';
import FilterDialog from './FilterDialog';


const FilterSelectors = () => {
  const [isOpen, setOpen] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  const screenSize = width < 840;

  window.addEventListener('resize', () => { setWidth(window.innerWidth); });

  if (screenSize) {
    return (
      <div>
        <Fab
          style={{
            backgroundColor: '#6200EE', position: 'fixed', right: '2rem', bottom: '2rem',
          }}
          icon={(<MaterialIcon icon="filter_list" />)}
          onClick={() => { setOpen(!isOpen); }}
        />
        <Dialog open={isOpen}>
          <DialogTitle>Filter</DialogTitle>
          <DialogContent>
            <FilterDialog isOpen={isOpen} setOpen={setOpen} />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
  return (
    <FilterDialog setOpen={() => {}} />
  );
};

export default FilterSelectors;
