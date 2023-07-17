import React from "react";
import { shallow } from "enzyme";
import Specificsearch from "./Specificsearch";

describe("Specificsearch", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Specificsearch />);
    expect(wrapper).toMatchSnapshot();
  });
});
