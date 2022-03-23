import { createTestConf, Fixtures } from "../../shared/test.helper";

describe("businessData test", () => {
  let fixtures: Fixtures;

  beforeEach(async () => {
    fixtures = await createTestConf();
  });

  describe("of negociation margin calculator", () => {
    it("can calculate negociation margin and service fee", async () => {
        const marginTest1 = await fixtures.businessDataResolver.computeNegociationMargin(200000,190000,0.07);
        expect(marginTest1).toBe(0.05263157894736836);
        const marginTest2 = await fixtures.businessDataResolver.computeNegociationMargin(200000,200000,0.07);
        expect(marginTest2).toBe(0);
        const marginTest3 = await fixtures.businessDataResolver.computeNegociationMargin(200000,150000,0.07);
        expect(marginTest3).toBe(0.07);

        const serviceFee1 = await fixtures.businessDataResolver.computeServiceFees(100000,"75011");
        expect(serviceFee1).toBe(22000);
        const serciceFee2 = await fixtures.businessDataResolver.computeServiceFees(100000,"59000");
        expect(serciceFee2).toBe(19000);
    });
  });
});
