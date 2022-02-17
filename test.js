const passengerFlights = {
	777: [
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
	888:[
		{
			_id: "ddd"
		}
	],
	999: [
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

	1. desired result:
	[
		["aaa", "ddd", "eee"]
		["aaa", "ddd", "fff"]
		["bbb", "ddd", "eee"]
		["bbb", "ddd", "fff"]
		["ccc", "ddd", "eee"]
		["ccc", "ddd", "fff"]
	]

	2. number of passenger flights can be from 2 to n
	*/

	// attempt at static solution with 3 passenger flights
	let indexPointer = 0;
	const counters = [0, 0, 0];
	const arr = [];
	while (counters[0] < passengerFlights['777'].length - 1 || counters[1] < passengerFlights['888'].length - 1 || counters[2] < passengerFlights['999'].length - 1) {
		counters[0]++;
		counters[1]++;
		counters[2]++;
		arr.push([passengerFlights['777'][0]._id, passengerFlights['888'][0]._id, passengerFlights['999'][0]._id]);
	}
	return arr;
}

const groupedFlights = getGroupedFlights(passengerFlights);
console.log(groupedFlights);