import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavouriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import './SwipeButton.css';

function SwipeButton() {
    return (
        <div className="swipeButtons">
        <IconButton>
            <ReplayIcon fontSize="large" className="replay"/>
            </IconButton>
            <IconButton>
            <CloseIcon fontSize="large" className="close" /></IconButton>
        <IconButton>
            <StarRateIcon fontSize="large" className="star" /></IconButton>
            <IconButton>
            <FavouriteIcon fontSize="large" className="favorite" /></IconButton>
        <IconButton>
            <FlashOnIcon fontSize="large" className="flash" /></IconButton>
            
        </div>
    )
}

export default SwipeButton
