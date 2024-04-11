import useFetchData from "../FetchData";

const Projects = () => {
  const { projectList, isLoading } = useFetchData();
  return (
    <section className="project-list">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      {isLoading ? (
        <section className="projects">
          <h2 className="loading"></h2>
        </section>
      ) : (
        <section className="projects">
          <div className="projects-center">
            {projectList.map((item) => {
              const { name, url, img, id } = item;
              return (
                <a
                  key={id}
                  href={url}
                  className="project"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={img} alt={name} className="img" />
                  <h5>{name}</h5>
                </a>
              );
            })}
          </div>
        </section>
      )}
    </section>
  );
};
export default Projects;
