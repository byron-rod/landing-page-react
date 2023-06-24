import React from 'react';

function BodyContainer() {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">A Warm Welcome</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec finibus nulla. Phasellus rutrum nibh in nunc tristique, vitae placerat nunc blandit.
        </p>
        <button className="btn btn-primary btn-lg my-4">Call to Action!</button>
      </div>


      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="Card" />
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec finibus nulla.
              </p>
              <button className="btn btn-primary">Find Out More!</button>
            </div>
          </div>
        </div>


        <div className="col-md-3">
        <div className="card">
            <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="Card" />
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec finibus nulla.
              </p>
              <button className="btn btn-primary">Find Out More!</button>
            </div>
          </div>
        </div>


        <div className="col-md-3">
        <div className="card">
            <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="Card" />
            <div className="card-body">
              <h5 className="card-title">Card 3</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec finibus nulla.
              </p>
              <button className="btn btn-primary">Find Out More!</button>
            </div>
          </div>
        </div>

        
        <div className="col-md-3">
        <div className="card">
            <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="Card" />
            <div className="card-body">
              <h5 className="card-title">Card 4</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec finibus nulla.
              </p>
              <button className="btn btn-primary">Find Out More!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyContainer;
