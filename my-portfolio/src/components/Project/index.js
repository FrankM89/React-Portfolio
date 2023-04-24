import React from 'react';

function Project(props) {
  const { name, description, link, repo, image } = props.project;

  return (
    <div className="card">
      <div className="img-container" style={{ width: '405px', height: '200px' }}>
        <img src={image} alt={name} className="project-image" />
      </div>
      <div className="content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div>
          <a href={link}>Deployed App</a> | <a href={repo}>GitHub Repo</a>
        </div>
      </div>
    </div>
  );
}

export default Project;








