import { CryptoDetail } from "../../../components/CryptoCurrencyDetail/CryptoDetail";
import { shallow } from "enzyme";
import * as router from "react-router-dom";
import sinon from "sinon";

import { Route } from "react-router-dom";
import * as api from "../../../hooks/api/useGetCryptoDetail"

describe("CryptoDetail component", () => {
  let useGetCryptoDetailStub: Object = {}
  beforeAll(() => {
    useGetCryptoDetailStub = sinon
      .stub(api, "useGetCryptoDetail")
      .returns({ data: null, error: null, loading: true })
  });
  const makeWrapper = (props = {}) => {
    const match = {};
    const wrapper = shallow(<CryptoDetail {...match} />)

    return { props, wrapper }
  };

  it("should render without crashing", () => {
    const { wrapper } = makeWrapper()
    expect(wrapper).toBeDefined()
  });
});
