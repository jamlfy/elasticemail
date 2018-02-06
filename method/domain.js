class Domain {
	constructor(sup){
		this.super = sup;
	}

	Add (obj, callback) {
		return this.super.request({
			path: `${Domain.URL}/add`,
			params: obj,
			callback: callback
		});
	}
	Delete (obj, callback) {
		return this.super.request({
			path: `${Domain.URL}/delete`,
			params: obj,
			callback: callback
		});
	}
	List (obj, callback) {
		return this.super.request({
			path: `${Domain.URL}/list`,
			params: obj,
			callback: callback
		});
	}
	SetDefault (obj, callback) {
		return this.super.request({
			path: `${Domain.URL}/setdefault`,
			params: obj,
			callback: callback
		});
	}
	VerifyDkim (obj, callback) {
		return this.super.request({
			path: `${Domain.URL}/verifydkim`,
			params: obj,
			callback: callback
		});
	}
	VerifyMX (obj, callback) {
		return this.super.request({
			path: `${Domain.URL}/verifymx`,
			params: obj,
			callback: callback
		});
	}
	VerifySpf (obj, callback) {
		return this.super.request({
			path: `${Domain.URL}/verifyspf`,
			params: obj,
			callback: callback
		});
	}
	VerifyTracking (obj, callback) {
		return this.super.request({
			path: `${Domain.URL}/verifytracking`,
			params: obj,
			callback: callback
		});
	}
}

Domain.URL = '/domain';
module.exports = Domain;
