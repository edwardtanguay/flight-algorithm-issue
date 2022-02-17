const passengerFlights = {
	1: [
		{
			_id: "aaa"
		},
		{
			_id: "bbb"
		},
		{
			_id: "ccc"
		}
	],
	2: [
		{
			_id: "ddd"
		}
	],
	3: [
		{
			_id: "eee"
		},
		{
			_id: "fff"
		}
	],
};

const getGroupedFlights = (passengerFlights) => {
	/* 
	REQUIREMENTS:

	desired result:
	[
		["aaa", "ddd", "eee"]
		["aaa", "ddd", "fff"]
		["bbb", "ddd", "eee"]
		["bbb", "ddd", "fff"]
		["ccc", "ddd", "eee"]
		["ccc", "ddd", "fff"]
	]


	*/





	let pointer = 2;
	const counters = [3, 3, 3];
	console.log(counters[0], counters[1], counters[2], pointer);
	while (counters[0] > 0 || counters[1] > 0 || counters[2] > 0) {

		if (counters[2] > 0) {
			counters[2]--;
		} else {
			pointer--;
			counters[pointer]--;
			counters[pointer + 1] = 3;

	} 
}

getGroupedFlights(passengerFlights);