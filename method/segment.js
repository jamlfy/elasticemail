class Segment {
	constructor(sup){
		this.super = sup;
	}

	Add (obj, callback) {
		return this.super.request({
			path: `${Segment.URL}/add`,
			params: obj,
			callback: callback
		});
	}
	Delete (obj, callback) {
		return this.super.request({
			path: `${Segment.URL}/delete`,
			params: obj,
			callback: callback
		});
	}
	Export (obj, callback) {
		return this.super.request({
			path: `${Segment.URL}/export`,
			params: obj,
			callback: callback
		});
	}
	List (obj, callback) {
		return this.super.request({
			path: `${Segment.URL}/list`,
			params: obj,
			callback: callback
		});
	}
	Update (obj, callback) {
		return this.super.request({
			path: `${Segment.URL}/update`,
			params: obj,
			callback: callback
		});
	}
	LoadByName () {
		return this.super.request({
			path: `${Segment.URL}/loadbyname`,
			params: obj,
			callback: callback
		});
	}
}

Segment.URL = '/segment';
module.exports = Segment;
