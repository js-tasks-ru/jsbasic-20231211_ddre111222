function sumSalary(salaries) {
  let sum = 0
	for(let key in salaries) {
		if(!isNaN(salaries[key]) && isFinite(salaries[key])) {
			sum = sum + salaries[key];
		} else if(salaries.isPayed === true){
			return 0
		}
	}
	return sum;
}
