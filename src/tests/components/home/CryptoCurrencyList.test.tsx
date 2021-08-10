import React from "react";
import { CryptoCurrencyList } from "../../../components/home/CryptoCurrencyList";
import { CryptoCurrencyListRow } from "../../../components/home/CryptoCurrencyListRow";
import { CryptoCurrencyRowLoader } from "../../../components/loaders/CryptoCurrencyRowLoader";
import { shallow } from "enzyme";
import * as api from "../../../hooks/api/useGetCryptoList";
import sinon from "sinon";

describe("CryptoCurrencyList component", () => {
  let useGetCryptoListStub: Object = {}
  const makeWrapper = (props = {}) => {
    const wrapper = shallow(<CryptoCurrencyList {...props} />);

    return { props, wrapper }
  };

  describe("When the request is loading", () => {
    beforeAll(() => {
      useGetCryptoListStub = sinon
        .stub(api, "useGetCryptoList")
        .returns({ data: [], loading: true, error: undefined })
    });

    it("should render an spinner component", () => {
      const { wrapper } = makeWrapper()
      expect(wrapper.contains(<CryptoCurrencyRowLoader />)).toBe(true)
    });
    afterAll(() => {
      useGetCryptoListStub.restore()
    });
  });

  describe("Should the request is crashing💥", () => {
    beforeAll(() => {
      useGetCryptoListStub = sinon

        .stub(api, "useGetCryptoList")
        .returns({ data: [], loading: false, error: {} })
    });

    it("should render an error message", () => {
      const { wrapper } = makeWrapper();
      expect(wrapper.contains(<p>Error</p>)).toEqual(true)
    });

    afterAll(() => {
      useGetCryptoListStub.restore()
    });
  });

  describe("Should the request is loaded", () => {
    const fakeData = [
      {
        id: "90",
        symbol: "BTC",
        name: "Bitcoin",
        nameid: "bitcoin",
        rank: 1,
        price_usd: "40276.40",
        percent_change_24h: "2.14",
        percent_change_1h: "0.76",
        percent_change_7d: "1.43",
        price_btc: "1.00",
        market_cap_usd: "755551345707.15",
        volume24: 34451255636.953094,
        volume24a: 23725307994.23745,
        csupply: "18759159.00",
        tsupply: "18759159",
        msupply: "21000000",
      },
      {
        id: "80",
        symbol: "ETH",
        name: "Ethereum",
        nameid: "ethereum",
        rank: 2,
        price_usd: "2770.18",
        percent_change_24h: "2.66",
        percent_change_1h: "0.28",
        percent_change_7d: "19.09",
        price_btc: "0.068767",
        market_cap_usd: "323373089067.25",
        volume24: 32682207187.028324,
        volume24a: 25595881472.111286,
        csupply: "116733553.00",
        tsupply: "116733553",
        msupply: "",
      },
    ];
    beforeAll(() => {
      useGetCryptoListStub = sinon.stub(api, "useGetCryptoList").returns({
        data: fakeData,
        loading: false,
        error: false,
      });
    });

    it("should render the filters", () => {
      const { wrapper } = makeWrapper();
      expect(wrapper.find("CryptoCurrencyListFilters")).toHaveLength(1);
      expect(wrapper.find("CryptoCurrencyListFilters").props().data).toEqual(
        fakeData
      );
      expect(
        wrapper.find("CryptoCurrencyListFilters").props().setCryptos).toBeDefined();
    });

    it("should render the CryptoCurrencyListRow", () => {
      const { wrapper } = makeWrapper();
      expect(wrapper.find("CryptoCurrencyListRow")).toHaveLength(2);
      expect(wrapper.find("CryptoCurrencyListRow").get(0).props).toEqual(
        fakeData[0]
      );
    });
  });
});
