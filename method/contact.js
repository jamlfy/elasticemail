class Contact {
	constructor(sup){
		this.super = sup;
	}

	ActivateBlocked (obj, callback) {
		return this.super.request({
			path: `${Contact.URL}/activateblocked`,
			params: obj,
			callback: callback
		});
	}
	Add (obj, callback) {
		return this.super.request({
			path: `${Contact.URL}/add`,
			params: obj,
			callback: callback
		});
	}
	AddBlocked (obj, callback) {
		return this.super.request({
			path: `${Contact.URL}/addblocked`,
			params: obj,
			callback: callback
		});
	}
	ChangeProperty (obj, callback) {
		return this.super.request({
			path: `${Contact.URL}/changeproperty`,
			params: obj,
			callback: callback
		});
	}
	ChangeStatus (obj, callback) {
		return this.super.request({
			path: `${Contact.URL}/changestatus`,
			params: obj,
			callback: callback
		});
	}
	CountByStatus (obj, callback) {
		return this.super.request({
			path: `${Contact.URL}/countbystatus`,
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
	Export (obj, callback) {
		return this.super.request({
			path: `${Contact.URL}/export`,
			params: obj,
			callback: callback
		});
	}
	FindContact (obj, callback) {
		return this.super.request({
			path: `${Contact.URL}/findcontact`,
			params: obj,
			callback: callback
		});
	}
	GetContactsByList (obj, callback) {
		return this.super.request({
			path: `${Contact.URL}/getcontactsbylist`,
			params: obj,
			callback: callback
		});
	}
	GetContactsBySegment (obj, callback) {
		return this.super.request({
			path: `${Contact.URL}/getcontactsbysegment`,
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
	LoadBlocked (obj, callback) {
		return this.super.request({
			path: `${Contact.URL}/loadblocked`,
			params: obj,
			callback: callback
		});
	}
	LoadContact (obj, callback) {
		return this.super.request({
			path: `${Contact.URL}/loadcontact`,
			params: obj,
			callback: callback
		});
	}
	LoadHistory (obj, callback) {
		return this.super.request({
			path: `${Contact.URL}/loadhistory`,
			params: obj,
			callback: callback
		});
	}
	QuickAdd (obj, callback) {
		return this.super.request({
			path: `${Contact.URL}/quickadd`,
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
	Upload (obj, callback) {
		return this.super.request({
			path: `${Contact.URL}/upload`,
			params: obj,
			callback: callback
		});
	}
}

Contact.URL = '/contact';
module.exports = Contact;
