
  
const url = 'http://localhost:3000';
var imagepath="";
       $(document).ready(function() {
            $('input[type="file"]').change(function() {
				   
				  imagepath='../Images/'+this.files[0].name;
				 console.log(imagepath+ ' is the selected file.');
                $("img").val(imagepath+ ' is the selected file.');
  
            });
        }); 
		
		var imagepathh="";
		
		$(document).ready(function() {
            $('input[type="file"]').change(function() {
				   
				  imagepathh='../Images/'+this.files[0].name;
				 console.log(imagepathh+ ' is the selected file.');
                $("eimg").val(imagepathh+ ' is the selected file.');
  
            });
        });

function validation() {



	$(document).ready(function () {

		var _fname = document.getElementById("fname").value;
		var _lname = document.getElementById("lname").value;
		var _email = document.getElementById("ema").value;
		var _add = document.getElementById("add").value;
		var _pass = document.getElementById("pass").value;
		var _cpass = document.getElementById("cpass").value;
		var _phno = document.getElementById("phno").value;
	

		if (_fname == "") {
			document.getElementById('fname').innerHTML = alert(" ** Please fill the Firstname field");
			return false;
		}
		else if ((_fname.length <= 2) || (_fname.length > 20)) {
			document.getElementById('fname').innerHTML = alert("**  Firstname length must be between 2 and 20");
			return false;
		}
		else if (!isNaN(_fname)) {
			document.getElementById('fname').innerHTML = alert(" ** only characters are allowed in Firstname field");
			return false;
		}



		else if (_lname == "") {
			document.getElementById('lname').innerHTML = alert(" ** Please fill the lastname field");
			return false;
		}
		else if (_add == "") {
			document.getElementById('add').innerHTML = alert(" ** Please fill the address field");
			return false;
		}

		else if ((_lname.length <= 2) || (_lname.length > 20)) {
			document.getElementById('lname').innerHTML = alert("**  lastname length must be between 2 and 20");
			return false;
		}
		else if (!isNaN(_lname)) {
			document.getElementById('lname').innerHTML = alert(" ** only characters are allowed in lastname field");
			return false;
		}

		else if (_email == "") {
			document.getElementById('emaill').innerHTML = alert(" ** Please fill the email id` field");
			return false;
		}
		else if (_email.indexOf('@') <= 0) {
			document.getElementById('emaill').innerHTML = alert(" ** @ Invalid Position");
			return false;
		}

		else if ((_email.charAt(_email.length - 4) != '.') && (_email.charAt(_email.length - 3) != '.')) {
			document.getElementById('emaill').innerHTML = alert(" ** . Invalid Position");
			return false;
		}


		else if (_pass == "") {
			document.getElementById('pass').innerHTML = alert(" ** Please fill the password field");
			return false;
		}
		else if ((_pass.length <= 5) || (_pass.length > 20)) {
			document.getElementById('pass').innerHTML = alert(" ** Passwords length must be between  5 and 20");
			return false;
		}


		else if (_cpass == "") {
			document.getElementById('cpass').innerHTML = alert(" ** Please fill the confirmpassword field");
			return false;
		}

		else if (_pass != _cpass) {
			document.getElementById('cpass').innerHTML = alert(" ** Password does not match the confirm password");
			return false;
		}

		else if (_phno == "") {
			document.getElementById('phno').innerHTML = alert(" ** Please fill the Phone Number field");
			return false;
		}
		else if (_phno.length != 10) {
			document.getElementById('phno').innerHTML = alert(" ** Phone Number must be 10 digits only");
			return false;
		}
		else {

			var _fname = document.getElementById("fname").value;
			var _lname = document.getElementById("lname").value;
			var _email = document.getElementById("ema").value;
			var _add = document.getElementById("add").value;
			var _pass = document.getElementById("pass").value;
			var _cpass = document.getElementById("cpass").value;
			var _phno = document.getElementById("phno").value;
			

			localStorage.setItem("fname", _fname);
			localStorage.setItem("lname", _lname);
			localStorage.setItem("pass", _pass);
			localStorage.setItem("cpass", _cpass);
			localStorage.setItem("email", _email);
			localStorage.setItem("phno", _phno);
			localStorage.setItem("address", _add);
			
		

		



			$('#clikk').click(() => {
				console.log('Inserting a customer');

				const emal = $('#ema').val();
				const fname = $('#fname').val();
				const lname = $('#lname').val();
				const add = $('#add').val();
				const pass = $('#pass').val();
				const cpass = $('#cpass').val();
				const phno = $('#phno').val();

				const register = new Register(emal, fname, lname, add, pass, cpass, phno);

				console.log(register);

				$.post(url + '/register', register, (res) => {
					console.log("Created ", res)
					alert(res.message);
					if(res.errorcode=="200"){
						window.location="Home.html";
					}
				});
			});

			


			return false;

		}
	});

}


function loginn() {
	$(document).ready(function () {


		var _email = document.getElementById("email").value;
		var _pass = document.getElementById("password").value

		if (_email == "") {
			document.getElementById('email').innerHTML = alert(" ** Please fill the email id` field");
			return false;
		}

		else if (_email.indexOf('@') <= 0) {
			document.getElementById('email').innerHTML = alert(" ** missing or  Invalid @  Position");
			return false;
		}

		else if (_pass == "") {
			document.getElementById('password').innerHTML = alert(" ** Please fill the password field");
			return false;
		}
		else if ((_pass.length <= 5) || (_pass.length > 20)) {
			document.getElementById('password').innerHTML = alert(" ** Passwords length must be between  5 and 20");
			return false;
		}


		else {

			$('#loginclick').click(() => {
				console.log('login customer');

				const email = $('#email').val();
				const pass = $('#password').val();

				

				const login = new Login(email, pass);

				console.log(login);

				$.get(url + '/login', login, (res) => {
					console.log("Login ", res)
					alert(res.message);
					if (res.errorcode == "200") {
						localStorage.setItem("email_login",email);
		             
						window.location = "Home.html";
					}

				});
			});


		}



	});
}





function adminLoginn() {
	$(document).ready(function () {


		var _email = document.getElementById("email").value;
		var _pass = document.getElementById("password").value

		if (_email == "") {
			document.getElementById('email').innerHTML = alert(" ** Please fill the email id` field");
			return false;
		}

		else if (_email.indexOf('@') <= 0) {
			document.getElementById('email').innerHTML = alert(" ** missing or  Invalid @  Position");
			return false;
		}

		else if (_pass == "") {
			document.getElementById('password').innerHTML = alert(" ** Please fill the password field");
			return false;
		}
		else if ((_pass.length <= 5) || (_pass.length > 20)) {
			document.getElementById('password').innerHTML = alert(" ** Passwords length must be between  5 and 20");
			return false;
		}


		else {

			$('#loginclick').click(() => {
				console.log('login customer');

				const email = $('#email').val();
				const pass = $('#password').val();


				const adminlogin = new AdminLogin(email, pass);

				console.log(adminlogin);

				$.post(url + '/adminloginn', adminlogin, (res) => {
					console.log("adminLogin ", res)
					if (res.errorcode == "200") {
						   alert("admin login successfull");
							window.location="addcars.html"
					}
					else{
						alert(res.message);
					}
				

				});
			});

		}



	});
	
}


	
	function addCars(){
		
		 $(document).ready(function () {
		var brand=document.getElementById("brand").value;
		var model=document.getElementById("model").value;
		var price=document.getElementById("price").value;
		var color=document.getElementById("color").value;
		var year=document.getElementById("year").value;
		var type=document.getElementById("type").value;
		var img=document.getElementById("img").files[0].mozFullPath;
		
		
		if(brand == ""){
				document.getElementById('brand').innerHTML =alert(" ** Please fill the brand field");
				return false;
			}
			else if(!isNaN(brand)){
				document.getElementById('brand').innerHTML =alert(" ** only characters are allowed in brandname field" );
				return false;
			} 
			else if(model == ""){
				document.getElementById('model').innerHTML =alert(" ** Please fill the model field");
				return false;
			}
			else if(!isNaN(model)){
				document.getElementById('model').innerHTML =alert(" ** only characters are allowed in model field" );
				return false;
			}
			 
			 else if(price == ""){
				document.getElementById('price').innerHTML =alert(" ** Please fill the price field");
				return false;
			}
			else if(color == ""){
				document.getElementById('color').innerHTML =alert(" ** Please fill the color field");
				return false;
			}

	       else if(year== ""){
				document.getElementById('year').innerHTML =alert(" ** Please fill the year field");
				return false;
			}
			
				else if(type == ""){
				document.getElementById('type').innerHTML =alert(" ** Please fill the type field");
				return false;
			}
	
			else if(img == ""){
				document.getElementById('img').innerHTML =alert(" ** Please fill the img field");
				return false;
			}
			else{
				
				
					$('#ad').click(() => {
				console.log('Inserting a car');
				
					const brand =  $('#brand').val();
	                const model =  $('#model').val();
	                const price =  $('#price').val();
	                const color =  $('#color').val();
	                const year =  $('#year').val();
	                const type =  $('#type').val();
 	                
			

				const addcar = new AddCar(brand ,model,price,color,year,type,imagepath);

				console.log(addcar);

				$.post(url + '/AddCar', addcar, (res) => {
					console.log("Added", res)
					alert("Car Added sucessfully");
				});
			});

			//window.location="Thankyou.html";
			//	window.location="Home.html";


			return false;
		
		
		
				
			}
			
		 });
		
		
		

	}

function editCars(){
		
		 $(document).ready(function () {
		var id = document.getElementById("cid").value;	 
		var brand=document.getElementById("ebrand").value;
		var model=document.getElementById("emodel").value;
		var price=document.getElementById("eprice").value;
		var color=document.getElementById("ecolor").value;
		var year=document.getElementById("eyear").value;
		var type=document.getElementById("etype").value;
		var img=document.getElementById("eimg").value;
		
		
		if(brand == ""){
				document.getElementById('ebrand').innerHTML =alert(" ** Please fill the  brand name field");
				return false;
			}
			else if(!isNaN(brand)){
				document.getElementById('ebrand').innerHTML =alert(" ** only characters are allowed in brandname field" );
				return false;
			} 
			else if(model == ""){
				document.getElementById('emodel').innerHTML =alert(" ** Please fill the model field");
				return false;
			}
			else if(!isNaN(model)){
				document.getElementById('emodel').innerHTML =alert(" ** only characters are allowed in model field" );
				return false;
			}
			 
			 else if(price == ""){
				document.getElementById('eprice').innerHTML =alert(" ** Please fill the price field");
				return false;
			}
			else if(color == ""){
				document.getElementById('ecolor').innerHTML =alert(" ** Please fill the color field");
				return false;
			}

	       else if(year== ""){
				document.getElementById('eyear').innerHTML =alert(" ** Please fill the year field");
				return false;
			}
			
				else if(type == ""){
				document.getElementById('etype').innerHTML =alert(" ** Please fill the type field");
				return false;
			}
	
			else if(img == ""){
				document.getElementById('eimg').innerHTML =alert(" ** Please fill the img field");
				return false;
			}
			else{
				
				
					$('#edt').click(() => {
				console.log('Edited a car');
				
				
				    const cid =  $('#cid').val();
					const brand =  $('#ebrand').val();
	                const model =  $('#emodel').val();
	                const price =  $('#eprice').val();
	                const color =  $('#ecolor').val();
	                const year =  $('#eyear').val();
	                const type =  $('#etype').val();
 	                const img = $('#eimg').val();
			

				const editcar = new EditCar(cid,brand ,model,price,color,year,type,imagepathh);

				console.log(editcar);

				$.ajax({
			url: url + `/editCar/${id}`,
			type: 'PUT',
			data: editcar,
			success: (res) => {
			  console.log('put response', res)
			  alert("Car updated sucessfully");
			},
			error: (err) => {
				
				console.log('put error', err)
			}
		});
			});

			//window.location="Thankyou.html";
			//	window.location="Home.html";


			return false;
				
			}
			
		 });
		
	}
	function deleteCars(){
		 $(document).ready(function () {
		
	// Delete Car
	$('#iddd').click(() => {
		console.log('Deleting a car');
		const id = $('#delid').val();

		$.ajax({
			url: url + `/deleteCar/${id}`,
			type: 'DELETE',
			success: (res) => {
				alert(res.message);
			  console.log('delete response', res)
			},
			error: (err) => {
				// alert("Invalid Id");
			 console.log('delete error', err)
			}
			
		});
	});
		 });
	}
	
		
		
		function viewCars(){
		 $(document).ready(function () {
			// Get All cars by id
	 $('#vcar').click(() => {
		const id = $('#vid').val();
		console.log(`Requesting car with id ${id}`);

		$.get(url + `/viewCar/${id}`, (res) => {
			// res is an array!
			
			if(res.errorcode!="403"){
				const viewcar = ViewCar.fromRow(res[0]);
			console.log('data:', viewcar);
			
			const InvtId = viewcar.InvtId;
			
            const brand = viewcar.brand;
			
			 const model = viewcar.model;
			  const price = viewcar.price;
			   const color = viewcar.color;
			    const year = viewcar.year;
				 const type = viewcar.type;
				  const Image = viewcar.Image;
			


			
			
const table = document.getElementById('table1');

const tbody= table.getElementsByTagName('tbody')[0];

const row = tbody.insertRow(tbody.rows.length);

const viewCars= new ViewCar(InvtId,brand,model,price,color,year,type,Image);
console.log(viewCars.writeValue());
const cell1 = row.insertCell(0);
const cell2 = row.insertCell(1);
const cell3 = row.insertCell(2);
const cell4 = row.insertCell(3);
const cell5 = row.insertCell(4);
const cell6 = row.insertCell(5);
const cell7 = row.insertCell(6);
const cell8 = row.insertCell(7);
cell1.innerHTML = viewCars.InvtId;
cell2.innerHTML = viewCars.brand;
cell3.innerHTML =  viewCars.model;
cell4.innerHTML = viewCars.price; 
cell5.innerHTML = viewCars.color;
cell6.innerHTML = viewCars.year;
cell7.innerHTML =  viewCars.type;
cell8.innerHTML = `<img style="width:150px;height:150px;"  src= "${viewCars.Image}";/>`;
 }
else{
	alert(res.message);
}
		});	
		});
		// alert("Invalid Id");
	});
	
	
	}
		

		
		
		

		
		
