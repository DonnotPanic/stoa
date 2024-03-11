import React from "react";
import "./stylelink.styl";

export default function StyleLink({ href, title, children }) {
  return (
    <span className="link-span">
      <a href={href} title={title} rel="noopener noreferrer" target="_blank">
        {children}
      </a>
    </span>
  );
}
