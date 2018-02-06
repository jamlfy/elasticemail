class Sms {
	constructor(sup){
		this.super = sup;
	}

	Send (obj, callback) {
		return this.super.request({
			path: `${Sms.URL}/send`,
			params: obj,
			callback: callback
		});
	}
}

Sms.URL = '/sms';
module.exports = Sms;