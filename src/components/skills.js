import React from 'react';

const skills = () => {
    return (
        <div  style={{
            paddingBottom:"50px"
            
        }} id="skills">
            <div className="container pt-3">

            <h2 className="text-white">The Skills I Have:</h2>
            <div className="row">
            

                
                <div className="col-md-2 py-2"> <img width="200px" height="200px" src="/media/python.png" alt="react" className="d-block bg_none m-auto    img-thumbnail  " /> </div>
                <div className="col-md-2  py-2"> <img width="200px" height="50px" src="/media/django1.png" alt="react" className="d-block bg_none m-auto    img-thumbnail  " /> </div>
                <div className="col-md-2  py-2 "> <img src="/media/rest.png" alt="react" className="d-block  m-auto rest  img-thumbnail  " /> </div>
               
                
                <div className="col-md-2  py-2  bg-none"> <img src="/media/js.png" alt="react" className="d-block bg_none    m-auto    img-thumbnail  " /> </div>
                <div className="col-md-2 py-2"> <img width="200px" height="200px" src="/media/react2.png" alt="react" className="d-block  bg_none m-auto    img-thumbnail  " /> </div>
                <div className="col-md-2 py-2  bg-none"> <img src="/media/vue.png" alt="react" className="d-block bg_none  py-2 m-auto    img-thumbnail  " /> </div>
                <div className="col-md-2  py-2  bg-none"> <img src="/media/bootstrap.png" alt="react" className="d-block bg_none   m-auto    img-thumbnail  " /> </div>
                
                <div className="col-md-2 bg-none py-2 "> <img src="/media/css.png" alt="react" className="d-block  bg_none m-auto    img-thumbnail  " /> </div>
                <div className="col-md-2 py-2  bg-none"> <img src="/media/html.png" alt="react" className="d-block rest  py-2 m-auto    img-thumbnail  " /> </div>
                <div className="col-md-2  py-2 bg-none"> <img src="/media/php.png" alt="react" className="d-block bg_none  py-2 m-auto    img-thumbnail  " /> </div>
                <div className="col-md-2  py-2 bg-none"> <img src="/media/laravel.png" alt="react" className="d-block bg_none  py-2 m-auto    img-thumbnail  " /> </div>
                
                <div className="col-md-2  py-2  bg-none"> <img src="/media/java.png" alt="react" className="d-block bg_none  py-2  m-auto    img-thumbnail  " /> </div>
                <div className="col-md-2  py-2  bg-none"> <img src="/media/git.png" alt="react" className="d-block bg_none  py-2  m-auto    img-thumbnail  " /> </div>
            </div>

            </div>
        </div>
    );
};

export default skills;