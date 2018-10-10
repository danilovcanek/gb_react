import React from 'react';


export default class AddPost extends React.Component {
    render(){
        let buttons;
        let header;
        if(this.props.editForm){
          header = <h2>Форма для изменения поста</h2>;
          buttons = 
            <div className="form-group">
              <button type="button" className="btn btn-primary" id="applyChanges">Изменить</button>
              <button type="button" className="btn btn-primary" id="cancelChanges">Отменить</button>
            </div>;
        } else {
          header = <h2>Форма для добавления поста</h2>;
          buttons = <button type="submit" className="btn btn-primary">Добавить</button>
        }

        return(
            <div>
                {header}
                {/* <h2>Форма для добавления поста</h2> */}
                <form action="#" id="addPostForm">
                    <div className="form-group">
                        <label htmlFor="idUser">Id пользователя</label>
                        <input type="text" className="form-control" id="idUser" placeholder="1" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="postTitle">Заголовок</label>
                        <input type="text" className="form-control" id="postTitle" placeholder="New post" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="postBody">Текст</label>
                        <input type="text" className="form-control" id="postBody" placeholder="New post body" />
                    </div>
                    {buttons}
                    {/* <button type="submit" className="btn btn-primary">Добавить</button> */}
                </form>
            </div>
        );
    }
}
