import React from "react";

const ProjectFormComponent = (props) => {
  const {
    submitHandler,
    projectList,
    handleChange,
    imageChange,
    project,
    submitLabel,
  } = props;

  return (
    <div className="form-flex">
      <div className="prject-form-container">
        <form
          className="project-form"
          onSubmit={submitHandler}
          encType="multipart/form-data"
        >
          <label>title</label>
          <div>
            <input
              className="input"
              type="text"
              name="title"
              value={project.title}
              placeholder="title"
              onChange={handleChange}
            />
          </div>
          <label>url</label>
          <div>
            <input
              className="input"
              type="text"
              name="url"
              value={project.url}
              placeholder="add a link"
              onChange={handleChange}
            />
            <label>description</label>
            <div>
              <textarea
                className="text-box"
                type="textarea"
                name="description"
                value={project.description}
                placeholder="add a description"
                onChange={handleChange}
              />
            </div>
          </div>
          <label>{submitLabel} image</label>
          <div>
            <input
              className="input"
              accept=".png, .jpg, .jpeg"
              type="file"
              name="image"
              value={null}
              onChange={imageChange}
            />
          </div>
          <div className="form-flex">
            <button className="submit-btn" type="submit">
              {submitLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectFormComponent;
