import React from "react";
const Rentals = () => {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="" />
          <select name="" id="">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">♥</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div className="form-group">
          <label for="formControlRange">Example Range input</label>
          <input
            type="range"
            class="form-control-range"
            id="formControlRange"
          />
        </div>
        





      </form>
    </div>
  );
};

export default Rentals;
