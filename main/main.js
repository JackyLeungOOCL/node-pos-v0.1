'use strict'

module.exports =  function main(inputs){
	var string = "***<store earning no money>Receipt ***\n";
	var list = new Array();
	var subtotal = 0;
	var total = 0;

	inputs.forEach(function(inp) {
		var index = list.findIndex(item => item.obj.Barcode == inp.Barcode);
		if (index >= 0) {
			list[index].quantity += 1;
		} else {
			var newItem = {"obj" : inp, "quantity" : 1};
			list.push(newItem);
		}
	});

	list.forEach(function(item) {
		string += "Name: " + item.obj.Name + ", " +
							"Quantity: " + item.quantity;
		if (item.obj.Unit != 'a') {
			string += " " + item.obj.Unit;
			if (item.quantity > 1) {
				string +="s";
			}
		}
		subtotal = item.obj.Price * item.quantity;
		total += subtotal;
		string += ", Unit price: " + item.obj.Price.toFixed(2) + " (yuan), " + 
							"Subtotal: " + subtotal.toFixed(2) + " (yuan)\n";
	});

	string += "----------------------\n" +
						"Total: " + total.toFixed(2) + " (yuan)\n" +
						"**********************\n";

	return string;
}