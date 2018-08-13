import EventEmitter from 'events';
import dispatcher from '../dispatcher/Dispatcher';

class ProjectStore extends EventEmitter {
    constructor() {
        super();
        //these are fake projects for tests
        this.projects = [
            {
                id: 1,
                name: 'name1',
                state: 1
            },
            {
                id: 2,
                name: 'name2',
                state: 2
            },
            {
                id: 3,
                name: 'name3',
                state: 3
            },
            {
                id: 4,
                name: 'name4',
                state: 4
            },
            {
                id: 5,
                name: 'name5',
                state: 5
            },
            {
                id: 6,
                name: 'name6',
                state: 6
            }
        ];
        this.selectedProjects = this.projects.filter(x => x.state == 1);
    }

    createFakeProject(projectId) {
        let projectName = "fake project name";
        let projectState = 5;

        this.projects.push({
            id: projectId,
            name: projectName,
            state: projectState
        });
        this.emit("createFakeProject");
    }

    updateSelectedProjectsByStateNum(stateNum) {
        this.selectedProjects = this.projects.filter(project => project.state === stateNum);
        console.log('this is the projects after the update.', this.selectedProjects)
        this.emit("updateSelectedProjectsByStateNum");
    }

    getAllProjects() {
        return this.projects;
    }

    getSelectedProjects() {
        return this.selectedProjects;
    }

    handleAction(action) {
        switch(action.type) {
            case "CREATE_FAKE_PROJECT": {
                this.createFakeProject(action.projectId);
                console.log("Project store received an action type", action.type);
                console.log("Project store received an action project Id", action.projectId);
            }
            case "PROJECT_STATE_UPDATE": {
                this.updateSelectedProjectsByStateNum(action.stateNum);
                console.log("Project store received an action type", action.type);
                console.log("Project store received an action stateNum", action.stateNum);
            }
        }
    }
}

const projectStore = new ProjectStore;
dispatcher.register(projectStore.handleAction.bind(projectStore))
window.dispatcher = dispatcher;

export default projectStore;