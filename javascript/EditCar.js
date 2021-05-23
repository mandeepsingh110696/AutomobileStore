class EditCar{
	constructor(cid,brand,model,price,color,year,type,desc,img) {
		
		this.cid = cid;
		this.brand = brand;
		this.model = model;
		this.price = price;
		this.color = color;
		this.year = year;
		this.type = type;
		this.desc  = desc;
		this.img = img;
	}

	static fromRow(row) {
		return new EditCar(row.cid,row.brand ,row.model,row.price,row.color,row.year,row.type,row.desc,row.img);
	}

	toString() {
		console.log(`Fname ${fname}] Lname [${lname}]  Address [${address}] Emal [${email}]Phno [${phno}] Sdate [${sdate}]  Edate [${edate}]`)
	}
}


