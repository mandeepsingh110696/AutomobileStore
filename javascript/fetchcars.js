class FetchCars{
	constructor(filter) {
		
		this.filter= filter;
		
	}

	static fromRow(row) {
		return new FetchCars(row.filter);
	}

	toString() {
		console.log(`Fname ${fname}] Lname [${lname}]  Address [${address}] Emal [${email}]Phno [${phno}] Sdate [${sdate}]  Edate [${edate}]`)
	}
}


