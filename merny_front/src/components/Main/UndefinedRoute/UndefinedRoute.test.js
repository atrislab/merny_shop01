import React from "react";
import { shallow } from "enzyme";
import UndefinedRoute from "./UndefinedRoute";

describe("UndefinedRoute", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UndefinedRoute />);
    expect(wrapper).toMatchSnapshot();
  });
});
