import React from 'react';
import PostsList from '../components/PostsList';

export default class Posts extends React.Component {
    render() {
        // console.log(this.props.children);
        return (
            <div>
                {
                    (!this.props.children) ?
                        (<PostsList/>)
                        :
                        (this.props.children)
                }
            </div>
        );
    }
}