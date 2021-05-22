class ViewCar{
	constructor(InvtId,brand,model,price,color,year,type,Image) {
		
		this.InvtId = InvtId;
		this.brand = brand;
		this.model = model;
		this.price = price;
		this.color = color;
		this.year = year;
		this.type = type;
		this.Image = Image;
	}

	static fromRow(row) {
		return new ViewCar(row.InvtId,row.brand ,row.model,row.price,row.color,row.year,row.type,row.Image);
	}

	 writeValue(){
           console.log(`InvtId is ${this.InvtId} `,`Brand is ${this.brand} `,`Model is ${this.model} `,`Price is ${this.price}`,`Color is ${this.color}`,`Year is ${this.year}`,`Type is ${this.type}`,`Image is ${this.Image}`);   
    }
	toString() {
		console.log(`Fname ${fname}] Lname [${lname}]  Address [${address}] Emal [${email}]Phno [${phno}] Sdate [${sdate}]  Edate [${edate}]`)
	}
}


