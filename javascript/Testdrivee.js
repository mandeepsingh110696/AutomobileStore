class Testdrivee{
		constructor(testdate){
		this.testdate= testdate;		
	}

	static fromRow(row) {
		return new Testdrivee(row.testdate);
	}

	
}