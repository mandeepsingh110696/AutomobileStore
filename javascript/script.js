
  
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

			var _phno = document.getElementById("phno").value;
			

			localStorage.setItem("fname", _fname);
			localStorage.setItem("lname", _lname);
			localStorage.setItem("pass", _pass);
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
				const phno = $('#phno').val();

				const register = new Register(emal, fname, lname, add, pass,phno);

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
		var desc=document.getElementById("desc").value;
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
			else if(desc == ""){
				document.getElementById('desc').innerHTML =alert(" ** Please fill the description field");
				return false;
			}
	
			else if(img == ""){
				document.getElementById('img').innerHTML =alert(" ** Please select the image");
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
					const desc =  $('#desc').val();
 	                
			

				const addcar = new AddCar(brand ,model,price,color,year,type,desc,imagepath);

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
		var type=document.getElementById("edesc").value;
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
					const desc =  $('#edesc').val();
 	                const img = $('#eimg').val();
			

				const editcar = new EditCar(cid,brand ,model,price,color,year,type,desc,imagepathh);

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
				  const desc = viewcar.desc;
				  const Image = viewcar.Image;
			


			
			
const table = document.getElementById('table1');

const tbody= table.getElementsByTagName('tbody')[0];

const row = tbody.insertRow(tbody.rows.length);

const viewCars= new ViewCar(InvtId,brand,model,price,color,year,type,desc,Image);
console.log(viewCars.writeValue());
const cell1 = row.insertCell(0);
const cell2 = row.insertCell(1);
const cell3 = row.insertCell(2);
const cell4 = row.insertCell(3);
const cell5 = row.insertCell(4);
const cell6 = row.insertCell(5);
const cell7 = row.insertCell(6);
const cell8 = row.insertCell(7);
const cell9 = row.insertCell(8);
cell1.innerHTML = viewCars.InvtId;
cell2.innerHTML = viewCars.brand;
cell3.innerHTML =  viewCars.model;
cell4.innerHTML = viewCars.price; 
cell5.innerHTML = viewCars.color;
cell6.innerHTML = viewCars.year;
cell7.innerHTML =  viewCars.type;
cell8.innerHTML =  viewCars.desc;
cell9.innerHTML = `<img style="width:150px;height:150px;"  src= "${viewCars.Image}";/>`;
 }
else{
	alert(res.message);
}
		});	
		});
		// alert("Invalid Id");
	});
	
	
	}





		function testDrive(opt){
			if(opt==1){
		   testdrive1(opt);	
		   
		}
		if(opt==2){
			testdrive2(opt);	
		}
		
		if(opt==3){
			testdrive3(opt);
		}
		
		if(opt==4){
			testdrive4(opt);
		}
		
		if(opt==5){
			testdrive5(opt);
		}
		
		if(opt==6){
			testdrive6(opt);
		}
		
		if(opt==7){
			testdrive7(opt);
		}
		
		if(opt==8){
			testdrive8(opt);
		}
		
		
			window.location="testdrive.html";
		}
		
		
		
		function testdrive1(opt){
		debugger
		var carcode=document.getElementById("carcode1").innerHTML;
		var brand=document.getElementById("brand1").innerHTML;
		var model=document.getElementById("model1").innerHTML;
		var price=document.getElementById("price1").innerHTML;
		var color=document.getElementById("color1").innerHTML;
		var year=document.getElementById("year1").innerHTML;
		var type=document.getElementById("type1").innerHTML;
		var desc=document.getElementById("desc1").innerHTML;
		
		 var email =localStorage.getItem("email_login");
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand1",brand);
		localStorage.setItem("model1",model);
		localStorage.setItem("price1",price);
		localStorage.setItem("color1",color);
		localStorage.setItem("year1",year);
		localStorage.setItem("type1",type);
		localStorage.setItem("desc1",desc);
		localStorage.setItem("opt",opt);
		localStorage.setItem("email_login",email);
		
		
		
		window.location="testdrive.html";
		
		return false;
	}
		
		
		
		function testdrive2(opt){
		
		
		debugger
		var carcode=document.getElementById("carcode2").innerHTML;
		var brand2=document.getElementById("brand2").innerHTML;
		var model2=document.getElementById("model2").innerHTML;
		var price2=document.getElementById("price2").innerHTML;
		var color2=document.getElementById("color2").innerHTML;
		var year2=document.getElementById("year2").innerHTML;
		var type2=document.getElementById("type2").innerHTML;
		var desc2=document.getElementById("desc2").innerHTML;
		
		
		 var email =localStorage.getItem("email_login");
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand2",brand2);
		localStorage.setItem("model2",model2);
		localStorage.setItem("price2",price2);
		localStorage.setItem("color2",color2);
		localStorage.setItem("year2",year2);
		localStorage.setItem("type2",type2);
		localStorage.setItem("desc2",desc2);
		localStorage.setItem("opt",opt);
			localStorage.setItem("email_login",email);
			window.location="testdrive.html";
		
		return false;
	}
		
		
		
		function testdrive3(opt){
		
	debugger
		var carcode=document.getElementById("carcode3").innerHTML;
		var brand3=document.getElementById("brand3").innerHTML;
		var model3=document.getElementById("model3").innerHTML;
		var price3=document.getElementById("price3").innerHTML;
		var color3=document.getElementById("color3").innerHTML;
		var year3=document.getElementById("year3").innerHTML;
		var type3=document.getElementById("type3").innerHTML;
		var desc3=document.getElementById("desc3").innerHTML;
		 var email =localStorage.getItem("email_login");
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand3",brand3);
		localStorage.setItem("model3",model3);
		localStorage.setItem("price3",price3);
		localStorage.setItem("color3",color3);
		localStorage.setItem("year3",year3);
		localStorage.setItem("type3",type3);
		localStorage.setItem("desc3",desc3);
		localStorage.setItem("opt",opt);
		localStorage.setItem("email_login",email);
			window.location="testdrive.html";
		
		return false;
	}
	
	function testdrive4(opt){
		
		
			debugger
				var carcode=document.getElementById("carcode4").innerHTML;
		var brand4=document.getElementById("brand4").innerHTML;
		var model4=document.getElementById("model4").innerHTML;
		var price4=document.getElementById("price4").innerHTML;
		var color4=document.getElementById("color4").innerHTML;
		var year4=document.getElementById("year4").innerHTML;
		var type4=document.getElementById("type4").innerHTML;
		var desc4=document.getElementById("desc4").innerHTML;
		 var email =localStorage.getItem("email_login");
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand4",brand4);
		localStorage.setItem("model4",model4);
		localStorage.setItem("price4",price4);
		localStorage.setItem("color4",color4);
		localStorage.setItem("year4",year4);
		localStorage.setItem("type4",type4);
		localStorage.setItem("desc4",desc4);
		localStorage.setItem("opt",opt);
		localStorage.setItem("email_login",email);
		window.location="testdrive.html";
		
		return false;
	}
	
	function testdrive5(opt){
		
		
		debugger
			var carcode=document.getElementById("carcode5").innerHTML;
		var brand5=document.getElementById("brand5").innerHTML;
		var model5=document.getElementById("model5").innerHTML;
		var price5=document.getElementById("price5").innerHTML;
		var color5=document.getElementById("color5").innerHTML;
		var year5=document.getElementById("year5").innerHTML;
		var type5=document.getElementById("type5").innerHTML;
		var type5=document.getElementById("type5").innerHTML;
		 var email =localStorage.getItem("email_login");
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand5",brand5);
		localStorage.setItem("model5",model5);
		localStorage.setItem("price5",price5);
		localStorage.setItem("color5",color5);
		localStorage.setItem("year5",year5);
		localStorage.setItem("type5",type5);
		localStorage.setItem("desc5",desc5);
		localStorage.setItem("opt",opt);
		localStorage.setItem("email_login",email);
			window.location="testdrive.html";
		
		return false;
	}
	function testdrive6(opt){
		
		
		debugger
			var carcode=document.getElementById("carcode6").innerHTML;
		var brand6=document.getElementById("brand6").innerHTML;
		var model6=document.getElementById("model6").innerHTML;
		var price6=document.getElementById("price6").innerHTML;
		var color6=document.getElementById("color6").innerHTML;
		var year6=document.getElementById("year6").innerHTML;
		var type6=document.getElementById("type6").innerHTML;
		var desc6=document.getElementById("desc6").innerHTML;
		 var email =localStorage.getItem("email_login");
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand6",brand6);
		localStorage.setItem("model6",model6);
		localStorage.setItem("price6",price6);
		localStorage.setItem("color6",color6);
		localStorage.setItem("year6",year6);
		localStorage.setItem("type6",type6);
		localStorage.setItem("desc6",desc6);
		localStorage.setItem("opt",opt);
		localStorage.setItem("email_login",email);
			window.location="testdrive.html";
		
		return false;
	}
	
	function testdrive7(opt){
		
		
			debugger
				var carcode=document.getElementById("carcode7").innerHTML;
		var brand7=document.getElementById("brand7").innerHTML;
		var model7=document.getElementById("model7").innerHTML;
		var price7=document.getElementById("price7").innerHTML;
		var color7=document.getElementById("color7").innerHTML;
		var year7=document.getElementById("year7").innerHTML;
		var type7=document.getElementById("type7").innerHTML;
		var desc7=document.getElementById("desc7").innerHTML;
		 var email =localStorage.getItem("email_login");
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand7",brand7);
		localStorage.setItem("model7",model7);
		localStorage.setItem("price7",price7);
		localStorage.setItem("color7",color7);
		localStorage.setItem("year7",year7);
		localStorage.setItem("type7",type7);
		localStorage.setItem("desc7",desc7);
		localStorage.setItem("opt",opt);
		localStorage.setItem("email_login",email);
			window.location="testdrive.html";
		
		return false;
	}
	
	function testdrive8(opt){
		
	debugger
		var carcode=document.getElementById("carcode8").innerHTML;
		var brand8=document.getElementById("brand8").innerHTML;
		var model8=document.getElementById("model8").innerHTML;
		var price8=document.getElementById("price8").innerHTML;
		var color8=document.getElementById("color8").innerHTML;
		var year8=document.getElementById("year8").innerHTML;
		var type8=document.getElementById("type8").innerHTML;
		var desc8=document.getElementById("desc8").innerHTML;
		 var email =localStorage.getItem("email_login");
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand8",brand8);
		localStorage.setItem("model8",model8);
		localStorage.setItem("price8",price8);
		localStorage.setItem("color8",color8);
		localStorage.setItem("year8",year8);
		localStorage.setItem("type8",type8);
		localStorage.setItem("desc8",desc8);
		localStorage.setItem("opt8",opt);
		localStorage.setItem("email_login",email);
			window.location="testdrive.html";
		
		return false;
	}











	function viewCarss(){
		 $(document).ready(function () {
		
	 
	
		console.log('Getting all customers')
		$.get('http://localhost:3000/viewAllCars/all', (res) => {
			console.log('data:', res);
		    for(const customers in res){
			const viewcar = ViewCarss.fromRow(res[customers]);
			console.log('data:', viewcar);
			
			const InvtId = viewcar.InvtId;
			
            const brand = viewcar.brand;
			
			 const model = viewcar.model;
			  const price = viewcar.price;
			   const color = viewcar.color;
			    const year = viewcar.year;
				 const type = viewcar.type;
				 const desc = viewcar.desc;
				  const Image = viewcar.Image;
			


			
			
const table = document.getElementById('table1');

const tbody= table.getElementsByTagName('tbody')[0];

const row = tbody.insertRow(tbody.rows.length);

const viewCars= new ViewCarss(InvtId,brand,model,price,color,year,type,desc,Image);
console.log(viewCars.writeValue());
const cell1 = row.insertCell(0);
const cell2 = row.insertCell(1);
const cell3 = row.insertCell(2);
const cell4 = row.insertCell(3);
const cell5 = row.insertCell(4);
const cell6 = row.insertCell(5);
const cell7 = row.insertCell(6);
const cell8 = row.insertCell(7);
const cell9 = row.insertCell(8);
const cell10 = row.insertCell(9);
const cell11 = row.insertCell(10);
cell1.innerHTML = viewCars.InvtId;
cell2.innerHTML = viewCars.brand;
cell3.innerHTML =  viewCars.model;
cell4.innerHTML = viewCars.price; 
cell5.innerHTML = viewCars.color;
cell6.innerHTML = viewCars.year;
cell7.innerHTML =  viewCars.type;
cell8.innerHTML =  viewCars.desc;
cell9.innerHTML = `<img style="width:150px;height:150px;"  src= "${viewCars.Image}";/>`;
cell10.innerHTML = "<button type='button' onclick=\"editCarNew(\'" + InvtId + "\',\'" + brand + "\',\'" + model + "\',\'" + price + "\',\'" + color + "\',\'" + year + "\',\'" + type + "\',\'" + desc + "\')\">Edit</button>";
cell11.innerHTML =   "<button type='button' onclick=\"deleteCarNew(\'" + InvtId + "\')\">Delete</button>";
			}

			
			
		});
	});
	
	
	
	}







	
	
	
	
	function deleteCarNew(id){
		console.log('Deleting a car');

		$.ajax({
			url: url + `/deleteCar/${id}`,
			type: 'DELETE',
			success: (res) => {
				alert(res.message);
				location.reload();
			  console.log('delete response', res)
			},
			error: (err) => {
				// alert("Invalid Id");
			 console.log('delete error', err)
			}
			
		});
		
	}
	
	function editCarNew(id,brand, model,price,color,year,type,desc){
		localStorage.setItem("selected_cars_id",id);
		localStorage.setItem("brandedit",brand);
		localStorage.setItem("brandmodel",model);
		localStorage.setItem("brandprice",price);
		localStorage.setItem("brandcolor",color);
		localStorage.setItem("brandyear",year);
		localStorage.setItem("brandtype",type);
		localStorage.setItem("branddesc",desc);
		window.location="editcars.html";
		
		
	}
	
	
	


	
	function parseValues(opt){
		if(opt==1){
		passValues(opt);	
		}
		if(opt==2){
			passValuesTwo(opt);
		}
		
		if(opt==3){
			passValuesThree(opt);
		}
		
		if(opt==4){
			passValuesFour(opt);
		}
		
		if(opt==5){
			passValuesFive(opt);
		}
		
		if(opt==6){
			passValuesSix(opt);
		}
		
		if(opt==7){
			passValuesSeven(opt);
		}
		
		if(opt==8){
			passValuesEight(opt);
		}
		
		
	}

function passValues(opt){
	
		debugger
		var carcode=document.getElementById("carcode1").innerHTML;
		var brand=document.getElementById("brand1").innerHTML;
		var model=document.getElementById("model1").innerHTML;
		var price=document.getElementById("price1").innerHTML;
		var color=document.getElementById("color1").innerHTML;
		var year=document.getElementById("year1").innerHTML;
		var type=document.getElementById("type1").innerHTML;
		var desc=document.getElementById("desc1").innerHTML;
		
		
		 var email =localStorage.getItem("email_login");
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand1",brand);
		localStorage.setItem("model1",model);
		localStorage.setItem("price1",price);
		localStorage.setItem("color1",color);
		localStorage.setItem("year1",year);
		localStorage.setItem("type1",type);
		localStorage.setItem("desc1",desc);
		localStorage.setItem("opt",opt);
		localStorage.setItem("email_login",email);
		window.location="Booking.html";
		
		
		
		
		return false;
	}
	
	function passValuesTwo(opt){
		
		
		debugger
		var carcode=document.getElementById("carcode2").innerHTML;
		var brand2=document.getElementById("brand2").innerHTML;
		var model2=document.getElementById("model2").innerHTML;
		var price2=document.getElementById("price2").innerHTML;
		var color2=document.getElementById("color2").innerHTML;
		var year2=document.getElementById("year2").innerHTML;
		var type2=document.getElementById("type2").innerHTML;
		var desc2=document.getElementById("desc2").innerHTML;
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand2",brand2);
		localStorage.setItem("model2",model2);
		localStorage.setItem("price2",price2);
		localStorage.setItem("color2",color2);
		localStorage.setItem("year2",year2);
		localStorage.setItem("type2",type2);
		localStorage.setItem("desc2",desc2);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
	function passValuesThree(opt){
		
	debugger
		var carcode=document.getElementById("carcode3").innerHTML;
		var brand3=document.getElementById("brand3").innerHTML;
		var model3=document.getElementById("model3").innerHTML;
		var price3=document.getElementById("price3").innerHTML;
		var color3=document.getElementById("color3").innerHTML;
		var year3=document.getElementById("year3").innerHTML;
		var type3=document.getElementById("type3").innerHTML;
		var desc3=document.getElementById("desc3").innerHTML;
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand3",brand3);
		localStorage.setItem("model3",model3);
		localStorage.setItem("price3",price3);
		localStorage.setItem("color3",color3);
		localStorage.setItem("year3",year3);
		localStorage.setItem("type3",type3);
		localStorage.setItem("desc3",desc3);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
	
	function passValuesFour(opt){
		
		
			debugger
				var carcode=document.getElementById("carcode4").innerHTML;
		var brand4=document.getElementById("brand4").innerHTML;
		var model4=document.getElementById("model4").innerHTML;
		var price4=document.getElementById("price4").innerHTML;
		var color4=document.getElementById("color4").innerHTML;
		var year4=document.getElementById("year4").innerHTML;
		var type4=document.getElementById("type4").innerHTML;
		var desc4=document.getElementById("desc4").innerHTML;
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand4",brand4);
		localStorage.setItem("model4",model4);
		localStorage.setItem("price4",price4);
		localStorage.setItem("color4",color4);
		localStorage.setItem("year4",year4);
		localStorage.setItem("type4",type4);
		localStorage.setItem("desc4",desc4);
		localStorage.setItem("opt",opt);
		window.location="Booking.html";
		
		return false;
	}
	
	function passValuesFive(opt){
		
		
		debugger
			var carcode=document.getElementById("carcode5").innerHTML;
		var brand5=document.getElementById("brand5").innerHTML;
		var model5=document.getElementById("model5").innerHTML;
		var price5=document.getElementById("price5").innerHTML;
		var color5=document.getElementById("color5").innerHTML;
		var year5=document.getElementById("year5").innerHTML;
		var type5=document.getElementById("type5").innerHTML;
		var desc5=document.getElementById("desc5").innerHTML;
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand5",brand5);
		localStorage.setItem("model5",model5);
		localStorage.setItem("price5",price5);
		localStorage.setItem("color5",color5);
		localStorage.setItem("year5",year5);
		localStorage.setItem("type5",type5);
		localStorage.setItem("desc5",desc5);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
	function passValuesSix(opt){
		
		
		debugger
			var carcode=document.getElementById("carcode6").innerHTML;
		var brand6=document.getElementById("brand6").innerHTML;
		var model6=document.getElementById("model6").innerHTML;
		var price6=document.getElementById("price6").innerHTML;
		var color6=document.getElementById("color6").innerHTML;
		var year6=document.getElementById("year6").innerHTML;
		var type6=document.getElementById("type6").innerHTML;
		var desc6=document.getElementById("desc6").innerHTML;
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand6",brand6);
		localStorage.setItem("model6",model6);
		localStorage.setItem("price6",price6);
		localStorage.setItem("color6",color6);
		localStorage.setItem("year6",year6);
		localStorage.setItem("type6",type6);
		localStorage.setItem("desc6",desc6);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
	
	function passValuesSeven(opt){
		
		
			debugger
				var carcode=document.getElementById("carcode7").innerHTML;
		var brand7=document.getElementById("brand7").innerHTML;
		var model7=document.getElementById("model7").innerHTML;
		var price7=document.getElementById("price7").innerHTML;
		var color7=document.getElementById("color7").innerHTML;
		var year7=document.getElementById("year7").innerHTML;
		var type7=document.getElementById("type7").innerHTML;
		var desc7=document.getElementById("desc7").innerHTML;
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand7",brand7);
		localStorage.setItem("model7",model7);
		localStorage.setItem("price7",price7);
		localStorage.setItem("color7",color7);
		localStorage.setItem("year7",year7);
		localStorage.setItem("type7",type7);
		localStorage.setItem("desc7",desc7);
		
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
	
	function passValuesEight(opt){
		
	debugger
		var carcode=document.getElementById("carcode8").innerHTML;
		var brand8=document.getElementById("brand8").innerHTML;
		var model8=document.getElementById("model8").innerHTML;
		var price8=document.getElementById("price8").innerHTML;
		var color8=document.getElementById("color8").innerHTML;
		var year8=document.getElementById("year8").innerHTML;
		var type8=document.getElementById("type8").innerHTML;
		var desc8=document.getElementById("desc8").innerHTML;
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand8",brand8);
		localStorage.setItem("model8",model8);
		localStorage.setItem("price8",price8);
		localStorage.setItem("color8",color8);
		localStorage.setItem("year8",year8);
		localStorage.setItem("type8",type8);
		localStorage.setItem("desc8",desc8);
		localStorage.setItem("opt8",opt);
			window.location="Booking.html";
		
		return false;
	}
	
	
	
	/* 	function testDrive(opt){
			if(opt==1){
		   testdrive1(opt);	
		   
		}
		if(opt==2){
			testdrive2(opt);	
		}
		
		if(opt==3){
			testdrive3(opt);
		}
		
		if(opt==4){
			testdrive4(opt);
		}
		
		if(opt==5){
			testdrive5(opt);
		}
		
		if(opt==6){
			testdrive6(opt);
		}
		
		if(opt==7){
			testdrive7(opt);
		}
		
		if(opt==8){
			testdrive8(opt);
		}
		
		
			window.location="testdrive.html";
		}
		
		
		
		function testdrive1(opt){
		debugger
		var carcode=document.getElementById("carcode1").innerHTML;
		var brand=document.getElementById("brand1").innerHTML;
		var model=document.getElementById("model1").innerHTML;
		var price=document.getElementById("price1").innerHTML;
		var color=document.getElementById("color1").innerHTML;
		var year=document.getElementById("year1").innerHTML;
		var type=document.getElementById("type1").innerHTML;
		
		 var email =localStorage.getItem("email_login");
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand1",brand);
		localStorage.setItem("model1",model);
		localStorage.setItem("price1",price);
		localStorage.setItem("color1",color);
		localStorage.setItem("year1",year);
		localStorage.setItem("type1",type);
		localStorage.setItem("opt",opt);
		localStorage.setItem("email_login",email);
		
		
		
		window.location="testdrive.html";
		
		return false;
	}
		
		
		
		function testdrive2(opt){
		
		
		debugger
		var carcode=document.getElementById("carcode2").innerHTML;
		var brand2=document.getElementById("brand2").innerHTML;
		var model2=document.getElementById("model2").innerHTML;
		var price2=document.getElementById("price2").innerHTML;
		var color2=document.getElementById("color2").innerHTML;
		var year2=document.getElementById("year2").innerHTML;
		var type2=document.getElementById("type2").innerHTML;
		
		
		 var email =localStorage.getItem("email_login");
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand2",brand2);
		localStorage.setItem("model2",model2);
		localStorage.setItem("price2",price2);
		localStorage.setItem("color2",color2);
		localStorage.setItem("year2",year2);
		localStorage.setItem("type2",type2);
		localStorage.setItem("opt",opt);
			localStorage.setItem("email_login",email);
			window.location="testdrive.html";
		
		return false;
	}
		
		
		
		function testdrive3(opt){
		
	debugger
		var carcode=document.getElementById("carcode3").innerHTML;
		var brand3=document.getElementById("brand3").innerHTML;
		var model3=document.getElementById("model3").innerHTML;
		var price3=document.getElementById("price3").innerHTML;
		var color3=document.getElementById("color3").innerHTML;
		var year3=document.getElementById("year3").innerHTML;
		var type3=document.getElementById("type3").innerHTML;
		 var email =localStorage.getItem("email_login");
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand3",brand3);
		localStorage.setItem("model3",model3);
		localStorage.setItem("price3",price3);
		localStorage.setItem("color3",color3);
		localStorage.setItem("year3",year3);
		localStorage.setItem("type3",type3);
		localStorage.setItem("opt",opt);
		localStorage.setItem("email_login",email);
			window.location="testdrive.html";
		
		return false;
	}
	
	function testdrive4(opt){
		
		
			debugger
				var carcode=document.getElementById("carcode4").innerHTML;
		var brand4=document.getElementById("brand4").innerHTML;
		var model4=document.getElementById("model4").innerHTML;
		var price4=document.getElementById("price4").innerHTML;
		var color4=document.getElementById("color4").innerHTML;
		var year4=document.getElementById("year4").innerHTML;
		var type4=document.getElementById("type4").innerHTML;
		 var email =localStorage.getItem("email_login");
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand4",brand4);
		localStorage.setItem("model4",model4);
		localStorage.setItem("price4",price4);
		localStorage.setItem("color4",color4);
		localStorage.setItem("year4",year4);
		localStorage.setItem("type4",type4);
		localStorage.setItem("opt",opt);
		localStorage.setItem("email_login",email);
		window.location="testdrive.html";
		
		return false;
	}
	
	function testdrive5(opt){
		
		
		debugger
			var carcode=document.getElementById("carcode5").innerHTML;
		var brand5=document.getElementById("brand5").innerHTML;
		var model5=document.getElementById("model5").innerHTML;
		var price5=document.getElementById("price5").innerHTML;
		var color5=document.getElementById("color5").innerHTML;
		var year5=document.getElementById("year5").innerHTML;
		var type5=document.getElementById("type5").innerHTML;
		 var email =localStorage.getItem("email_login");
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand5",brand5);
		localStorage.setItem("model5",model5);
		localStorage.setItem("price5",price5);
		localStorage.setItem("color5",color5);
		localStorage.setItem("year5",year5);
		localStorage.setItem("type5",type5);
		localStorage.setItem("opt",opt);
		localStorage.setItem("email_login",email);
			window.location="testdrive.html";
		
		return false;
	}
	function testdrive6(opt){
		
		
		debugger
			var carcode=document.getElementById("carcode6").innerHTML;
		var brand6=document.getElementById("brand6").innerHTML;
		var model6=document.getElementById("model6").innerHTML;
		var price6=document.getElementById("price6").innerHTML;
		var color6=document.getElementById("color6").innerHTML;
		var year6=document.getElementById("year6").innerHTML;
		var type6=document.getElementById("type6").innerHTML;
		 var email =localStorage.getItem("email_login");
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand6",brand6);
		localStorage.setItem("model6",model6);
		localStorage.setItem("price6",price6);
		localStorage.setItem("color6",color6);
		localStorage.setItem("year6",year6);
		localStorage.setItem("type6",type6);
		localStorage.setItem("opt",opt);
		localStorage.setItem("email_login",email);
			window.location="testdrive.html";
		
		return false;
	}
	
	function testdrive7(opt){
		
		
			debugger
				var carcode=document.getElementById("carcode7").innerHTML;
		var brand7=document.getElementById("brand7").innerHTML;
		var model7=document.getElementById("model7").innerHTML;
		var price7=document.getElementById("price7").innerHTML;
		var color7=document.getElementById("color7").innerHTML;
		var year7=document.getElementById("year7").innerHTML;
		var type7=document.getElementById("type7").innerHTML;
		 var email =localStorage.getItem("email_login");
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand7",brand7);
		localStorage.setItem("model7",model7);
		localStorage.setItem("price7",price7);
		localStorage.setItem("color7",color7);
		localStorage.setItem("year7",year7);
		localStorage.setItem("type7",type7);
		localStorage.setItem("opt",opt);
		localStorage.setItem("email_login",email);
			window.location="testdrive.html";
		
		return false;
	}
	
	function testdrive8(opt){
		
	debugger
		var carcode=document.getElementById("carcode8").innerHTML;
		var brand8=document.getElementById("brand8").innerHTML;
		var model8=document.getElementById("model8").innerHTML;
		var price8=document.getElementById("price8").innerHTML;
		var color8=document.getElementById("color8").innerHTML;
		var year8=document.getElementById("year8").innerHTML;
		var type8=document.getElementById("type8").innerHTML;
		 var email =localStorage.getItem("email_login");
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand8",brand8);
		localStorage.setItem("model8",model8);
		localStorage.setItem("price8",price8);
		localStorage.setItem("color8",color8);
		localStorage.setItem("year8",year8);
		localStorage.setItem("type8",type8);
		localStorage.setItem("opt8",opt);
		localStorage.setItem("email_login",email);
			window.location="testdrive.html";
		
		return false;
	}
	
	 */
	
	function validationBookingInfo(){
  
  $(document).ready(function () {
	
	    var _carcode= document.getElementById("carcode").innerHTML;
		var _brand = document.getElementById("brand").innerHTML;
	    var _model = document.getElementById("model").innerHTML;
		var _price = document.getElementById("price").innerHTML;
	    var _color = document.getElementById("color").innerHTML;
		var _year = document.getElementById("year").innerHTML;
	    var _type = document.getElementById("type").innerHTML;
	    var _desc = document.getElementById("desc").innerHTML;
 		var _fname = document.getElementById("fname").value;
	    var _lname = document.getElementById("lname").value;
		var _address = document.getElementById("address").value;
	    var _cemail = document.getElementById("cemail").value;
		var _cphone = document.getElementById("cphone").value;
		
	

		
	  	if(_fname == ""){
				document.getElementById('fname').innerHTML =alert(" ** Please fill the Firstname field");
				return false;
			}
			else if((_fname.length <= 2) || (_fname.length > 20)) {
				document.getElementById('fname').innerHTML = alert("**  Firstname length must be between 2 and 20");
				return false;	
			}
			else if(!isNaN(_fname)){
				document.getElementById('fname').innerHTML =alert(" ** only characters are allowed in Firstname field" );
				return false;
			} 

			    

			else if(_lname == ""){
				document.getElementById('lname').innerHTML =alert(" ** Please fill the lastname field");
				return false;
			}
			
			 else if((_lname.length <= 2) || (_lname.length > 20)) {
				document.getElementById('lname').innerHTML = alert("**  lastname length must be between 2 and 20");
				return false;	
			}
			else if(!isNaN(_lname)){
				document.getElementById('lname').innerHTML =alert(" ** only characters are allowed in lastname field" );
				return false;
			}
			 
			 else if(_address == ""){
				document.getElementById('address').innerHTML =alert(" ** Please fill the address field");
				return false;
			}
			else if(_cemail == ""){
				document.getElementById('cemail').innerHTML =alert(" ** Please fill the email id` field");
				return false;
			}
			 else if(_cemail.indexOf('@') <= 0 ){
				document.getElementById('cemail').innerHTML =alert(" ** @ Invalid Position");
				return false;
			}
 
			else if((_cemail.charAt(_cemail.length-4)!='.') && (_cemail.charAt(_cemail.length-3)!='.')){
				document.getElementById('cemail').innerHTML =alert(" ** . Invalid Position");
				return false;
			} 
 

	    else   if(_cphone== ""){
				document.getElementById('cphone').innerHTML =alert(" ** Please fill the phoneno field");
				return false;
			}
			
				
			else{
			
		
        localStorage.setItem("carcode",_carcode);
        localStorage.setItem("brand",_brand);
		localStorage.setItem("model",_model);
		localStorage.setItem("price",_price);
		localStorage.setItem("color",_color);
		localStorage.setItem("year",_year);
		localStorage.setItem("type",_type);
		localStorage.setItem("desc",_desc);
	    localStorage.setItem("fname",_fname);
		localStorage.setItem("lname",_lname);
		localStorage.setItem("address",_address);
		localStorage.setItem("cemail",_cemail);
		localStorage.setItem("cphone",_cphone);
	
		
		
		
		
			$('#book').click(() => {
				var radios = document.getElementsByName('genderS');

       for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
			
    // do whatever you want with the checked radio
        
		 if(radios[i].value==2){
			 
			 localStorage.setItem("payment_option","exchange");
			 window.location ="exchange.html";
			 
		 }
		 else if(radios[i].value==1){
			 localStorage.setItem("payment_option","finance");
			  window.location ="finance.html";
		 }
		 else{
			 localStorage.setItem("payment_option","cash");
			 bookByCash();
			 
		 }

    // only one radio can be logically checked, don't check the rest
    break;
  }
}
				
			//	window.location="Home.html";


			return false;
		
		
		
		
		
		
		
			});
		
				
			}
			  		
				
			});
	}
			
			
			
			function bookByCash(){
				
				
				
				console.log('Inserting a booking');
				   const carcode =  $('#carcode').text();
					const brand =  $('#brand').text();
	  const model =  $('#model').text();
		const price =  $('#price').text();
	  const color =  $('#color').text();
		const year =  $('#year').text();
	   const type =  $('#type').text();
	     const desc  =  $('#desc').text();
 		const fname = $('#fname').val();
        const lname = $('#lname').val();
		const address =  $('#address').val();
	    const cemail = $('#cemail').val();
		const cphone = $('#cphone').val();

			
			 
	

				const booking = new Booking(carcode,brand ,model,price,color,year,type,desc,fname, lname, address, cemail, cphone);
				
				     localStorage.setItem("carcode",carcode);
        localStorage.setItem("brand",brand);
		localStorage.setItem("model",model);
		localStorage.setItem("price",price);
		localStorage.setItem("color",color);
		localStorage.setItem("year",year);
		localStorage.setItem("type",type);
		localStorage.setItem("desc",desc);
	    localStorage.setItem("fname",fname);
		localStorage.setItem("lname",lname);
		localStorage.setItem("address",address);
		localStorage.setItem("cemail",cemail);
		localStorage.setItem("cphone",cphone);

				console.log(booking);

				$.post(url + '/bookingcar', booking, (res) => {
					console.log("Booked ", res)
					window.location="payment.html";
				});
			}

			
			
			
			function cancelBooking(){
		 $(document).ready(function () {
		
	// Delete Car
	$('#bo').click(() => {
		console.log('Deleting a car');
		const id = $('#carcode').text();

		$.ajax({
			url: url + `/cancelbooking/${id}`,
			type: 'DELETE',
			success: (res) => {
			  alert("booking cancel sucessfully");
			  window.location="Home.html";
			  console.log('delete response', res)
			},
			error: (err) => {
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
				  const desc = viewcar.desc;
				  const Image = viewcar.Image;
			


			
			
const table = document.getElementById('table1');

const tbody= table.getElementsByTagName('tbody')[0];

const row = tbody.insertRow(tbody.rows.length);

const viewCars= new ViewCar(InvtId,brand,model,price,color,year,type,desc,Image);
console.log(viewCars.writeValue());
const cell1 = row.insertCell(0);
const cell2 = row.insertCell(1);
const cell3 = row.insertCell(2);
const cell4 = row.insertCell(3);
const cell5 = row.insertCell(4);
const cell6 = row.insertCell(5);
const cell7 = row.insertCell(6);
const cell8 = row.insertCell(7);
const cell9 = row.insertCell(8);
cell1.innerHTML = viewCars.InvtId;
cell2.innerHTML = viewCars.brand;
cell3.innerHTML =  viewCars.model;
cell4.innerHTML = viewCars.price; 
cell5.innerHTML = viewCars.color;
cell6.innerHTML = viewCars.year;
cell7.innerHTML =  viewCars.type;
cell8.innerHTML =  viewCars.desc;
cell9.innerHTML = `<img style="width:150px;height:150px;"  src= "${viewCars.Image}";/>`;
 }
else{
	alert(res.message);
}
		});	
		});
		// alert("Invalid Id");
	});
	
	
	}
		

		
	
		function payment(){
	    var _cardname = document.getElementById("cname").value;
		var _cardno = document.getElementById("cardno").value;
	    var _expdate = document.getElementById("expdate").value;
		var _cvv = document.getElementById("cvv").value;
		
	

		
	  	if(_cardname == ""){
				document.getElementById('cardname').innerHTML =alert(" ** Please fill the cardname field");
				return false;
			}
			
				else if(_cardno == ""){
				document.getElementById('cardno').innerHTML =alert(" ** Please fill the cardno field");
				return false;
			}
			
			else if(_cardno.length != 16) {
				document.getElementById('cardno').innerHTML = alert("**  cardno length must be 16");
				return false;	
			}
			else if(isNaN(_cardno)){
				document.getElementById('cardno').innerHTML =alert(" ** only nos are allowed in Firstname field" );
				return false;
			} 
			else if(_expdate == ""){
				document.getElementById('expdate').innerHTML =alert(" ** Please fill the expdate field");
				return false;
			}
			else if(_cvv == ""){
				document.getElementById('cvv').innerHTML =alert(" ** Please fill the Cvv field");
				return false;
			}
			else if(_cvv.length != 3) {
				document.getElementById('cardno').innerHTML = alert("**  cvv length must be 3");
				return false;	
			}
			
			
			
			 
			alert("Booking sucessfully");
			window.location="Thankyou.html";
		}
		
		
			function exchange(){

	
   $(document).ready(function() {
			
		var _BrandName = document.getElementById("BrandName").value;
		var _Model = document.getElementById("Model").value;
		var _Color = document.getElementById("Color").value;
		var _Description = document.getElementById("Description").value;
		var _currentOwner = document.getElementById("currentOwner").value;
		var _EstimatedPrice = document.getElementById("EstimatedPrice").value;
		
		
		
	 	var carcode=localStorage.getItem("carcode"); 
	    var brand=localStorage.getItem("brand");
	    var model=localStorage.getItem("model");
	    var price=localStorage.getItem("price");
	    var color=localStorage.getItem("color");
	    var year=localStorage.getItem("year");
	    var type =localStorage.getItem("type");
       
	  
 



		
				if(_BrandName == ""){
				document.getElementById('BrandName').innerHTML =alert(" ** Please fill the BrandName field");
				return false;
			}
			
			else if(!isNaN(_BrandName)){
				document.getElementById('BrandName').innerHTML =alert(" ** only characters are allowed in BrandName field" );
				return false;
			} 


			else if(_Model == ""){
				document.getElementById('Model').innerHTML =alert(" ** Please fill the Model field");
				return false;
			}
			
			else if(!isNaN(_Model)){
				document.getElementById('Model').innerHTML =alert(" ** only characters are allowed in Model field" );
				return false;
			}
			 
			else if(_Color == ""){
				document.getElementById('Color').innerHTML =alert(" ** Please fill the Color field");
				return false;
			}
				else if(_Description == ""){
				document.getElementById('Description').innerHTML =alert(" ** Please fill the Description field");
				return false;
			}
			else if(_currentOwner == ""){
				document.getElementById('currentOwner').innerHTML =alert(" ** Please fill the currentOwner field");
				return false;
			}
			 else if(_EstimatedPrice == ""){
				document.getElementById('EstimatedPrice').innerHTML =alert(" ** Please fill the EstimatedPrice field");
				return false;
			}
			else
			{
					$('#exchange').click(() => {
				localStorage.setItem("estimatedprice",_EstimatedPrice);		
				console.log('Inserting exchange car info');

				const BrandName = $('#BrandName').val();
				const Model = $('#Model').val();
				const Color = $('#Color').val();
				const Description = $('#Description').val();
				const currentOwner= $('#currentOwner').val();
				const EstimatedPrice= $('#EstimatedPrice').val();
				
		  localStorage.setItem("carcode",carcode);
        localStorage.setItem("brand",brand);
		localStorage.setItem("model",model);
		localStorage.setItem("price",price);
		localStorage.setItem("color",color);
		localStorage.setItem("year",year);
		localStorage.setItem("type",type);
	  
		
				const exchange = new Exchange(BrandName,Model,Color,Description,currentOwner,EstimatedPrice);

				console.log(exchange);

				$.post(url + '/exchange', exchange, (res) => {
					console.log("Created ", res);
					alert(res.message);
					window.location="payment.html";
				});
			});

			


			return false;

		}
	});
				
			    
				
				
			}
			
			
			function finance(){

	
   $(document).ready(function() {
			
		var _loanterm = document.getElementById("loan_term").value;
		var _interval = document.getElementById("interval").value;
		
				if(_loanterm == ""){
				document.getElementById('loan_term').innerHTML =alert(" ** Please fill the BrandName field");
				return false;
			}
			
			

			else if(_interval == ""){
				document.getElementById('interval').innerHTML =alert(" ** Please fill the Model field");
				return false;
			}
			
		
			else
			{
					$('#finance').click(() => {
				console.log('Inserting finance car info');

				const loan_term = $('#loan_term').val();
				const interval = $('#interval').val();
				 var Invt_Id=localStorage.getItem("carcode");
				 
				 
				
				
		  localStorage.setItem("loan_term",loan_term);
        localStorage.setItem("interval",interval);
		
		
				const finance = new Finance(loan_term,interval,Invt_Id);

				console.log(finance);

				$.post(url + '/finance', finance, (res) => {
					console.log("Created ", res);
					alert(res.message);
					window.location="payment.html";
				});
			});

			


			return false;

		}
	});
				
			    
				
				
			}
			
		
		
		
		
		
		
		
		
		

		
		
		

		
		
