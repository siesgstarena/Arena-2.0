import React, { useState, useContext } from 'react';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Popover,
  Switch,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material/react-button';
import { Grid } from '@material/react-layout-grid';
import MaterialIcon from '@material/react-material-icon';
import * as ace from 'ace-builds/src-noconflict/ace';
import themes from '../defaults/themes';
import AceEditorContext from '../../../Contexts/AceEditorContext';

ace.config.set('basePath', '/assets/ui/');
ace.config.set('modePath', '');
ace.config.set('themePath', '');
const Menu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { editorConfig, setEditorConfig } = useContext(AceEditorContext);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      {/* <FormGroup> */}

      {/* </FormGroup> */}
      <Button
        raised
        aria-describedby={id}
        onClick={handleClick}
        style={{ marginRight: '1rem', marginLeft: '1rem', marginTop: '0.5rem' }}
      >
        <MaterialIcon icon="settings" />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Grid cellSpacing={2}>
          <Grid xs={6} md={8}>
            <InputLabel id="select-theme-label">Select Theme</InputLabel>
            <Select
              id="select-theme"
              labelId="select-theme-label"
              fullWidth
              value={editorConfig.theme}
              onChange={(e) => {
                setEditorConfig({
                  ...editorConfig,
                  theme: e.target.value,
                });
              }}
              MenuProps={{
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
                transformOrigin: {
                  vertical: 'top',
                  horizontal: 'left',
                },
                getContentAnchorEl: null,
              }}
            >
              {themes.available.map((singleTheme) => {
                // eslint-disable-next-line import/no-dynamic-require, global-require
                require(`ace-builds/src-noconflict/theme-${singleTheme.value}`);
                return (
                  <MenuItem key={singleTheme.value} value={singleTheme.value}>
                    {singleTheme.name}
                  </MenuItem>
                );
              })}
            </Select>
          </Grid>
          <Grid xs={6} md={8}>
            <TextField
              value={editorConfig.fontSize}
              type="number"
              label="Font Size"
              variant="outlined"
              InputProps={{
                style: {
                  height: '3rem',
                },
              }}
              onChange={(e) => {
                setEditorConfig({
                  ...editorConfig,
                  fontSize: parseInt(e.target.value, 10),
                });
              }}
              required
            />
          </Grid>
          <Grid xs={6} md={8}>
            <TextField
              type="number"
              label="Tab Size"
              variant="outlined"
              InputProps={{
                style: {
                  height: '3rem',
                },
              }}
              required
              value={editorConfig.tabSize}
              onChange={(e) => {
                setEditorConfig({
                  ...editorConfig,
                  tabSize: parseInt(e.target.value, 10),
                });
              }}
            />
          </Grid>
          <Grid xs={6} md={8}>
            <FormControlLabel
              control={<Switch color="primary" />}
              label="Intellisense"
              value={editorConfig.enableLiveAutocompletion}
              onChange={(e) =>
                setEditorConfig({
                  ...editorConfig,
                  enableLiveAutocompletion: e.target.checked,
                })
              }
            />
          </Grid>
          <Grid xs={6} md={8}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={editorConfig.wrapEnabled} />}
                label="Soft Wrap"
                onChange={(e) => {
                  setEditorConfig({
                    ...editorConfig,
                    wrapEnabled: e.target.checked,
                  });
                }}
              />
            </FormGroup>
          </Grid>
          <Grid xs={6} md={8}>
            <Button raised>Share</Button>
          </Grid>
        </Grid>
      </Popover>
    </>
  );
};

export default Menu;
