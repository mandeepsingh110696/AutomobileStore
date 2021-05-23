class Finance{
		constructor(loanterm,interval,Invt_Id){
		this.loanterm = loanterm;
		this.interval = interval;
		this.Invt_Id = Invt_Id;
		
		   
		
		
	}

	static fromRow(row) {
		return new Finance(row.loanterm,row.interval,row.Invt_Id);
	}

	/* toString() {
		console.log(`Fname ${fname}] Lname [${lname}]  Address [${address}] Emal [${email}]Phno [${phno}] Sdate [${sdate}]  Edate [${edate}]`)
	} */
}