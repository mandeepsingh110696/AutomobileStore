class Testdrivee{
		constructor(testdate,InvtId,email){
		this.testdate= testdate;	
        this.InvtId= InvtId;	
        this.email= email;			
	}

	static fromRow(row) {
		return new Testdrivee(row.testdate,row.InvtId,row.email);
	}

	
}