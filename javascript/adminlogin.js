class AdminLogin {

	constructor(email, password) {
		this.email = email;
		this.password = password;

	}
	static fromRow(row) {
		return new AdminLogin(row.email, row.password);
	}

	toString() {
		console.log(`[email [${email}]]password [${password}]`)
	}

}