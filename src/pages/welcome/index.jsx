import React from 'react';
import './Welcome.css';
import * as ProjectAction from '../../actions/ProjectActions';
import ProjectStore from '../../stores/ProjectsStore';
import ProjectEntry from '../../components/ProjectEntry';
import axios from 'axios';
import Projects from '../../components/Projects';

class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {
            projects: ProjectStore.getAllProjects(),
            currentState: 1,
            selectedProjects: ProjectStore.getSelectedProjects(),
        }
        this.handleClick = this.handleClick.bind(this);
        this.setProjectState = this.setProjectState.bind(this);
    }

    componentDidMount() {
        ProjectStore.on("createFakeProject", () => {
            this.setState({
                projects: ProjectStore.getAllProjects(),
            });
        })
        ProjectStore.on('updateSelectedProjectsByStateNum', () => {
            this.setState({
                selectedProjects: ProjectStore.getSelectedProjects(),
            })
        })
        console.log("------------------------componentDidMount", this.state.projects);
        console.log("------------------------componentDidMount", this.state.selectedProjects);
    }

    handleClick() {
        axios.get('https://api.github.com/users/qingyangkong')
        .then(response => console.log(response))
    }

    createFakeProject() {
        ProjectAction.createFakeProject(Date.now());
    }

    setProjectState(stateNum) {
        this.setState({
            currentState: stateNum,
        })
        ProjectAction.updateSelectedProjectsByStateNum(stateNum);
    }

    render() {
        console.log("Welcome page is rendering");
        console.log("this.state", this.state)
        const { projects } = this.state;
        const projectEntryComponents = projects.map((project) => {
            return <ProjectEntry key={project.id} {...project} />
        })
        const { selectedProjects } = this.state;
        const selectedProjectEntris = selectedProjects.map((selectedProject) => {
            return <ProjectEntry key={selectedProject.id + 100} {...selectedProject} />
        })

        return (
            <div>
                <div className="welcome-text">
                    <b>This area in blue is for testing</b> <br />
                    <button onClick={this.createFakeProject.bind(this)}>
                        Create a fake project
                    </button>
                    <button onClick={this.handleClick}>get user qingyangkong</button>
                    <div>{projectEntryComponents}</div>
                </div>
                <button onClick={() => this.setProjectState(1)}>众筹中</button>
                <button onClick={() => this.setProjectState(2)}>报名中</button>
                <button onClick={() => this.setProjectState(3)}>比赛中</button>
                <button onClick={() => this.setProjectState(4)}>投票中</button>
                <button onClick={() => this.setProjectState(5)}>已完成</button>
                <button onClick={() => this.setProjectState(6)}>未成功</button>
                <label>
                    {this.state.currentState}
                </label>
                <div>{selectedProjectEntris}</div>
            </div>
        );
    }
}

export default Welcome;