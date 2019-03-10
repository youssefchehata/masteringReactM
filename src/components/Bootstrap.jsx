import React from 'react';
const Bootstrap = () => {
  return (
    <div className="container">
      <div className="text-danger bg-warning">.text-danger</div>
      <div className="text-warning">jj</div>
      <div className="text-light bg-success">.text-light</div>
      <div className="text-white">white</div>
      <div className="bg-info">.bg-info</div>
      <div className="bg-primary">.bg-primary</div>
      <hr />
      <button className="btn-primary">btn.btn-primary</button>
      <a href="/" className="btn-success m-2">
        a.btn-success
      </a>
      <hr />
      <button className="btn btn-outline-primary">
        btn.btn-outline-primary
      </button>

      <button type="button" className="btn btn-outline-warning m-2">
        Warning
      </button>

      <button className="btn btn-info btn-sm">btn.btn.btn-info.btn-sm</button>
      <button className="btn btn-warning btn-lg">
        btn.btn.btn-warning.btn-lg
      </button>
      <button className="btn btn-danger active">active</button>
      <button className="btn btn-danger active" disabled>
        active
      </button>
      <p className="h1">p.h1</p>
      <small className="text-muted">small.text-muted</small>
      <hr />
      <strong className="text-muted">strong.text-muted</strong>
      <p className="display-1">p.dispaly-1</p>
      <p className="h1">p.h1</p>
      <p>
        <s>p>s</s>
      </p>
      <p>
        <del>p>del</del>
      </p>
      <p>
        <mark>p>mark</mark>
      </p>
      <p>
        <u>p>u</u>
      </p>
      <blockquote className="blockquote">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure veritatis
        optio labore illum suscipit! Veritatis nulla labore odio sit eaque illo
        architecto ipsum corrupti, et cupiditate rerum, recusandae ipsam animi?
      </blockquote>
      <p className="blockquote text-center">.plockquote.text-center</p>
      <p className="blockquote text-right">p.blockquote.text-right</p>
      <p className="">p.text-left</p>
    </div>
  );
};

export default Bootstrap;
