import React from "react";
import { Link } from "react-router-dom";
import { faHouse, faBlog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./nav.styl";

export default function Nav() {
  return (
    <div className="nav-bar">
      <Link to="/">
        <span id="homepage-link">
          <FontAwesomeIcon icon={faHouse} /> <span>主页</span>
        </span>
      </Link>
      <Link to="/blogs">
        <span id="blogs-link">
          <FontAwesomeIcon icon={faBlog} /> <span>博客</span>
        </span>
      </Link>
    </div>
  );
}
