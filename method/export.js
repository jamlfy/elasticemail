class Export {
	constructor(sup){
		this.super = sup;
	}

	CheckStatus (obj, callback) {
		return this.super.request({
			path: `${Export.URL}/checkstatus`,
			params: obj,
			callback: callback
		});
	}
	CountByType (obj, callback) {
		return this.super.request({
			path: `${Export.URL}/countbytype`,
			params: obj,
			callback: callback
		});
	}
	Delete (obj, callback) {
		return this.super.request({
			path: `${Export.URL}/delete`,
			params: obj,
			callback: callback
		});
	}
	List (obj, callback) {
		return this.super.request({
			path: `${Export.URL}/list`,
			params: obj,
			callback: callback
		});
	}
}

Export.URL = '/export';
module.exports = Export;
