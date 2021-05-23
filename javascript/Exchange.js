class Exchange{
		constructor(BrandName,Model,Color,Description,currentOwner,EstimatedPrice){
		this.BrandName = BrandName;
		this.Model = Model;
		this.Color=Color;
		this.Description = Description;
		this.currentOwner = currentOwner;
		this.EstimatedPrice = EstimatedPrice;
	
		   
		
		
	}

	static fromRow(row) {
		return new Exchange(row.BrandName,row.Model,row.Color,row.Description,row.currentOwner,row.EstimatedPrice);
	}

	/* toString() {
		console.log(`Fname ${fname}] Lname [${lname}]  Address [${address}] Emal [${email}]Phno [${phno}] Sdate [${sdate}]  Edate [${edate}]`)
	} */
}