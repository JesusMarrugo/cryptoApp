import { useGetGeneralInfo } from "../../hooks/api/useGetGeneralInfo"
import * as api from "../../services/getData"
import sinon from "sinon"

import { renderHook, act } from "@testing-library/react-hooks"

describe("useGetGeneralInfo", () => {
  let getDataStub;
  beforeAll(() => {
    getDataStub = sinon.stub(api, "getData").returns({
      then:() => {
        return {data: []};
      },
    });
  });

  it("should call useGetGeneralInfo", (done) => {
    const { result } = renderHook(() => useGetGeneralInfo())
    const {loading, error, data} = result.current

    act(() => {
      // result.current.then((receivedProps) => {
        expect(loading).toBeDefined()
        expect(error).toBeDefined()
        expect(data).toEqual(undefined)
        done();
      // });
    });
  });
});