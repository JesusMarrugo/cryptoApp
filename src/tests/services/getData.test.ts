import { getData } from "../../services/getData"
import sinon from "sinon";


describe("getData", () => {
  let fetchStub: Object = {};
  let fakeData: number[] = [1, 2, 3];

  describe("when every is working well", () => {
    beforeAll(() => {
      fetchStub = sinon.stub(window, "fetch").returns({
        ok: true,
        json: () => {
          return { data: fakeData }
        },
      });
    });

    it("call functtion and everything is ok", async () => {
      const { data } = await getData("uri")
      expect(data).toEqual({ data: fakeData })
      fetchStub.restore();
    });
  });

  describe("when every isn't working well", () => {
    beforeAll(() => {
      fetchStub = sinon.stub(window, "fetch").throws({
        ok: undefined,
      });
    });

    it("should call functtion and returns an error", async () => {
      const result = await getData("uri")
      expect(result.error).toBe(true)
    });
  });
});