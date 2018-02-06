class Email {
	constructor(sup){
		this.super = sup;
	}

	GetStatus (obj, callback) {
		return this.super.request({
			path: `${Email.URL}/getstatus`,
			params: obj,
			callback: callback
		});
	}
	Send (obj, callback) {
		return this.super.request({
			path: `${Email.URL}/send`,
			params: obj,
			callback: callback
		});
	}
	Status (obj, callback) {
		return this.super.request({
			path: `${Email.URL}/status`,
			params: obj,
			callback: callback
		});
	}
	View (obj, callback) {
		return this.super.request({
			path: `${Email.URL}/view`,
			params: obj,
			callback: callback
		});
	}
}

Email.URL = '/email';
module.exports = Email;