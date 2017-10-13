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
        return <div>Hola</div>;
    }
}

export default Description;