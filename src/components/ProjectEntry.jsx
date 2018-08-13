import React from 'react';

class ProjectEntry extends React.Component {
    render() {

        return (
            <div>
            ID: {this.props.id} <br />
            Name: {this.props.name} <br />
            State: {this.props.state} <br />
        </div>    
        );
    }
}

export default ProjectEntry;