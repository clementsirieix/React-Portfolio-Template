import React, { Component, PropTypes } from 'react'
import './Content.css'

class Content extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render() {
    const {
      links,
      projects,
      text,
      title,
    } = this.props.data

    return (
      <div className="Content">
        <h1 className="Content-title">{title}</h1>
        <div className="Content-text">{text}</div>
        <ul className="Content-links">
        {links.map(link => (
          <li key={link.title}>
            <a href={link.link}>{link.title}</a>
          </li>
        ))}
        </ul>
        <div className="Content-projects grid">
          {projects.map(project => (
              <div
                className="cell -3of12"
                key={project.title}
              >
                <div className="card">
                  <h2 className="card-header">
                    <a href={project.href}>{project.title}</a>
                  </h2>
                  <div className="card-content">
                    <div className="inner">{project.desc}</div>
                  </div>
                </div>
              </div>
          ))}
        </div>
        <footer>shout-out <a href="https://github.com/egoist/hack">Hack</a> and <a href="https://github.com/developit/unfetch">Unfetch</a></footer>
      </div>
    )
  }
}

export default Content
