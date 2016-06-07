document.addEventListener('DOMContentloaded', bindButtons);
// this function is used to populate tables
function populateTable(tableNameFromDB){
	var req = new XMLHttpRequest();
	req.open("GET", "http://localhost:3012/" + tableNameFromDB, true);
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
			console.log("Error in network request: " + request.statusText);
	});
	req.send(null);
};

function populateDropdown(tableIn, dropSelect){

	var req = new XMLHttpRequest();
	var payload = {table: null};
	payload.table = tableIn;

	if (tableIn == "Characters"){
		req.open("POST", "http://localhost:3012/dropdowns-characters", true);
	} else {
		req.open("POST", "http://localhost:3012/dropdowns", true);
	}
	req.setRequestHeader('Content-Type', 'application/json');

	req.addEventListener('load', function(event){
		if(req.status >= 200 && req.status < 400){
			var response = JSON.parse(req.responseText);

			console.log("response dropdown", response);
			console.log("dropselect", dropSelect);
			var dropdown = document.getElementById(dropSelect);
			for (var i = 0; i < response.length; i++){
				var newOption = document.createElement("option");
				if (tableIn == "Characters") {
					console.log("newOption.textContent = response[i].f_name;", newOption.textContent = response[i].f_name);
					newOption.textContent = response[i].f_name;
					newOption.textContent += " ";
					newOption.textContent += response[i].l_name;
				} else {
					newOption.textContent = response[i].name;
				}
				newOption.value = response[i].id; // what is actually sent back to db
				dropdown.add(newOption);
			}

		} else 
			console.log("Error in network request: " + req.statusText);
	});
	console.log("payload", payload);
	req.send(JSON.stringify(payload));
}
//populateTable();


// used to send data by post 
function bindButtons(){

	console.log("IM RUNNIN");
	console.log("hello from bindButtons");

	if(document.getElementById("species-page")){
	//species submit
	console.log("species page!");
	populateTable("get-species");
	document.getElementById('submit-data-species').addEventListener('click', function(event){
		console.log("running");
		var req = new XMLHttpRequest();
		var payload = {
			name: null,
			language: null
		};

		payload.name = document.getElementById('name').value;
		payload.language = document.getElementById('language').value;

		console.log("current payload", payload);

		req.open("POST", "http://localhost:3012/insert", true);
		req.setRequestHeader('Content-Type', 'application/json');

		req.addEventListener('load', function() {
			populateTable();
		});
		req.send(JSON.stringify(payload));
		location.reload();
		//event.preventDefault();
	});
}	
	//planets page
	if(document.getElementById("planets-page")){
		populateTable("get-planets");
		console.log("planets page");
		document.getElementById('submit-data-planets').addEventListener('click', function(event){
		console.log("running");
		var req = new XMLHttpRequest();
		var payload = {
			name: null,
			region: null,
			system: null,
			sid: null,
			population: null
		};

		payload.name = document.getElementById('name').value;
		payload.region = document.getElementById('region').value;
		payload.system = document.getElementById('system').value;
		payload.sid = document.getElementById('dropdown-species').value;
		payload.population = document.getElementById('population').value;

		console.log("current payload", payload);

		req.open("POST", "http://localhost:3012/insert-planets", true);
		req.setRequestHeader('Content-Type', 'application/json');

		req.addEventListener('load', function() {
			populateTable();
		});
		console.log("planets payload: ", payload);
		req.send(JSON.stringify(payload));
		//populateDropdown("Species");
		location.reload();
		//populateDropdown("Species");
		//event.preventDefault();
	});
  }

	if(document.getElementById("factions-page")){
		populateTable("get-factions");
		console.log("factions page");
		document.getElementById('submit-data-factions').addEventListener('click', function(event){
		console.log("running");
		var req = new XMLHttpRequest();
		var payload = {
			name: null
		}

		payload.name = document.getElementById('name').value;
		console.log("current payload", payload);

		req.open("POST", "http://localhost:3012/insert-factions", true);
		req.setRequestHeader('Content-Type', 'application/json');

		req.addEventListener('load', function() {
			populateTable();
		});

		console.log("factions payload", payload);
		req.send(JSON.stringify(payload));
		//populateDropdown("Species");
		location.reload();
		//populateDropdown("Species");
		//event.preventDefault();
	});
  }
	if(document.getElementById("ships-page")){
		populateTable("get-ships");
		console.log("ships page");
		document.getElementById('submit-data-ships').addEventListener('click', function(event){
		console.log("running");
		var req = new XMLHttpRequest();
		var payload = {
			name: null,
			class: null,
			crew: null
		}

		payload.name = document.getElementById('name').value;
		payload.class = document.getElementById('class').value;
		payload.crew = document.getElementById('crew').value;

		console.log("current payload", payload);

		req.open("POST", "http://localhost:3012/insert-ships", true);
		req.setRequestHeader('Content-Type', 'application/json');

		req.addEventListener('load', function() {
			populateTable();
		});

		console.log("ships send", payload);
		req.send(JSON.stringify(payload));
		//populateDropdown("Species");
		location.reload();
		//populateDropdown("Species");
		//event.preventDefault();
	});
  }

	if(document.getElementById("characters-page")){
		populateTable("get-characters");
		console.log("planets page");
		document.getElementById('submit-data-characters').addEventListener('click', function(event){
		console.log("running");
		var req = new XMLHttpRequest();
		var payload = {
			f_name: null,
			l_name: null,
			hid: null,
			fid: null,
			sid: null
		};

		payload.f_name = document.getElementById('f_name').value;
		payload.l_name = document.getElementById('l_name').value;
		payload.hid = document.getElementById('dropdown-planets').value;
		payload.fid = document.getElementById('dropdown-factions').value;
		payload.sid = document.getElementById('dropdown-species').value;


		console.log("current payload", payload);

		req.open("POST", "http://localhost:3012/insert-characters", true);
		req.setRequestHeader('Content-Type', 'application/json');

		req.addEventListener('load', function() {
			populateTable();
		});
		console.log("planets payload: ", payload);
		req.send(JSON.stringify(payload));
		//populateDropdown("Species");
		location.reload();
		//populateDropdown("Species");
		//event.preventDefault();
	});
  }

};

/* DROPDOWN MENUS make conditional */
if(document.getElementById("planets-page") || document.getElementById("characters-page"))
	populateDropdown("Species", "dropdown-species");

if(document.getElementById("leaders-page") || document.getElementById("characters-page")
	|| document.getElementById("leaders-page"))
	populateDropdown("Factions", "dropdown-factions");

if(document.getElementById("service-page") || document.getElementById("characters-page"))
	populateDropdown("Planets", "dropdown-planets");

if(document.getElementById("leaders-page"))
	populateDropdown("Characters", "dropdown-characters");
bindButtons();
