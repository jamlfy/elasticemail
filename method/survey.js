class Survey {
	constructor(sup){
		this.super = sup;
	}

	Add (obj, callback) {
		return this.super.request({
			path: `${Survey.URL}/add`,
			params: obj,
			callback: callback
		});
	}
	Delete (obj, callback) {
		return this.super.request({
			path: `${Survey.URL}/delete`,
			params: obj,
			callback: callback
		});
	}
	Export (obj, callback) {
		return this.super.request({
			path: `${Survey.URL}/export`,
			params: obj,
			callback: callback
		});
	}
	List (obj, callback) {
		return this.super.request({
			path: `${Survey.URL}/list`,
			params: obj,
			callback: callback
		});
	}
	LoadResponseList (obj, callback) {
		return this.super.request({
			path: `${Survey.URL}/loadresponselist`,
			params: obj,
			callback: callback
		});
	}
	LoadResults (obj, callback) {
		return this.super.request({
			path: `${Survey.URL}/loadresults`,
			params: obj,
			callback: callback
		});
	}
	Update (obj, callback) {
		return this.super.request({
			path: `${Survey.URL}/update`,
			params: obj,
			callback: callback
		});
	}
}

Survey.URL = '/survey';
module.exports = Survey;