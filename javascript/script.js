
  
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
		if(opt==9){
		   testdrive9(opt);	
		   
		}
		if(opt==10){
			testdrive10(opt);	
		}
		
		if(opt==11){
			testdrive11(opt);
		}
		
		if(opt==12){
			testdrive12(opt);
		}
		
		if(opt==13){
			testdrive13(opt);
		}
		
		if(opt==14){
			testdrive14(opt);
		}
		
		if(opt==15){
			testdrive15(opt);
		}
		
		if(opt==16){
			testdrive16(opt);
		}
		if(opt==17){
		   testdrive17(opt);	
		   
		}
		if(opt==18){
			testdrive18(opt);	
		}
		
		if(opt==19){
			testdrive19(opt);
		}
		
		if(opt==20){
			testdrive20(opt);
		}
		
		if(opt==21){
			testdrive21(opt);
		}
		
		if(opt==22){
			testdrive22(opt);
		}
		
		if(opt==23){
			testdrive23(opt);
		}
		
		if(opt==24){
			testdrive24(opt);
		}
		
		
			window.location="testdrivedesc.html";
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
		
		
		
		window.location="testdrivedesc.html";
		
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
			window.location="testdrivedesc.html";
		
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
				window.location="testdrivedesc.html";
		
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
		window.location="testdrivedesc.html";
		
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
				window.location="testdrivedesc.html";
		
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
				window.location="testdrivedesc.html";
		
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
			window.location="testdrivedesc.html";
		
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
			window.location="testdrivedesc.html";
		
		return false;
	}

	
	
	
	
	
	
	
	
	
		function testdrive9(opt){
		debugger
		var carcode=document.getElementById("carcode9").innerHTML;
		var brand9=document.getElementById("brand9").innerHTML;
		var model9=document.getElementById("model9").innerHTML;
		var price9=document.getElementById("price9").innerHTML;
		var color9=document.getElementById("color9").innerHTML;
		var year9=document.getElementById("year9").innerHTML;
		var type9=document.getElementById("type9").innerHTML;
		var desc9=document.getElementById("desc9").innerHTML;
		
		 var email =localStorage.getItem("email_login");
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand9",brand9);
		localStorage.setItem("model9",model9);
		localStorage.setItem("price9",price9);
		localStorage.setItem("color9",color9);
		localStorage.setItem("year9",year9);
		localStorage.setItem("type9",type9);
		localStorage.setItem("desc9",desc9);
		localStorage.setItem("opt",opt);
		localStorage.setItem("email_login",email);
		
		
		
			window.location="testdrivedesc.html";
		
		return false;
	}
		
		
		
		function testdrive10(opt){
		
		
		debugger
		var carcode=document.getElementById("carcode10").innerHTML;
		var brand10=document.getElementById("brand10").innerHTML;
		var model10=document.getElementById("model10").innerHTML;
		var price10=document.getElementById("price10").innerHTML;
		var color10=document.getElementById("color10").innerHTML;
		var year10=document.getElementById("year10").innerHTML;
		var type10=document.getElementById("type10").innerHTML;
		var desc10=document.getElementById("desc10").innerHTML;
		
		
		 var email =localStorage.getItem("email_login");
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand10",brand10);
		localStorage.setItem("model10",model10);
		localStorage.setItem("price10",price10);
		localStorage.setItem("color10",color10);
		localStorage.setItem("year10",year10);
		localStorage.setItem("type10",type10);
		localStorage.setItem("desc10",desc10);
		localStorage.setItem("opt",opt);
			localStorage.setItem("email_login",email);
	window.location="testdrivedesc.html";		
		return false;
	}
		
		
		
		function testdrive11(opt){
		
	debugger
		var carcode=document.getElementById("carcode11").innerHTML;
		var brand11=document.getElementById("brand11").innerHTML;
		var model11=document.getElementById("model11").innerHTML;
		var price11=document.getElementById("price11").innerHTML;
		var color11=document.getElementById("color11").innerHTML;
		var year11=document.getElementById("year11").innerHTML;
		var type11=document.getElementById("type11").innerHTML;
		var desc11=document.getElementById("desc11").innerHTML;
		 var email =localStorage.getItem("email_login");
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand11",brand11);
		localStorage.setItem("model11",model11);
		localStorage.setItem("price11",price11);
		localStorage.setItem("color11",color11);
		localStorage.setItem("year11",year11);
		localStorage.setItem("type11",type11);
		localStorage.setItem("desc11",desc11);
		localStorage.setItem("opt",opt);
		localStorage.setItem("email_login",email);
			window.location="testdrivedesc.html";
		
		return false;
	}
	
	function testdrive12(opt){
		
		
			debugger
				var carcode=document.getElementById("carcode12").innerHTML;
		var brand12=document.getElementById("brand12").innerHTML;
		var model12=document.getElementById("model12").innerHTML;
		var price12=document.getElementById("price12").innerHTML;
		var color12=document.getElementById("color12").innerHTML;
		var year12=document.getElementById("year12").innerHTML;
		var type12=document.getElementById("type12").innerHTML;
		var desc12=document.getElementById("desc12").innerHTML;
		 var email =localStorage.getItem("email_login");
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand12",brand12);
		localStorage.setItem("model12",model12);
		localStorage.setItem("price12",price12);
		localStorage.setItem("color12",color12);
		localStorage.setItem("year12",year12);
		localStorage.setItem("type12",type12);
		localStorage.setItem("desc12",desc12);
		localStorage.setItem("opt",opt);
		localStorage.setItem("email_login",email);
		window.location="testdrivedesc.html";
		return false;
	}
	
	function testdrive13(opt){
		
		
		debugger
			var carcode=document.getElementById("carcode13").innerHTML;
		var brand13=document.getElementById("brand13").innerHTML;
		var model13=document.getElementById("model13").innerHTML;
		var price13=document.getElementById("price13").innerHTML;
		var color13=document.getElementById("color13").innerHTML;
		var year13=document.getElementById("year13").innerHTML;
		var type13=document.getElementById("type13").innerHTML;
		var type13=document.getElementById("type13").innerHTML;
		 var email =localStorage.getItem("email_login");
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand13",brand13);
		localStorage.setItem("model13",model13);
		localStorage.setItem("price13",price13);
		localStorage.setItem("color13",color13);
		localStorage.setItem("year13",year13);
		localStorage.setItem("type13",type13);
		localStorage.setItem("desc13",desc13);
		localStorage.setItem("opt",opt);
		localStorage.setItem("email_login",email);
				window.location="testdrivedesc.html";
		
		return false;
	}
	function testdrive14(opt){
		
		
		debugger
			var carcode=document.getElementById("carcode14").innerHTML;
		var brand14=document.getElementById("brand14").innerHTML;
		var model14=document.getElementById("model14").innerHTML;
		var price14=document.getElementById("price14").innerHTML;
		var color14=document.getElementById("color14").innerHTML;
		var year14=document.getElementById("year14").innerHTML;
		var type14=document.getElementById("type14").innerHTML;
		var desc14=document.getElementById("desc14").innerHTML;
		 var email =localStorage.getItem("email_login");
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand14",brand14);
		localStorage.setItem("model14",model14);
		localStorage.setItem("price14",price14);
		localStorage.setItem("color14",color14);
		localStorage.setItem("year14",year14);
		localStorage.setItem("type14",type14);
		localStorage.setItem("desc14",desc14);
		localStorage.setItem("opt",opt);
		localStorage.setItem("email_login",email);
				window.location="testdrivedesc.html";
		
		return false;
	}
	
	function testdrive15(opt){
		
		
			debugger
				var carcode=document.getElementById("carcode15").innerHTML;
		var brand15=document.getElementById("brand15").innerHTML;
		var model15=document.getElementById("model15").innerHTML;
		var price15=document.getElementById("price15").innerHTML;
		var color15=document.getElementById("color15").innerHTML;
		var year15=document.getElementById("year15").innerHTML;
		var type15=document.getElementById("type15").innerHTML;
		var desc15=document.getElementById("desc15").innerHTML;
		 var email =localStorage.getItem("email_login");
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand15",brand15);
		localStorage.setItem("model15",model15);
		localStorage.setItem("price15",price15);
		localStorage.setItem("color15",color15);
		localStorage.setItem("year15",year15);
		localStorage.setItem("type15",type15);
		localStorage.setItem("desc15",desc15);
		localStorage.setItem("opt",opt);
		localStorage.setItem("email_login",email);
				window.location="testdrivedesc.html";
		
		return false;
	}
	
	function testdrive16(opt){
		
	debugger
		var carcode=document.getElementById("carcode16").innerHTML;
		var brand16=document.getElementById("brand16").innerHTML;
		var model16=document.getElementById("model16").innerHTML;
		var price16=document.getElementById("price16").innerHTML;
		var color16=document.getElementById("color16").innerHTML;
		var year16=document.getElementById("year16").innerHTML;
		var type16=document.getElementById("type16").innerHTML;
		var desc16=document.getElementById("desc16").innerHTML;
		 var email =localStorage.getItem("email_login");
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand16",brand16);
		localStorage.setItem("model16",model16);
		localStorage.setItem("price16",price16);
		localStorage.setItem("color16",color16);
		localStorage.setItem("year16",year16);
		localStorage.setItem("type16",type16);
		localStorage.setItem("desc16",desc16);
		localStorage.setItem("opt",opt);
		localStorage.setItem("email_login",email);
				window.location="testdrivedesc.html";
		
		return false;
	}

function testdrive17(opt){
		
		
		debugger
			var carcode=document.getElementById("carcode17").innerHTML;
		var brand17=document.getElementById("brand17").innerHTML;
		var model17=document.getElementById("model17").innerHTML;
		var price17=document.getElementById("price17").innerHTML;
		var color17=document.getElementById("color17").innerHTML;
		var year17=document.getElementById("year17").innerHTML;
		var type17=document.getElementById("type17").innerHTML;
		var desc17=document.getElementById("desc17").innerHTML;
		 var email =localStorage.getItem("email_login");
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand17",brand17);
		localStorage.setItem("model17",model17);
		localStorage.setItem("price17",price17);
		localStorage.setItem("color17",color17);
		localStorage.setItem("year17",year17);
		localStorage.setItem("type17",type17);
		localStorage.setItem("desc17",desc17);
		localStorage.setItem("opt",opt);
		localStorage.setItem("email_login",email);
			window.location="testdrivedesc.html";
		
		return false;
	}
	
	function testdrive18(opt){
		
		
			debugger
				var carcode=document.getElementById("carcode18").innerHTML;
		var brand18=document.getElementById("brand18").innerHTML;
		var model18=document.getElementById("model18").innerHTML;
		var price18=document.getElementById("price18").innerHTML;
		var color18=document.getElementById("color18").innerHTML;
		var year18=document.getElementById("year18").innerHTML;
		var type18=document.getElementById("type18").innerHTML;
		var desc18=document.getElementById("desc18").innerHTML;
		 var email =localStorage.getItem("email_login");
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand18",brand18);
		localStorage.setItem("model18",model18);
		localStorage.setItem("price18",price18);
		localStorage.setItem("color18",color18);
		localStorage.setItem("year18",year18);
		localStorage.setItem("type18",type18);
		localStorage.setItem("desc18",desc18);
		localStorage.setItem("opt",opt);
		localStorage.setItem("email_login",email);
				window.location="testdrivedesc.html";
		
		return false;
	}
	
	function testdrive19(opt){
		
	debugger
		var carcode=document.getElementById("carcode19").innerHTML;
		var brand19=document.getElementById("brand19").innerHTML;
		var model19=document.getElementById("model19").innerHTML;
		var price19=document.getElementById("price19").innerHTML;
		var color19=document.getElementById("color19").innerHTML;
		var year19=document.getElementById("year19").innerHTML;
		var type19=document.getElementById("type19").innerHTML;
		var desc19=document.getElementById("desc19").innerHTML;
		 var email =localStorage.getItem("email_login");
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand19",brand19);
		localStorage.setItem("model19",model19);
		localStorage.setItem("price19",price19);
		localStorage.setItem("color19",color19);
		localStorage.setItem("year19",year19);
		localStorage.setItem("type19",type19);
		localStorage.setItem("desc19",desc19);
		localStorage.setItem("opt",opt);
		localStorage.setItem("email_login",email);
				window.location="testdrivedesc.html";
		
		return false;
	}

	function testdrive20(opt){
		
	debugger
		var carcode=document.getElementById("carcode20").innerHTML;
		var brand20=document.getElementById("brand20").innerHTML;
		var model20=document.getElementById("model20").innerHTML;
		var price20=document.getElementById("price20").innerHTML;
		var color20=document.getElementById("color20").innerHTML;
		var year20=document.getElementById("year20").innerHTML;
		var type20=document.getElementById("type20").innerHTML;
		var desc20=document.getElementById("desc20").innerHTML;
		 var email =localStorage.getItem("email_login");
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand20",brand20);
		localStorage.setItem("model20",model20);
		localStorage.setItem("price20",price20);
		localStorage.setItem("color20",color20);
		localStorage.setItem("year20",year20);
		localStorage.setItem("type20",type20);
		localStorage.setItem("desc20",desc20);
		localStorage.setItem("opt",opt);
		localStorage.setItem("email_login",email);
				window.location="testdrivedesc.html";
		
		return false;
	}














	function viewCarss(){
		 $(document).ready(function () {
		
	 
	
		console.log('Getting all customers')
		$.get('http://localhost:3000/viewAllCar/All', (res) => {
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
				 const description = viewcar.description;
				  const Image = viewcar.Image;
			


			
			
const table = document.getElementById('table1');

const tbody= table.getElementsByTagName('tbody')[0];

const row = tbody.insertRow(tbody.rows.length);

const viewCars= new ViewCarss(InvtId,brand,model,price,color,year,type,description,Image);
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
cell8.innerHTML =  viewCars.description;
cell9.innerHTML = `<img style="width:150px;height:150px;"  src= "${viewCars.Image}";/>`;
cell10.innerHTML = "<button style='background-Color:goldenrod;' type='button' onclick=\"editCarNew(\'" + InvtId + "\',\'" + brand + "\',\'" + model + "\',\'" + price + "\',\'" + color + "\',\'" + year + "\',\'" + type + "\',\'" + description + "\')\">Edit</button>";
cell11.innerHTML =   "<button style='background-Color:goldenrod;'type='button' onclick=\"deleteCarNew(\'" + InvtId + "\')\">Delete</button>";

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
	
	function editCarNew(id,brand, model,price,color,year,type,description){
		localStorage.setItem("selected_cars_id",id);
		localStorage.setItem("brandedit",brand);
		localStorage.setItem("brandmodel",model);
		localStorage.setItem("brandprice",price);
		localStorage.setItem("brandcolor",color);
		localStorage.setItem("brandyear",year);
		localStorage.setItem("brandtype",type);
		localStorage.setItem("branddesc",description);
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
		
		if(opt==9){
		passValues9(opt);	
		}
		if(opt==10){
			passValues10(opt);
		}
		
		if(opt==11){
			passValues11(opt);
		}
		
		if(opt==12){
			passValues12(opt);
		}
		
		if(opt==13){
			passValues13(opt);
		}
		
		if(opt==14){
			passValues14(opt);
		}
		
		if(opt==15){
			passValues15(opt);
		}
		
		if(opt==16){
			passValues16(opt);
		}
		
		if(opt==17){
		passValues17(opt);	
		}
		if(opt==18){
			passValues18(opt);
		}
		
		if(opt==19){
			passValues19(opt);
		}
		
		if(opt==20){
			passValues20(opt);
		}
		
		if(opt==21){
			passValues21(opt);
		}
		
		if(opt==22){
			passValues22(opt);
		}
		
		if(opt==23){
			passValues23(opt);
		}
		
		if(opt==24){
			passValues24(opt);
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
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
	
		function passValues9(opt){
		
	debugger
		var carcode=document.getElementById("carcode9").innerHTML;
		var brand9=document.getElementById("brand9").innerHTML;
		var model9=document.getElementById("model9").innerHTML;
		var price9=document.getElementById("price9").innerHTML;
		var color9=document.getElementById("color9").innerHTML;
		var year9=document.getElementById("year9").innerHTML;
		var type9=document.getElementById("type9").innerHTML;
		var desc9=document.getElementById("desc9").innerHTML;
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand9",brand9);
		localStorage.setItem("model9",model9);
		localStorage.setItem("price9",price9);
		localStorage.setItem("color9",color9);
		localStorage.setItem("year9",year9);
		localStorage.setItem("type9",type9);
		localStorage.setItem("desc9",desc9);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
	
		function passValues10(opt){
		
	debugger
		var carcode=document.getElementById("carcode10").innerHTML;
		var brand10=document.getElementById("brand10").innerHTML;
		var model10=document.getElementById("model10").innerHTML;
		var price10=document.getElementById("price10").innerHTML;
		var color10=document.getElementById("color10").innerHTML;
		var year10=document.getElementById("year10").innerHTML;
		var type10=document.getElementById("type10").innerHTML;
		var desc10=document.getElementById("desc10").innerHTML;
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand10",brand10);
		localStorage.setItem("model10",model10);
		localStorage.setItem("price10",price10);
		localStorage.setItem("color10",color10);
		localStorage.setItem("year10",year10);
		localStorage.setItem("type10",type10);
		localStorage.setItem("desc10",desc10);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
		function passValues11(opt){
		
	debugger
		var carcode=document.getElementById("carcode11").innerHTML;
		var brand11=document.getElementById("brand11").innerHTML;
		var model11=document.getElementById("model11").innerHTML;
		var price11=document.getElementById("price11").innerHTML;
		var color11=document.getElementById("color11").innerHTML;
		var year11=document.getElementById("year11").innerHTML;
		var type11=document.getElementById("type11").innerHTML;
		var desc11=document.getElementById("desc11").innerHTML;
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand11",brand11);
		localStorage.setItem("model11",model11);
		localStorage.setItem("price11",price11);
		localStorage.setItem("color11",color11);
		localStorage.setItem("year11",year11);
		localStorage.setItem("type11",type11);
		localStorage.setItem("desc11",desc11);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
		function passValues12(opt){
		
	debugger
		var carcode=document.getElementById("carcode12").innerHTML;
		var brand12=document.getElementById("brand12").innerHTML;
		var model12=document.getElementById("model12").innerHTML;
		var price12=document.getElementById("price12").innerHTML;
		var color12=document.getElementById("color12").innerHTML;
		var year12=document.getElementById("year12").innerHTML;
		var type12=document.getElementById("type12").innerHTML;
		var desc12=document.getElementById("desc12").innerHTML;
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand12",brand12);
		localStorage.setItem("model12",model12);
		localStorage.setItem("price12",price12);
		localStorage.setItem("color12",color12);
		localStorage.setItem("year12",year12);
		localStorage.setItem("type12",type12);
		localStorage.setItem("desc12",desc12);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
		function passValues13(opt){
		
	debugger
		var carcode=document.getElementById("carcode13").innerHTML;
		var brand13=document.getElementById("brand13").innerHTML;
		var model13=document.getElementById("model13").innerHTML;
		var price13=document.getElementById("price13").innerHTML;
		var color13=document.getElementById("color13").innerHTML;
		var year13=document.getElementById("year13").innerHTML;
		var type13=document.getElementById("type13").innerHTML;
		var desc13=document.getElementById("desc13").innerHTML;
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand13",brand13);
		localStorage.setItem("model13",model13);
		localStorage.setItem("price13",price13);
		localStorage.setItem("color13",color13);
		localStorage.setItem("year13",year13);
		localStorage.setItem("type13",type13);
		localStorage.setItem("desc13",desc13);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
		function passValues14(opt){
		
	debugger
		var carcode=document.getElementById("carcode14").innerHTML;
		var brand14=document.getElementById("brand14").innerHTML;
		var model14=document.getElementById("model14").innerHTML;
		var price14=document.getElementById("price14").innerHTML;
		var color14=document.getElementById("color14").innerHTML;
		var year14=document.getElementById("year14").innerHTML;
		var type14=document.getElementById("type14").innerHTML;
		var desc14=document.getElementById("desc14").innerHTML;
		
		debugger
		localStorage.setItem("carcode14",carcode14);
		localStorage.setItem("brand14",brand14);
		localStorage.setItem("model14",model14);
		localStorage.setItem("price14",price14);
		localStorage.setItem("color14",color14);
		localStorage.setItem("year14",year14);
		localStorage.setItem("type14",type14);
		localStorage.setItem("desc14",desc14);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
		function passValues15(opt){
		
	debugger
		var carcode=document.getElementById("carcode15").innerHTML;
		var brand15=document.getElementById("brand15").innerHTML;
		var model15=document.getElementById("model15").innerHTML;
		var price15=document.getElementById("price15").innerHTML;
		var color15=document.getElementById("color15").innerHTML;
		var year15=document.getElementById("year15").innerHTML;
		var type15=document.getElementById("type15").innerHTML;
		var desc15=document.getElementById("desc15").innerHTML;
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand15",brand15);
		localStorage.setItem("model15",model15);
		localStorage.setItem("price15",price15);
		localStorage.setItem("color15",color15);
		localStorage.setItem("year15",year15);
		localStorage.setItem("type15",type15);
		localStorage.setItem("desc15",desc15);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
		function passValues16(opt){
		
	debugger
		var carcode=document.getElementById("carcode16").innerHTML;
		var brand16=document.getElementById("brand16").innerHTML;
		var model16=document.getElementById("model16").innerHTML;
		var price16=document.getElementById("price16").innerHTML;
		var color16=document.getElementById("color16").innerHTML;
		var year16=document.getElementById("year16").innerHTML;
		var type16=document.getElementById("type16").innerHTML;
		var desc16=document.getElementById("desc16").innerHTML;
		
		debugger
		localStorage.setItem("carcode",carcode16);
		localStorage.setItem("brand16",brand16);
		localStorage.setItem("model16",model16);
		localStorage.setItem("price16",price16);
		localStorage.setItem("color16",color16);
		localStorage.setItem("year16",year16);
		localStorage.setItem("type16",type16);
		localStorage.setItem("desc16",desc16);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
		function passValues17(opt){
		
	debugger
		var carcode=document.getElementById("carcode17").innerHTML;
		var brand17=document.getElementById("brand17").innerHTML;
		var model17=document.getElementById("model17").innerHTML;
		var price17=document.getElementById("price17").innerHTML;
		var color17=document.getElementById("color17").innerHTML;
		var year17=document.getElementById("year17").innerHTML;
		var type17=document.getElementById("type17").innerHTML;
		var desc17=document.getElementById("desc17").innerHTML;
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand17",brand17);
		localStorage.setItem("model17",model17);
		localStorage.setItem("price17",price17);
		localStorage.setItem("color17",color17);
		localStorage.setItem("year17",year17);
		localStorage.setItem("type17",type17);
		localStorage.setItem("desc17",desc17);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
		function passValues18(opt){
		
	debugger
		var carcode=document.getElementById("carcode18").innerHTML;
		var brand18=document.getElementById("brand18").innerHTML;
		var model18=document.getElementById("model18").innerHTML;
		var price18=document.getElementById("price18").innerHTML;
		var color18=document.getElementById("color18").innerHTML;
		var year18=document.getElementById("year18").innerHTML;
		var type18=document.getElementById("type18").innerHTML;
		var desc18=document.getElementById("desc18").innerHTML;
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand18",brand18);
		localStorage.setItem("model18",model18);
		localStorage.setItem("price18",price18);
		localStorage.setItem("color18",color18);
		localStorage.setItem("year18",year18);
		localStorage.setItem("type18",type18);
		localStorage.setItem("desc18",desc18);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
		function passValues19(opt){
		
	debugger
		var carcode=document.getElementById("carcode19").innerHTML;
		var brand19=document.getElementById("brand19").innerHTML;
		var model19=document.getElementById("model19").innerHTML;
		var price19=document.getElementById("price19").innerHTML;
		var color19=document.getElementById("color19").innerHTML;
		var year19=document.getElementById("year19").innerHTML;
		var type19=document.getElementById("type19").innerHTML;
		var desc19=document.getElementById("desc19").innerHTML;
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand19",brand19);
		localStorage.setItem("model19",model19);
		localStorage.setItem("price19",price19);
		localStorage.setItem("color19",color19);
		localStorage.setItem("year19",year19);
		localStorage.setItem("type19",type19);
		localStorage.setItem("desc19",desc19);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
		function passValues20(opt){
		
	debugger
		var carcode=document.getElementById("carcode20").innerHTML;
		var brand20=document.getElementById("brand20").innerHTML;
		var model20=document.getElementById("model20").innerHTML;
		var price20=document.getElementById("price20").innerHTML;
		var color20=document.getElementById("color20").innerHTML;
		var year20=document.getElementById("year20").innerHTML;
		var type20=document.getElementById("type20").innerHTML;
		var desc20=document.getElementById("desc20").innerHTML;
		
		debugger
		localStorage.setItem("carcode20",carcode20);
		localStorage.setItem("brand20",brand20);
		localStorage.setItem("model20",model20);
		localStorage.setItem("price20",price20);
		localStorage.setItem("color20",color20);
		localStorage.setItem("year20",year20);
		localStorage.setItem("type20",type20);
		localStorage.setItem("desc20",desc20);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
		function passValues21(opt){
		
	debugger
		var carcode=document.getElementById("carcode21").innerHTML;
		var brand21=document.getElementById("brand21").innerHTML;
		var model21=document.getElementById("model21").innerHTML;
		var price21=document.getElementById("price21").innerHTML;
		var color21=document.getElementById("color21").innerHTML;
		var year21=document.getElementById("year21").innerHTML;
		var type21=document.getElementById("type21").innerHTML;
		var desc21=document.getElementById("desc21").innerHTML;
		
		debugger
		localStorage.setItem("carcode",carcode21);
		localStorage.setItem("brand21",brand21);
		localStorage.setItem("model21",model21);
		localStorage.setItem("price21",price21);
		localStorage.setItem("color21",color21);
		localStorage.setItem("year21",year21);
		localStorage.setItem("type21",type21);
		localStorage.setItem("desc21",desc21);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
		function passValues22(opt){
		
	debugger
		var carcode=document.getElementById("carcode22").innerHTML;
		var brand22=document.getElementById("brand22").innerHTML;
		var model22=document.getElementById("model22").innerHTML;
		var price22=document.getElementById("price22").innerHTML;
		var color22=document.getElementById("color22").innerHTML;
		var year22=document.getElementById("year22").innerHTML;
		var type22=document.getElementById("type22").innerHTML;
		var desc22=document.getElementById("desc22").innerHTML;
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand22",brand22);
		localStorage.setItem("model22",model22);
		localStorage.setItem("price22",price22);
		localStorage.setItem("color22",color22);
		localStorage.setItem("year22",year22);
		localStorage.setItem("type22",type22);
		localStorage.setItem("desc22",desc22);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
		function passValues23(opt){
		
	debugger
		var carcode=document.getElementById("carcode23").innerHTML;
		var brand23=document.getElementById("brand23").innerHTML;
		var model23=document.getElementById("model23").innerHTML;
		var price23=document.getElementById("price23").innerHTML;
		var color23=document.getElementById("color23").innerHTML;
		var year23=document.getElementById("year23").innerHTML;
		var type23=document.getElementById("type23").innerHTML;
		var desc23=document.getElementById("desc23").innerHTML;
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand23",brand23);
		localStorage.setItem("model23",model23);
		localStorage.setItem("price23",price23);
		localStorage.setItem("color23",color23);
		localStorage.setItem("year23",year23);
		localStorage.setItem("type23",type23);
		localStorage.setItem("desc23",desc23);
		localStorage.setItem("opt",opt);
			window.location="Booking.html";
		
		return false;
	}
		function passValues24(opt){
		
	debugger
		var carcode=document.getElementById("carcode24").innerHTML;
		var brand24=document.getElementById("brand24").innerHTML;
		var model24=document.getElementById("model24").innerHTML;
		var price24=document.getElementById("price24").innerHTML;
		var color24=document.getElementById("color24").innerHTML;
		var year24=document.getElementById("year24").innerHTML;
		var type24=document.getElementById("type24").innerHTML;
		var desc24=document.getElementById("desc24").innerHTML;
		
		debugger
		localStorage.setItem("carcode",carcode);
		localStorage.setItem("brand24",brand24);
		localStorage.setItem("model24",model24);
		localStorage.setItem("price24",price24);
		localStorage.setItem("color24",color24);
		localStorage.setItem("year24",year24);
		localStorage.setItem("type24",type24);
		localStorage.setItem("desc24",desc24);
		localStorage.setItem("opt",opt);
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
		var _sdate = document.getElementById("sdate").value;
		
	

		
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
			  else   if(_sdate== ""){
				document.getElementById('sdate').innerHTML =alert(" ** Please fill the Buy date field");
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
		localStorage.setItem("sdate",_sdate);
	
		
		
		
		
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
		const sdate = $('#sdate').val();

			
			 
	

				const booking = new Booking(carcode,brand ,model,price,color,year,type,desc,fname, lname, address, cemail, cphone,sdate);
				
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
		localStorage.setItem("sdate",sdate);

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
			
			
						
	function bookingHistory(){
		 $(document).ready(function () {
			// Get All cars by id
		const id =localStorage.getItem("email_login");
		console.log(`Requesting car with id ${id}`);

		$.get(url + `/bookhistory/${id}`, (res) => {
			// res is an array!
			
			if(res.errorcode!="403"){
				for(const customers in res){
				const bookhist = BookingHistory.fromRow(res[customers]);
			console.log('data:', bookhist);
			const res_id = bookhist.res_id;
			
			  const address = bookhist.address;
			   const  email= bookhist.email;
			    const Phoneno= bookhist.Phoneno;
				 const fname = bookhist.fname;
				  const lname = bookhist.lname;
			
			const sdate = bookhist.sdate;
			
		
			const InvtId = bookhist.InvtId;
			
            const brand = bookhist.brand;
			
			 const model = bookhist.model;
			  const price = bookhist.price;
			   const color = bookhist.color;
			    const year = bookhist.year;
				 const type = bookhist.type;
				  const Image = bookhist.Image;
			


			
			
const table = document.getElementById('table1');

const tbody= table.getElementsByTagName('tbody')[0];

const row = tbody.insertRow(tbody.rows.length);

const bookhistory= new BookingHistory(res_id,address,email,Phoneno,fname,lname,sdate,InvtId,brand,model,price,color,year,type,Image);
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
const cell12 = row.insertCell(11);
const cell13 = row.insertCell(12);
const cell14= row.insertCell(13);
const cell15= row.insertCell(14);


cell1.innerHTML = bookhistory.res_id;
cell2.innerHTML = bookhistory.address; 
cell3.innerHTML = bookhistory.email;
cell4.innerHTML = bookhistory.Phoneno;
cell5.innerHTML =  bookhistory.fname;
cell6.innerHTML =  bookhistory.lname;
cell7.innerHTML =  bookhistory.sdate;
cell8.innerHTML = bookhistory.InvtId;
cell9.innerHTML = bookhistory.brand;
cell10.innerHTML =  bookhistory.model;
cell11.innerHTML = bookhistory.price; 
cell12.innerHTML = bookhistory.color;
cell13.innerHTML = bookhistory.year;
cell14.innerHTML =  bookhistory.type;
cell15.innerHTML = `<img style="width:150px;height:150px;"  src= "${bookhistory.Image}";/>`;
 }
			}
else{
	alert(res.message);
}
		});	
		});
		// alert("Invalid Id");
	}
	
			
		
		
		
		
		
	
	function validationContactUs(){

	
   $(document).ready(function() {
			
		var _name = document.getElementById("namee").value;
		var _lastname = document.getElementById("lastname").value;
		var _email = document.getElementById("email").value;
		var _date = document.getElementById("date").value;
		var _country = document.getElementById("country").value;
		var _message = document.getElementById("message").value;
		var _reasonmessage = document.getElementById("reasonmessage").value;
		
		
		
		
				if(_name == ""){
				document.getElementById('namee').innerHTML =alert(" ** Please fill the Name field");
				return false;
			}
			else if((_name.length <= 2) || (_name.length > 20)) {
				document.getElementById('namee').innerHTML = alert("** Name length must be between 2 and 20");
				return false;	
			}
			else if(!isNaN(_name)){
				document.getElementById('namee').innerHTML =alert(" ** only characters are allowed in Name field" );
				return false;
			} 


			else if(_lastname == ""){
				document.getElementById('lastname').innerHTML =alert(" ** Please fill the lastname field");
				return false;
			}
			 else if((_lastname.length <= 2) || (_lastname.length > 20)) {
				document.getElementById('lastname').innerHTML = alert("**  lastname length must be between 2 and 20");
				return false;	
			}
			else if(!isNaN(_lastname)){
				document.getElementById('lastname').innerHTML =alert(" ** only characters are allowed in lastname field" );
				return false;
			}
			 
			else if(_email == ""){
				document.getElementById('email').innerHTML =alert(" ** Please fill the email id` field");
				return false;
			}
			 else if(_email.indexOf('@') <= 0 ){
				document.getElementById('email').innerHTML =alert(" ** @ Invalid Position");
				return false;
			}
 
			else if((_email.charAt(_email.length-4)!='.') && (_email.charAt(_email.length-3)!='.')){
				document.getElementById('email').innerHTML =alert(" ** . Invalid Position");
				return false;
			} 
			
				else if(_date == ""){
				document.getElementById('date').innerHTML =alert(" ** Please fill the Date field");
				return false;
			}
		
			 var eff = document.getElementById("country");
                var strUserr = eff.options[eff.selectedIndex].value;

                var strUser2 = eff.options[eff.selectedIndex].text;
                if(strUserr==0)
                {
                    alert("Please select a country");
					return false;
                }
           
			
			else if(_message == ""){
				document.getElementById('message').innerHTML =alert(" ** Please fill the Message field");
				return false;
			}
			 else if(_reasonmessage == ""){
				document.getElementById('reasonmessage').innerHTML =alert(" ** Please fill the Reason Message field");
				return false;
			}
			else
			{
					$('#contact').click(() => {
				console.log('Inserting Contact us info');

				const name = $('#namee').val();
				const lname = $('#lastname').val();
				const emal = $('#email').val();
				const date = $('#date').val();
				const country= $('#country').val();
				const message= $('#message').val();
				const reasonmessage = $('#reasonmessage').val();
		

				const contact = new Contact(name,lname,emal,date,country,message,reasonmessage);

				console.log(contact);

				$.post(url + '/contact', contact, (res) => {
					console.log("Created ", res)
					alert(res.message);
				});
			});

			


			return false;

		}
	});
				
			    
				
				
			}
			
			
			function viewCustomers(){
		 $(document).ready(function () {
		
	 // Get All Customers
	
		console.log('Getting all customers')
		$.get('http://localhost:3000/viewCustomers', (res) => {
			console.log('data:', res);
		    for(const customers in res){
			const viewcustomerarray = ViewCustomers.fromRow(res[customers]);
			console.log('data:', viewcustomerarray);
			const email = viewcustomerarray.email;
            const fname = viewcustomerarray.fname;
			 const lname = viewcustomerarray.lname;
			  const address = viewcustomerarray.address;
			   const phno = viewcustomerarray.phno;
			  
const table = document.getElementById('table1');

const tbody= table.getElementsByTagName('tbody')[0];

const row = tbody.insertRow(tbody.rows.length);

const viewCustomers= new ViewCustomers(email,fname,lname,address,phno);
console.log(viewCustomers.writeValue());
const cell1 = row.insertCell(0);
const cell2 = row.insertCell(1);
const cell3 = row.insertCell(2);
const cell4 = row.insertCell(3);
const cell5 = row.insertCell(4);

cell1.innerHTML =  viewcustomerarray.email;
cell2.innerHTML =  viewcustomerarray.fname;
cell3.innerHTML =   viewcustomerarray.lname;
cell4.innerHTML =   viewcustomerarray.address;
cell5.innerHTML =  viewcustomerarray.phno;

			}

			
			
		});
	});
	
	
	
	}
	
			
	function ttt(){
			
   $(document).ready(function() {
			
				
		 var testdate = document.getElementById("tdate").value;
		
		
	  	if(testdate == ""){
				document.getElementById('tdate').innerHTML =alert(" ** Please fill the Testdrive field");
				return false;
			}
			else
			{
					$('#tt').click(() => {
				console.log('Test drive info');	
				
				const testdate = $('#tdate').val();
		
			   localStorage.setItem("tdate",testdate);
				const testdrivee = new Testdrivee(testdate);
				console.log(testdrivee);
				 

				$.post(url + '/testdrive', testdrivee, (res) => {
					console.log("Created ", res);
					alert(res.message);
					window.location="testdrive.html";
				});
			});

			


			return false;

		}
	});
		
	}		
		
		
		
		

		
		
		

		
		
