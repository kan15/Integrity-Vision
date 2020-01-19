function conversion(totalArr, changeRule, localization) {
	let resultParams = [];

	function parse(object, params) { //funtion for getting all true-keys from array
		const keys = Object.keys(object);
		keys.forEach(key => {
				if(typeof(object[key]) === 'object') {
					parse(object[key], [...params, key]);
				} else if(object[key]) {
					resultParams.push([...params, key]);
				}
			}
		)
	}

	function formatDate(date){
        const doubleDigit = 10;
        const year = date.getFullYear();
        const month = date.getMonth()+1 < doubleDigit ? '0'+ (date.getMonth()+1) : date.getMonth()+1;
        const day = date.getDate();
        const finalDate = `${day}.${month}.${year}`;
        return finalDate;
	}
	
	function getValuesArray(mainArr, wayArr) { //check elements
		let result = {};
		mainArr.forEach(function(val, key) { 
			wayArr.forEach(function (element) {
				if (typeof val[element] === 'boolean') {
					if (val[element] === true) {
						val = 'Yes';
					}
					else {
						val = 'No';
					}
				}
				else if (val[element] instanceof Date) {
					val = formatDate(val[element]);
				}
				else {
					val = val[element];
				}
			})
				result['value' + (key+1)] = val;
		})
		return result;
	}
	parse(changeRule, []);//get an array of elements with true property from changeRule array
	let result = [];
	resultParams.forEach(function (partResultParams) {//for all elements with true-prorerty
			const joinedPath = partResultParams.join('.');
			result.push({name: localization[joinedPath] || joinedPath, ...getValuesArray(totalArr, partResultParams)})
		}
	)
	return result;
}

const total = [
    {asd: 
        {fullName:
            { surname: 'Ivanov', firstName: 'Ivan', middleName: 'Ivanovich'}}},
    {asd: 
        {fullName:
            { surname: 'Petrov', firstName: 'Petr', middleName: 'Petrovich'}}}
]
const change = {asd: 
					{fullName:
						{ surname: true, firstName: true, middleName: false} }};
const local = {'asd.fullName.surname' : 'Surname'};
conversion(total, change, local);