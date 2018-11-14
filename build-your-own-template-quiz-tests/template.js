
function template(str, delims = {open: '*(', close: ')*'}) {
  let a = str.split('*(');
  let m = [];
  a.forEach(function(e) {
  	let w = e.split(')*'); 
  	m.push(w);
  });// Fill this in
	return function () {
	  	let resultArray = [];
	  	resultArray.push(m[0]);
	  	for (let i = 0; i<m.length-1; i++){
	  		let y = m[i+1];
			let ar = arguments[i];
			y.splice(0, 1, ar);
			y.join("");
			console.log(y);
	  		resultArray.push(y);
	  	};
	    console.log(resultArray);
		result = [].concat.apply([], resultArray)
		str = result.join("")
	    return str; // template renderer usually returns a string
	  };
}; 