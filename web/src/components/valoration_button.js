import React, {Component} from 'react';

class ValorationButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            icon: props.value.icon,
            color: props.value.color,
            liked: props.value.liked
        };
    }

    onValorationClick(liked) {
        //this.props.onValorationClick(liked);
    }

    render() {
        const iconClasses = 'fa ' + this.state.icon;
        const color = this.state.color;
        const liked = this.state.liked;

        return (
            <button className="btn waves-effect waves-light" style={{backgroundColor: color}}
                    onClick={this.onValorationClick(liked)}><i className={iconClasses}/></button>
        );
    }
}

export default ValorationButton;