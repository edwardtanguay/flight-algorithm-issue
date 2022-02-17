const step2 = {
	airports: {
		hamburg: {
			1: [
				{
					_id: "aaa",
					passengerId: 1,
				},
				{
					_id: "bbb",
					passengerId: 1,
				},
				{
					_id: "ccc",
					passengerId: 1,
				}
			],
			2: [
				{
					_id: "ddd",
					passengerId: 2,
				}
			],
			3: [
				{
					_id: "eee",
					passengerId: 3,
				},
				{
					_id: "fff",
					passengerId: 3,
				}
			],
		},
		rome: {
			1: [
				{
					_id: "aaa",
					passengerId: 1,
				}
			],
			2: [
				{
					_id: "bbb",
					passengerId: 2,
				},
				{
					_id: "ccc",
					passengerId: 2,
				}
			],
			3: [
				{
					_id: "ddd",
					passengerId: 3,
				},
				{
					_id: "eee",
					passengerId: 3,
				},
				{
					_id: "fff",
					passengerId: 3,
				},
				{
					_id: "ggg",
					passengerId: 3,
				}
			],
		}
	}
};

console.log(step2);

// aaa, ddd, eee
// aaa, ddd, fff
// bbb, ddd, eee
// bbb, ddd, fff
// ...


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
	console.log(counters[0], counters[1], counters[2], pointer);
}

console.log('done');
// Object.entries(step2.airports).forEach(airportArr => {
// 	const airport = airportArr[0]
// 	const passengerObj = airportArr[1]
// 	console.log(airport);
// 	Object.entries(passengerObj).forEach(passengerArr => {
// 		const passengerId = passengerArr[0];
// 		const passengerTripsArr = passengerArr[1];
// 		console.log(passengerId);
// 		console.log(passengerTripsArr);
// 		passengerTripsArr.forEach(trip => {
// 			console.log(trip._id);
// 		})
// 	})
// })