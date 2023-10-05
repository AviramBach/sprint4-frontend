import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addStation, loadStations, removeStation, updateStation } from '../store/station.actions.js'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { StationList } from "./StationList"
import { stationService } from '../services/station.service.js'
import { LibraryFilter } from './LibraryFilter.jsx'
import { SET_FILTER_BY } from '../store/station.reducer.js'
import { useNavigate } from 'react-router'

export function Library() {
    const dispatch = useDispatch()
    const filterBy = useSelector(storeState => storeState.stationModule.filterBy)
    const stations = useSelector(storeState => storeState.stationModule.stations)
    const navigate = useNavigate()
    useEffect(() => {
        loadStations()
    }, [filterBy])

    async function onAddStation() {
        const station = stationService.getEmptyStation()
        // station.name = prompt('Playlist name?')
        station.createdAt = Date.now()
        station.createdBy = 'Me'
        try {
            const savedStation = await addStation(station)
            navigate(`/station-details/${savedStation._id}`)
            showSuccessMsg(`Station added (id: ${savedStation._id})`)
        } catch (err) {
            showErrorMsg('Cannot add station')
        }

    }
    function onSetFilter(filterBy) {
        dispatch({ type: SET_FILTER_BY, filterBy })
        // console.log(filterBy)
    }

    return <section className='library'>
        <div className='library-header'>
            <div>
                <img className='library-icon' src="public/img/spotify android icons 24px (Community)/Your Playlist.png" alt="" />
                <h1>Your Library</h1>
            </div>
            <button onClick={onAddStation}>
                <img className='add-icon' src="public/img/spotify android icons 24px (Community)/Add Icon.png" alt="" />
            </button>
        </div>
        <LibraryFilter filterBy={filterBy} onSetFilter={onSetFilter} />
        <StationList stations={stations} />
    </section>
}