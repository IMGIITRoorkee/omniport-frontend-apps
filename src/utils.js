import { groupBy, spread, merge, reject, orderBy } from 'lodash'

import config from 'core/configs.json'
/**
 *
 * @param {array} apiList List of apps by backend.
 * @return {array} List containing common apps,
 */
export function commonApps (apiList) {
  // Concatenate two arrays to add up all objects in one array.
  var commonList = apiList.concat(config.apps) // config.apps contain apps registered on frontend.
  // Group objects in array with same app name.
  commonList = groupBy(commonList, obj => obj.nomenclature.name)
  // Remove the objects which were not matched.
  commonList = reject(commonList, { length: 1 })
  // Spread the arrays in array.
  commonList = commonList.map(spread(merge))
  // Sort the list according to verbose name.
  commonList = orderBy(commonList, obj => obj.nomenclature.verboseName, ['asc'])
  return commonList
}
