export function StationDetailsOptionMenuContent({ onRemoveStation, onUpdateStationName }) {
    return <ul className="clean-list station-details-option-menu">
        <li className="station-details-option-menu-li" onClick={() => onUpdateStationName()}>
            <img src="./../../public/img/edit.svg" alt="" />
            <p>Edit station</p>
        </li>
        <li className="station-details-option-menu-li" onClick={() => onRemoveStation()}>
            <img src="./../../public/img/delete.svg" alt="" />
            <p>Remove station</p>
        </li>
    </ul>

}