import React from "react";
import { shallow } from "enzyme";
import SpecificTitle from "./SpecificTitle";

describe("SpecificTitle", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SpecificTitle />);
    expect(wrapper).toMatchSnapshot();
  });
});
