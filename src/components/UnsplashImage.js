import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <Img src={selectedValue} alt="" />
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export const UnsplashImage = ({ url, key }) => {

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(url);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>Open Dialog</Button>
      <Img key={key} src={url} alt="" />
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  )
}
