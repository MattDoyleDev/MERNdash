import { 
    Typography,
    Box,
    useTheme 
} from "@mui/material";

import React from 'react'

const Header = ({ title, subtitle }) => {
    const theme = useTheme();

  return (
    <Box>
        <Typography
            variant="h2"
            color={theme.palette.secondary[100]}
            fontWeight="bold"
            sx={{ mb: "5px" }}
        >
            {title} Poop 1 inside Header.jsx
        </Typography>
        <Typography
            variant="h5"
            color={theme.palette.secondary[300]}
        >
            {subtitle} Poop 2 inside Header.jsx
        </Typography>
    </Box>
  )
}

export default Header