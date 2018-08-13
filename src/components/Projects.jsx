import React from 'react';
import ProjectsStore from '../stores/ProjectsStore';
import ProjectEntry from './ProjectEntry';

class Projects extends React.Component {
    constructor(props){
        super(props);

        let text = '众筹中';
        switch(props.stateNum) {
            case 1:
                text = '众筹中'
                break;
            case 2:
                text = '报名中';
                break;
            case 3:
                text = '比赛中';
                break;
            case 4:
                text = '投票中';
                break;
            case 5:
                text = '已完成';
                break;
            case 6:
                text = '未完成';
                break;
            default:
                text = ''
        }

        // let selectedProjects = ProjectsStore.getProjectsByStateNum(props.stateNum);

        this.state = {
            stateText: text,
            // selectedProjects: selectedProjects
        }
    }

    componentDidMount(){
        // TodoStore.on("change", () => {
        //     this.setState({
        //         todo: TodoStore.getAll(),
        //     });
        // });
        // let selectedProjects = ProjectsStore.getProjectsByStateNum(1);
        this.state = {
            // selectedProjects: selectedProjects
        }
    }


    render() {
        console.log("this is the state: " + this.state.text);
        const { projects } = this.state;
        console.log("this is the projects: " + projects);
        // const projectEntries = projects.map((project) => {
        //     return <ProjectEntry key={project.id} {...project}/>
        // })
        return(
            <div>
                <label>
                    {this.state.stateText}
                </label>
                {/* {projectEntries} */}
            </div>
        );
    }
}

export default Projects;