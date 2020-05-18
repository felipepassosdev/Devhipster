import React from 'react';

function JavaScript() {
  return (
    <>
      <div className="container">
        <div className="p-5"></div>
        <div className="row">
          <div className="col-md-9">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/iVmYaIZ5Hmk" title="JS" allowfullscreen></iframe>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card dark">
              <div className="card-body">
                <h5 className="text-white">Curso Javascript</h5>
                <ul>
                  <li className="text-white">Apresentação</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JavaScript;