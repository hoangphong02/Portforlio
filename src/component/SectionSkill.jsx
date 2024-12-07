import React from "react";

const SectionSkill = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">Skills</h2>
      <div className="skills-container">
        <div className="skill-box">
          <h3>Technical Skills</h3>
          <ul>
            <li>
              <a href="https://vi.wikipedia.org/wiki/HTML">HTML</a>
            </li>
            <li>
              <a href="https://vi.wikipedia.org/wiki/CSS">CSS</a>
            </li>
            <li>
              <a href="https://sass-lang.com/">SCSS</a>
            </li>
            <li>
              <a href="https://vi.wikipedia.org/wiki/JavaScript">JavaScript</a>
            </li>
            <li>
              <a href="https://www.typescriptlang.org/">TypeScript</a>
            </li>
          </ul>
        </div>
        <div className="skill-box">
          <h3>Frameworks</h3>
          <ul>
            <li>
              <a href="https://vi.legacy.reactjs.org/">ReactJs</a>
            </li>
            <li>
              <a href="https://nextjs.org/">NextJs</a>
            </li>
            <li>
              <a href="https://redux.js.org/">Redux</a>
            </li>
            <li>
              <a href="https://redux-saga.js.org/">Redux Saga</a>
            </li>
            <li>
              <a href="https://redux.js.org/usage/writing-logic-thunks">
                Redux Thunk
              </a>
            </li>
            <li>
              <a href="https://getbootstrap.com/">Bootstrap</a>
            </li>
            <li>
              <a href="https://tailwindcss.com/">Tailwind CSS</a>
            </li>
            <li>
              <a href="https://ant.design/">Ant Design</a>
            </li>
          </ul>
        </div>
        <div className="skill-box">
          <h3>Other Skills</h3>
          <ul>
            <li>
              <a href="https://github.com/">Git</a>
            </li>
            <li>
              <a href="https://www.figma.com/">Figma</a>
            </li>
            <li>Responsive Design</li>
            <li>Web Performance</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionSkill;
