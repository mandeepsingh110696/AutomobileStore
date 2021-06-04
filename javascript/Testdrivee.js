class Testdrivee{
		constructor(tdate){
		this.tdate= tdate;		
	}

	static fromRow(row) {
		return new Testdrivee(row.tdate);
	}

	
}