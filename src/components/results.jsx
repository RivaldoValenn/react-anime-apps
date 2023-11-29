import React from "react";

const Results = ({ results }) => {
  return (
    <section>
        <div className="container result bg-black w-full">
          <div className="title">
            <h1>{results.title}</h1>
          </div>
        </div>
    </section>
  );
};

export default Results;
