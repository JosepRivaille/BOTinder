import React, {Component} from 'react';

class Description extends Component {
    constructor(props) {
        super(props);

        this.state = {
            repositories: [],
            filteredRepositories: []
        };
    }

    render() {
        return <div>Description bla bla bla</div>;
    }
}

export default Description;