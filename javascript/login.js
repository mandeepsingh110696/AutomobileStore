class Login {
	constructor(email,passwords) {
		this.email=email;
		this.passwords=passwords;
		
	}
    static fromRow(row) {
        return new Login(row.email,row.passwords);
    }

	toString() {
		console.log(`[email [${email}]]password [${passwords}]`)
	}
}


       