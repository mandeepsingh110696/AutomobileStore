class Register {
	constructor(email, fname, lname, address, pass, cpass, phno) {
		this.email = email;
		this.fname = fname;
		this.lname = lname;
		this.address = address;
		this.pass = pass;
		this.cpass = cpass;
		this.phno = phno;
		
	}

	static fromRow(row) {
		return new Register(row.email, row.fname, row.lname, row.address, row.pass, row.cpass, row.phno);
	}

	toString() {
		console.log(`Fname [    Emal [${email}] ${fname}] Lname [${lname}]  Address [${address}] Pass [${pass}] Cpass [${cpass}] Phno [${phno}]]`)
	}
}


