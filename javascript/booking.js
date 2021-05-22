class Booking {
	constructor(carcode,brand ,model,price,color,year,type,fname, lname, address, cemail,cphone) {
		
		this.carcode=carcode;
		this.brand = brand;
		this.model = model;
		this.price = price;
		this.color = color;
		this.year = year;
		this.type = type;
		this.fname = fname;
		this.lname = lname;
		this.address = address;
		this.cemail = cemail;
		this.cphone = cphone;
	
	}

	static fromRow(row) {
		return new Booking(row.carcode,row.brand ,row.model,row.price,row.color,row.year,row.type,row.fname, row.lname,row.email,row.address,row.cphone);
	}

	toString() {
		console.log(`Fname ${fname}] Lname [${lname}]  Address [${address}] Emal [${email}]Phno [${phno}] Sdate [${sdate}]  Edate [${edate}]`)
	}
}


