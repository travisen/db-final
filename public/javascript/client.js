
// this function is used to populate tables
function populateTable(tableNameFromDB){
	var req = new XMLHttpRequest();
	req.open("GET", "http://localhost:3012/get-characters", true);
	req.setRequestHeader('Content-Type', 'application/json');
	req.addEventListener('load', function(event){
		if(req.status >= 200 && req.status < 400){
			var response = JSON.parse(req.responseText);

			console.log("response", response);

			var table = document.getElementById("table-body");
			for (var i = 0; i <response.length; i++){
				var newRow = table.insertRow(0);
				newRow.id = response[i].id;

				for (var val in response[i]){
					var newCell = document.createElement('td');
					newCell.textContent = response[i][val];

					newRow.appendChild(newCell);
				}
			}
		} else 
			console.log("Errow in network request: " + request.statusText);
	});
	req.send(null);
};

populateTable();