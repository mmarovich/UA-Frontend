  import { createSelector } from 'reselect';

/**
 * Direct selector to the resources state domain
 */
const selectResourcesDomain = (state) => state.get('resources');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Resources
 */

const makeSelectResources = () => createSelector(
    selectResourcesDomain,
    (substate) => substate.toJS()
);

const makeSelectAddResources = () => createSelector(
	selectResourcesDomain,
	  (substate) => substate.get('addResources')
);

const makeSelectListPlaces = () => createSelector(

  selectResourcesDomain,
  (substate) => substate.get('listPlaces')

);

const makeSelectListedPlaces = () => createSelector(

	selectResourcesDomain,
	(substate) => substate.get('listedPlaces')

);

const makeSelectProjectId = () => createSelector(
    selectResourcesDomain,
    (substate) => substate.get('projectId')
  );

const makeSelectListResources = () => createSelector(

  selectResourcesDomain,
  (substate) => substate.get('listResources')

  )
export default makeSelectResources;
export {

  selectResourcesDomain,
  makeSelectAddResources,
  makeSelectListPlaces,
  makeSelectResources,
  makeSelectProjectId,
  makeSelectListedPlaces,
  makeSelectListResources

};
