describe("getDaysOfPower", function() {
	it("Should return 141 if laon", function() {
		expect(getDaysOfPower(3000, 3, 500, 10, 1500, 7, 700000)).toBe(141);
	});
	it("Should return 17 if laon", function() {
		expect(getDaysOfPower(500, 3, 500, 10, 500, 7, 21000)).toBe(17);
	});
	it("Should return 5 if laon", function() {
		expect(getDaysOfPower(1300, 0, 500, 0, 1500, 7, 10000)).toBe(5);
	});
	it("Should return 1 if laon", function() {
		expect(getDaysOfPower(10000, 3, 500, 10, 1500, 7, 11000)).toBe(1);
	});
});