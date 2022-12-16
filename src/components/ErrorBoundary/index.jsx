import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

function ErrorBoundary() {
  return (
    <div className="container-error">
      <div className="image-box" />
      <h2 className="image-text">
        A Dog Ate this Page!! Your dog is cute but honestly a menace. Where are
        my shoes? Where is my graduation certificate? Where is the chocolate
        cake I baked for my Aunt’s birthday? And why did you take your dog to
        the vet on that same Thursday?!
      </h2>
      <Link to="/" className="btn btn-outline-success mt-5">
        Return to Home
      </Link>
    </div>
  );
}

export default ErrorBoundary;
