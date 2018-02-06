class List {
	constructor(sup){
		this.super = sup;
	}

	Add (obj, callback) {
		return this.super.request({
			path: `${List.URL}/add`,
			params: obj,
			callback: callback
		});
	}
	AddContacts (obj, callback) {
		return this.super.request({
			path: `${List.URL}/addcontacts`,
			params: obj,
			callback: callback
		});
	}
	CreateNthSelectionLists (obj, callback) {
		return this.super.request({
			path: `${List.URL}/createnthselectionlists`,
			params: obj,
			callback: callback
		});
	}
	CreateRandomList (obj, callback) {
		return this.super.request({
			path: `${List.URL}/createrandomlist`,
			params: obj,
			callback: callback
		});
	}
	Delete (obj, callback) {
		return this.super.request({
			path: `${List.URL}/delete`,
			params: obj,
			callback: callback
		});
	}
	Export (obj, callback) {
		return this.super.request({
			path: `${List.URL}/export`,
			params: obj,
			callback: callback
		});
	}
	List (obj, callback) {
		return this.super.request({
			path: `${List.URL}/list`,
			params: obj,
			callback: callback
		});
	}
	Load (obj, callback) {
		return this.super.request({
			path: `${List.URL}/load`,
			params: obj,
			callback: callback
		});
	}
	RemoveContacts (obj, callback) {
		return this.super.request({
			path: `${List.URL}/removecontacts`,
			params: obj,
			callback: callback
		});
	}
	Update (obj, callback) {
		return this.super.request({
			path: `${List.URL}/update`,
			params: obj,
			callback: callback
		});
	}
}

List.URL = '/list';
module.exports = List;
