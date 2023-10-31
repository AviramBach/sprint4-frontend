import { userService } from '../services/user.service.js'
export const SET_USER = 'SET_USER'
export const SET_WATCHED_USER = 'SET_WATCHED_USER'
export const SET_USERS = 'SET_USERS'
export const SET_LIKED_SONG = 'SET_LIKED_SONG'

const initialState = {
    count: 10,
    user: userService.getLoggedinUser(),
    users: [],
    watchedUser: null
}

export function userReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case SET_USER:
            newState = { ...state, user: action.user }
            break
        case SET_WATCHED_USER:
            newState = { ...state, watchedUser: action.user }
            break
        case SET_USERS:
            newState = { ...state, users: action.users }
            break
        case SET_LIKED_SONG:
            newState = { ...state, user: { ...state.user, likedSongs: action.song } }
            break
        default:
    }
    // For debug:
    // window.userState = newState
    // console.log('State:', newState)
    return newState

}
