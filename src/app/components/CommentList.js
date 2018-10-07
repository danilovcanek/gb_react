import React from 'react';
import CommentItem from './CommentItem';

export default class CommentLists extends React.Component
{
    render()
    {
        if(!this.props.comments.length){
            return null; //Если данные еще загружаются
        }

        let comments = this.props.comments.map((comment, index) => {
            return <CommentItem key={index} {...comment} />
        });

        return (
            <div>
                <h1>Коментарии</h1>
                <div className="panel panel-default">
                    {comments}
                </div>

            </div>
        );
    }
}