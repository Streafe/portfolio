import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { FaPython, FaJava } from "react-icons/fa";
import { VscTerminalLinux, VscGithubInverted } from "react-icons/vsc";
import { SiJavascript } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import { Icon } from "@iconify/react";
import { Fade, Zoom, Flip } from "react-reveal";
import Scrollbars from "react-custom-scrollbars";
import Navbar from "./components/Navbar";

import Projects from "./components/projects";

function App() {
  /**
   * Languages
   */
  const [python, setPython] = useState(55);
  const [javaScript, setJS] = useState(60);
  const [java, setJava] = useState(90);
  const [cpp, setCpp] = useState(50);
  const [csharp, setCSharp] = useState(60);

  /**
   * Environments
   */
  const [macos, setMacOS] = useState(80);
  const [windows, setWindows] = useState(95);
  const [aws, setAws] = useState(50);
  const [linux, setLinux] = useState(80);
  const [github, setGitHub] = useState(85);

  /**
   *
   */
  const [react, setReact] = useState(70);
  const [spring, setSpring] = useState(75);
  const [flutter, setFlutter] = useState(60);
  const [express, setExpress] = useState(70);
  const [spigotApi, setSpigotAPI] = useState(95);
  const [electron, setElectron] = useState(70);

  const ref = useRef(null);

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisibleAbout, setVisibleAbout] = useState(false);
  const [isVisibleProjects, setisVisibleProjects] = useState(false);

  const slide1Ref = useRef(null);
  const slide2Ref = useRef(null);
  const slide3Ref = useRef(null);

  const aboutRef = useRef(null);

  const projectsRef = useRef(null);

  const [height, setHeight] = useState(window.innerHeight);

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (aboutRef.current !== null) {
          if (entries[0].isIntersecting) {
            setVisibleAbout(true);
          } else {
            setVisibleAbout(false);
          }
        }
      },
      {
        root: null,
        threshold: 0.5,
        //rootMargin: "100px 0px",
      }
    );

    observer.observe(aboutRef.current);

    return () => {
      observer.unobserve(aboutRef.current);
    };
  }, [ref]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (slide1Ref.current !== null) {
          if (entries[0].isIntersecting) {
            setIsVisible1(true);
          } else {
            setIsVisible1(false);
          }
        }
      },
      {
        root: null,
        threshold: 0.5,
        //rootMargin: "100px 0px",
      }
    );

    observer.observe(slide1Ref.current);

    return () => {
      observer.unobserve(slide1Ref.current);
    };
  }, [ref]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (slide2Ref.current !== null) {
          if (entries[0].isIntersecting) {
            setIsVisible2(true);
          } else {
            setIsVisible2(false);
          }
        }
      },
      {
        root: null,
        threshold: 0.5,
        //rootMargin: "100px 0px",
      }
    );

    observer.observe(slide2Ref.current);

    return () => {
      observer.unobserve(slide2Ref.current);
    };
  }, [ref]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (slide3Ref.current !== null) {
          if (entries[0].isIntersecting) {
            setIsVisible3(true);
          } else {
            setIsVisible3(false);
          }
        }
      },
      {
        root: null,
        threshold: 0.5,
        //rootMargin: "100px 0px",
      }
    );

    observer.observe(slide3Ref.current);

    return () => {
      observer.unobserve(slide3Ref.current);
    };
  }, [ref]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (projectsRef.current !== null) {
          if (entries[0].isIntersecting) {
            setisVisibleProjects(true);
          } else {
            setisVisibleProjects(false);
          }
        }
      },
      {
        root: null,
        threshold: 0.5,
        //rootMargin: "100px 0px",
      }
    );

    observer.observe(projectsRef.current);

    return () => {
      observer.unobserve(projectsRef.current);
    };
  }, [ref]);

  return (
    <div className="home-page">
      <Navbar />
      <div className="type-animation-div text" style={{ height: height }}>
        <TypeAnimation
          className="type-animation text"
          sequence={[
            "Hello, my name is Elias and I am a full-stack developer.", // Types 'One'
            4000, // Waits 1s
            "Check out my portfolio to see some of my work/skills.", // Deletes 'One' and types 'Two'
            4000, // Waits 2s
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          speed={65}
          style={{
            fontSize: "2em",
          }}
        />
      </div>

      {/*<Spacer size={1000}></Spacer>*/}

      {/*isVisible && (
        <div>
          This div will appear and disappear based on the user's scroll position
        </div>
      )*/}
      <div
        style={{ overflow: "hidden", height: height }}
        className="about-section"
      >
        <div ref={aboutRef}>
          <Fade left opposite when={isVisibleAbout}>
            <div className="type-animation-div text">
              <p
                className="type-animation text about-text"
                style={{ height: height }}
              >
                "I am currently a full-stack software engineer student set to
                graduate in 2023. Throughout my studies, I have gained a strong
                foundation in various programming languages such as Java,
                Python, C++, .NET, and JavaScript, and I am proficient in
                various front-end and back-end frameworks."
                <br />
                <br />
                <br />
                <br />
                <br />
                Technical skills
                <br />
                <Icon
                  icon="material-symbols:keyboard-double-arrow-down-rounded"
                  width="36"
                  height="36"
                  className="about-arrow-down"
                  style={{ padding: "1rem" }}
                />
              </p>
            </div>
          </Fade>
        </div>
      </div>
      <div
        style={{
          overflow: "hidden",
          //boxShadow: "0px 3px 15px rgba(0,0,0,0.3)",
        }}
      >
        <div ref={slide1Ref} style={{}}>
          <Fade left opposite when={isVisible1}>
            <div>
              <p className="logos-container-text text">Languages</p>
              <div className="logos-container">
                <div>
                  <div className="logo-container">
                    <Icon
                      className="logo"
                      icon="vscode-icons:file-type-python"
                    />
                    <CircularProgressBar
                      value={python}
                      onChange={(value) => setPython(value)}
                    />
                  </div>
                  <p className="text">Python</p>
                </div>
                <div>
                  <div className="logo-container">
                    <Icon
                      className="logo"
                      icon="vscode-icons:file-type-js-official"
                    />
                    <CircularProgressBar
                      value={javaScript}
                      onChange={(value) => setJS(value)}
                    />
                  </div>
                  <p className="text">Javascript</p>
                </div>
                <div>
                  <div className="logo-container">
                    <Icon className="logo" icon="logos:java" />
                    <CircularProgressBar
                      value={java}
                      onChange={(value) => setJava(value)}
                    />
                  </div>
                  <p className="text">Java</p>
                </div>

                <div>
                  <div className="logo-container">
                    <Icon className="logo" icon="mdi:language-cpp" />
                    <CircularProgressBar
                      value={cpp}
                      onChange={(value) => setCpp(value)}
                    />
                  </div>
                  <p className="text">C++</p>
                </div>
                <div>
                  <div className="logo-container">
                    <Icon className="logo" icon="mdi:language-csharp" />
                    <CircularProgressBar
                      value={csharp}
                      onChange={(value) => setCSharp(value)}
                    />
                  </div>
                  <p className="text">C#</p>
                </div>
                <div>
                  <div className="logo-container">
                    <Icon
                      className="logo"
                      icon="vscode-icons:file-type-dartlang"
                    />
                    <CircularProgressBar
                      value={csharp}
                      onChange={(value) => setCSharp(value)}
                    />
                  </div>
                  <p className="text">Dart</p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div ref={slide2Ref} style={{}}>
          <Fade left opposite when={isVisible2}>
            <div>
              <p className="logos-container-text text">Environments</p>
              <div className="logos-container">
                <div>
                  <div className="logo-container">
                    <Icon className="logo" icon="mdi:github" />
                    <CircularProgressBar
                      value={github}
                      onChange={(value) => setGitHub(value)}
                    />
                  </div>
                  <p className="text">Git</p>
                </div>
                <div>
                  <div className="logo-container">
                    <Icon className="logo" icon="logos:microsoft-windows" />
                    <CircularProgressBar
                      value={windows}
                      onChange={(value) => setWindows(value)}
                    />
                  </div>
                  <p className="text">Windows</p>
                </div>
                <div>
                  <div className="logo-container">
                    <Icon
                      className="logo"
                      icon="vscode-icons:folder-type-macos"
                    />
                    <CircularProgressBar
                      value={macos}
                      onChange={(value) => setMacOS(value)}
                    />
                  </div>
                  <p className="text">MacOS</p>
                </div>
                <div>
                  <div className="logo-container">
                    <Icon className="logo" icon="uil:linux" />
                    <CircularProgressBar
                      value={linux}
                      onChange={(value) => setLinux(value)}
                    />
                  </div>
                  <p className="text">Linux</p>
                </div>
                <div>
                  <div className="logo-container">
                    <Icon className="logo" icon="skill-icons:aws-light" />
                    <CircularProgressBar
                      value={aws}
                      onChange={(value) => setAws(value)}
                    />
                  </div>
                  <p className="text">AWS</p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div ref={slide3Ref} style={{}}>
          <Fade left opposite when={isVisible3}>
            <div>
              <p className="logos-container-text text">Frameworks</p>
              <div className="logos-container">
                <div>
                  <div className="logo-container">
                    <Icon
                      className="logo"
                      icon="vscode-icons:file-type-reactts"
                    />
                    <CircularProgressBar
                      value={react}
                      onChange={(value) => setReact(value)}
                    />
                  </div>
                  <p className="text">React</p>
                </div>
                <div>
                  <div className="logo-container">
                    <Icon className="logo" icon="logos:spring-icon" />
                    <CircularProgressBar
                      value={spring}
                      onChange={(value) => setSpring(value)}
                    />
                  </div>
                  <p className="text">Spring</p>
                </div>
                <div>
                  <div className="logo-container">
                    <Icon className="logo" icon="logos:flutter" />
                    <CircularProgressBar
                      value={flutter}
                      onChange={(value) => setFlutter(value)}
                    />
                  </div>
                  <p className="text">Flutter</p>
                </div>
                <div>
                  <div className="logo-container">
                    <Icon className="logo" icon="vscode-icons:file-type-node" />
                    <CircularProgressBar
                      value={express}
                      onChange={(value) => setExpress(value)}
                    />
                  </div>
                  <p className="text">Node.js</p>
                </div>
                <div>
                  <div className="logo-container">
                    <Icon className="logo" icon="carbon:api-1" />
                    <CircularProgressBar
                      value={spigotApi}
                      onChange={(value) => setSpigotAPI(value)}
                    />
                  </div>
                  <p className="text">Spigot API</p>
                </div>
                <div>
                  <div className="logo-container">
                    <Icon className="logo" icon="mdi:electron-framework" />
                    <CircularProgressBar
                      value={electron}
                      onChange={(value) => setElectron(value)}
                    />
                  </div>
                  <p className="text">Electron</p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <p className="logos-container-text"></p>
        <div ref={projectsRef}>
          <Fade left opposite when={isVisibleProjects}>
            <div>
              <p className="logos-container-text text">Projects</p>
              <p>Full Stack</p>
              <Projects />
            </div>
          </Fade>
        </div>
      </div>
      <CustomScrollbar />
    </div>
  );
}

const Spacer = ({ size }) => {
  return <div style={{ height: size }} />;
};

const CircularProgressBar = ({ value, onChange }) => {
  const [localValue, setLocalValue] = useState(value);
  const [strokeDashoffset, setStrokeDashoffset] = useState(
    280 - 280 * 100 * 0.01
  );
  useEffect(() => {
    setStrokeDashoffset(280 - 280 * localValue * 0.01);
  }, [localValue]);

  const color = `rgb(${255 - localValue * 2.55}, ${localValue * 2.55}, ${
    255 - localValue * 1
  })`;

  return (
    <div className="progress-ring">
      <svg viewBox="0 0 100 100">
        <circle className="progress-ring-bg" cx="50" cy="50" r="45"></circle>
        <circle
          className="progress-ring-fg"
          cx="50"
          cy="50"
          r="45"
          strokeDasharray="280"
          strokeDashoffset={strokeDashoffset}
          stroke={color}
        ></circle>
      </svg>
      {/*
      <input
        type="range"
        min="0"
        max="100"
        value={localValue}
        onChange={(e) => {
          setLocalValue(e.target.value);
          onChange(e.target.value);
        }}
      />
      */}
    </div>
  );
};

const CustomScrollbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollbarHeight, setScrollbarHeight] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      /*
      const maxScroll = 50;
      const currentScroll =
        (window.scrollY / (document.body.offsetHeight - window.innerHeight)) *
        maxScroll;
      setScrollPosition(currentScroll);
      */

      /* No Limit */
      setScrollPosition(
        (window.scrollY / (document.body.offsetHeight - window.innerHeight)) *
          scrollbarHeight
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollbarHeight]);

  useEffect(() => {
    //setScrollbarHeight(10);
    /* No Limit */
    setScrollbarHeight(100);
  }, []);
  const scrollbarStyle = {
    position: "fixed",
    width: "40px",
    height: `8px`,
    left: "0px",
    top: `${scrollPosition}px`,
    background: "rgba(0,0,0,0.3)",
    //boxShadow: "0px 3px 15px rgba(0,0,0,0.5)",
    border: "1px solid rgba(255,255,255,0.2)",
  };
  return <div style={scrollbarStyle} />;
};

export default App;
