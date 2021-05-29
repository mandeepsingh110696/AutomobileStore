class ViewCustomers{
	constructor(email,fname,lname,address,phno) {
		
		this.email = email;
		this.fname = fname;
		this.lname = lname;
		this.address = address;
		this.phno = phno;
		
		
	}

	static fromRow(row) {
		return new  ViewCustomers(row.email,row.fname ,row.lname,row.address,row.phno);
	}

	 writeValue(){
           console.log(`Email is ${this.email} `,`Fname is ${this.fname} `,`Lname is ${this.lname} `,`Address is ${this.address}`,`Phoneno is ${this.phno}`);   
    }
	
}


