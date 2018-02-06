class Channel {
	constructor(sup){
		this.super = sup;
	}

	Add (obj, callback) {
		return this.super.request({
			path: `${Contact.URL}/add`,
			params: obj,
			callback: callback
		});
	}
	Delete (obj, callback) {
		return this.super.request({
			path: `${Contact.URL}/delete`,
			params: obj,
			callback: callback
		});
	}
	ExportCsv (obj, callback) {
		return this.super.request({
			path: `${Contact.URL}/exportcsv`,
			params: obj,
			callback: callback
		});
	}
	ExportJson (obj, callback) {
		return this.super.request({
			path: `${Contact.URL}/exportjson`,
			params: obj,
			callback: callback
		});
	}
	ExportXml (obj, callback) {
		return this.super.request({
			path: `${Contact.URL}/exportxml`,
			params: obj,
			callback: callback
		});
	}
	List (obj, callback) {
		return this.super.request({
			path: `${Contact.URL}/list`,
			params: obj,
			callback: callback
		});
	}
	Update (obj, callback) {
		return this.super.request({
			path: `${Contact.URL}/update`,
			params: obj,
			callback: callback
		});
	}
}

Channel.URL = '/channel';
module.exports = Channel;