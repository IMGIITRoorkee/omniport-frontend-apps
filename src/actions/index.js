import axios from 'axios'

import { commonApps, urlAppList } from 'formula_one'

export const setAppList = () => {
  return dispatch => {
    axios
      .get(urlAppList())
      .then(res => {
        dispatch({
          type: 'SET_APPLIST',
          payload: {
            isLoaded: true,
            data: commonApps(res.data)
          }
        })
      })
      .catch(err => {})
  }
}
