import dispatcher from '../dispatcher/Dispatcher';

export function createFakeProject(projectId) {
    dispatcher.dispatch({
        type: 'CREATE_FAKE_PROJECT',
        projectId,
    });
}

export function updateSelectedProjectsByStateNum(stateNum) {
    dispatcher.dispatch({
        type: 'PROJECT_STATE_UPDATE',
        stateNum,
    });
}