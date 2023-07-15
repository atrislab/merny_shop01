import React from "react";
import { shallow } from "enzyme";
import Stars from "./Stars";

describe("Stars", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Stars />);
    expect(wrapper).toMatchSnapshot();
  });
});
