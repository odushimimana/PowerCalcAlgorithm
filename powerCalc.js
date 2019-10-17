function getDaysOfPower(r1, d1, r2, d2, r3, d3, k) {
	let day = [d1, d2, d2].sort((a, b) => a - b)[0] || 1,
		totalDaysOfPower = 0;
	while (true) {
		let d = 0;
		if (day >= d1) d += r1;
		if (day >= d2) d += r2;
		if (day >= d3) d += r3;
		k -= d;
		if (k < 0) return totalDaysOfPower;
		day++;
		totalDaysOfPower++;
	}
}