import React, { useEffect, useRef } from 'react'
import { StationList } from '../cmps/StationList.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { loadUsers } from "./../store/user.actions.js"
import { setCurrSong } from '../store/player.actions.js'


export function HomePage() {
    // const dispatch = useDispatch()
    const stations = useSelector(storeState => storeState.stationModule.stations)
    const currColor = useSelector(storeState => storeState.colorModule.currColor)
    const currUser = useSelector(storeState => storeState.userModule.user)

    let time = new Date().getHours()
    const greeting = (time > 18) ? 'Good Evening' : (time > 12) ? 'Good Afternoon' : 'Good Morning'
    useEffect(() => {
        loadUsers()
        console.log(currUser)
    }, [])
    return (
        <section className='homepage' style={{
            background: `linear-gradient(
            0deg,
            rgba(0, 0, 0, 1) 40%,
            rgba(${currColor}, 1) 100%
          )` }}>
            <h1>{greeting}</h1>
            <div className='top-station-list'>
                <StationList stations={stations.slice(0, 6)} isHome={true} isHideBodyContainer={true} />
            </div>
            {currUser && <>
                <h2>Made for
                    <span> {currUser?.fullName}</span>
                </h2>
                <div className='bottom-station-list'>
                    <StationList stations={stations.filter((station) => station.name.toLowerCase().includes('daily mix'))} isHome={true} isHideBodyContainer={false} />
                </div>
            </>}
            <h2>Your Top Mixes</h2>
            <div className='bottom-station-list'>
                <StationList stations={stations.slice(7, 12)} isHome={true} isHideBodyContainer={false} />
            </div>
            <h2>Songify Playlists</h2>
            <div className='bottom-station-list'>
                <StationList stations={stations.slice(12, 17)} isHome={true} isHideBodyContainer={false} />
            </div>
        </section >
    )
}