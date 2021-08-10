import React from 'react'
import { Caret } from "../../../components/general/Caret";
import { shallow } from "enzyme";

describe("Caret component", () => {
  const makeWrapper = (newProps = {}) => {
    const defaultProps = {
        value : ''
    }
    const props = Object.assign({}, defaultProps, newProps)
    const wrapper = shallow(<Caret {...props} />)
    return { props, wrapper };
  };


  it("should render arrow down", () => {
    const { wrapper } = makeWrapper({ value: "-" })
    const span = wrapper.find("span")
    expect(span.text()).toEqual("↓")
  });


  it("should render arrow up", () => {
    const { wrapper } = makeWrapper({ value: 1 })
    const span = wrapper.find("span")
    expect(span.text()).toEqual("↑")
  });
});