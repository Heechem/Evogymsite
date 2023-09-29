import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

interface Props {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-cyan-300 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.ContactUS)}
      href={`#${SelectedPage.ContactUS}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
