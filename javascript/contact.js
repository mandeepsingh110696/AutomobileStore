class Contact{
		constructor(name,lname,emal,date,country,message,reasonmessage){
		this.name = name;
		this.lname = lname;
		this.emal=emal;
		this.date = date;
		this.country = country;
		this.message = message;
		this.reasonmessage = reasonmessage;
		   
		
		
	}

	static fromRow(row) {
		return new Contact(row.name,row.lname,row.emal,row.date,row.country,row.message,row.reasonmessage);
	}

	toString() {
		console.log(`Fname ${fname}] Lname [${lname}]  Address [${address}] Emal [${email}]Phno [${phno}] Sdate [${sdate}]  Edate [${edate}]`)
	}
}