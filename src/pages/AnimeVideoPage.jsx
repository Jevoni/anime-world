import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useGetRequestQuery, useGetAnimeDetailsQuery } from '../services/animeApi'

import Header from '../layout/Header'
import AnimeSidebar from '../layout/AnimeSidebar'
import GenreSidebar from '../layout/GenreSidebar'
import Footer from '../layout/Footer'
import VideoPlayer from '../layout/VideoPlayer'
import EpisodesBody from '../layout/EpisodesBody'

const AnimeVideoPage = () => {
    const episodeId = useParams()
    useGetRequestQuery(episodeId)

    const animeId = (episodeId.episodeId.split('-episode'))[0]
    const { data, isFetching } = useGetAnimeDetailsQuery(animeId)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: { xs: '0px', sm: '5px', md: '10px', lg: '15px' },
            width: '100%'
        }}>
            <Header isHome={false} />
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' },
                marginTop: '20px',
                padding: '15px',
            }}
            >
                <AnimeSidebar />
                <Box
                    padding='5px'
                    width='100%'
                    display='flex'
                    flexDirection='column'
                >
                    <VideoPlayer anime={data} />
                    <EpisodesBody episodes={data?.episodesList} />
                </Box>
                <GenreSidebar />
            </Box>
            <Footer />
        </Box>
    )
}

export default AnimeVideoPage