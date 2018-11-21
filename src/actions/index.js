import axios from 'axios'

import { commonApps } from '../utils'
import { urlAppList } from '../urls'

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
