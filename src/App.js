// Packages
import { useEffect, useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
  NavLink,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Clouds } from "./art/Clouds";
import { Sun } from "./art/Sun";

// Components
import { Experience } from "./components/Experience";
import { Objectives } from "./components/Objectives";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Nav } from "./components/Nav";
import { Form } from "./components/Form";

// Global Styles
import "./_variables.scss"
import './_animation.scss';
import "./_global.scss";
import './scss/button.scss';

// Inc
import navItems from './inc/navigation.json';


export default function App() {
  const location = useLocation();
  const activePage = navItems.find((item) => {
    return item.path === location.pathname;
  });
  const [nextPage, setNextPage] = useState(false);

  useEffect(() => {
    document.title = "Benjamin Hodgson";
    if (activePage) {
      document.title = activePage.name + " - Benjamin Hodgson";
      setNextPage(
        navItems.find((item) => {
          return item.name === activePage.next;
        })
      );
    }
    return () => {
      setNextPage(false);
    };
  }, [activePage]);
  
  const [outerClass, setOuterClass] = useState("ready");

  return (
    <div className={outerClass + " animate-container"}>
      <Clouds />
      <Sun />
      <Nav navItems={navItems} />
      <TransitionGroup component={null}>
        <CSSTransition
          onExit={() => setOuterClass("animated")}
          onEntered={() => setOuterClass("done")}
          key={location.key}
          classNames="fade"
          timeout={0}
        >
          <div className="content">
            <Routes>
              <Route path="/" element={<Navigate to="experience" />} end />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/objectives" element={<Objectives />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Form />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
      {nextPage && (
        <NavLink className="btn btn-primary" to={nextPage.path}>
          View my {nextPage.name.toLowerCase()}
        </NavLink>
      )}
      {location.pathname === "/objectives" && (
        <NavLink className="btn btn-primary" to="contact">
          Contact Me
        </NavLink>
      )}
    </div>
  );
}

export function Root() {
  return (
    <div>
      <Router>
        <App />
      </Router>
    </div>
  );
}
