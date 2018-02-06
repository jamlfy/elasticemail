class Campaign {
	constructor(sup){
		this.super = sup;
	}

	Add (obj, callback) {
		return this.super.request({
			path: `${Campaign.URL}/add`,
			params: obj,
			callback: callback
		});
	}
	Copy (obj, callback) {
		return this.super.request({
			path: `${Campaign.URL}/copy`,
			params: obj,
			callback: callback
		});
	}
	Delete (obj, callback) {
		return this.super.request({
			path: `${Campaign.URL}/delete`,
			params: obj,
			callback: callback
		});
	}
	Export (obj, callback) {
		return this.super.request({
			path: `${Campaign.URL}/export`,
			params: obj,
			callback: callback
		});
	}
	List (obj, callback) {
		return this.super.request({
			path: `${Campaign.URL}/list`,
			params: obj,
			callback: callback
		});
	}
	Update (obj, callback) {
		return this.super.request({
			path: `${Campaign.URL}/update`,
			params: obj,
			callback: callback
		});
	}
}

Campaign.URL = '/campaign';
module.exports = Campaign;