import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';
import React from 'react';

export default function CircularProgressDeterminate({ currentSlide, totalSlides }) {
  // Calculate the progress based on the current slide
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
      <CircularProgress determinate value={progress} size="72px" />
    </Box>
  );
}
