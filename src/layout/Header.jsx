import React from 'react'
import { Box } from '@mui/material'

import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import AnimeLogo from '../components/APLogo'

const Header = ({ isHome, isGenre }) => {
    return (
        <Box>
            <AnimeLogo />
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: { xs: 'column', sm: 'column', md: 'row' }
            }}
            >
                <Navbar isHome={isHome} isGenre={isGenre} />
                <Searchbar />
            </Box>
        </Box>
    )
}

export default Header