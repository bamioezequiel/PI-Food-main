import React from "react";
import { NavLink } from "react-router-dom";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import isReact from "is-react";

import NavBar from "./components/Navbar/Navbar.jsx";

configure({ adapter: new Adapter() });

describe("<Nav />", () => {
  let nav;
  beforeEach(() => {
    nav = shallow(<NavBar />);
    expect(isReact.classComponent(NavBar)).toBeTruthy();
  });

  it('Debería renderizar dos <NavLink to="" />. El primero que vaya a "/", y el segundo a "/house/create"', () => {
    expect(nav.find(NavLink).length).toBeGreaterThanOrEqual(3);
  });

  it('Debería tener un NavLink con el texto "Food" que cambie la ruta hacia "/home"', () => {
    expect(nav.find(NavLink).at(0).prop("to")).toEqual("/home");
    expect(nav.find(NavLink).at(0).text()).toEqual("Food");
  });

  it('Debería tener un NavLink con el texto "Home" que cambie la ruta hacia "/home"', () => {
    expect(nav.find(NavLink).at(1).prop("to")).toEqual("/home");
    expect(nav.find(NavLink).at(1).text()).toEqual("Home");
  });

  it('Debería tener un tercer NavLink, con texto "Create" y que cambie la ruta hacia "/home/create"', () => {
    expect(nav.find(NavLink).at(2).prop("to")).toEqual("/home/create");
    expect(nav.find(NavLink).at(2).text()).toEqual("Create");
  });
});