class Attachment {
	constructor(sup){
		this.super = sup;
	}

	Delete (obj, callback) {
		return this.super.request({
			 path: `${Attachment.URL}/delete`,
			 params: obj,
			 callback: callback
		 });
	}

	Get (obj, callback) {
		return this.super.request({
			 path: `${Attachment.URL}/get`,
			 params: obj,
			 callback: callback
		 });
	}
	List (obj, callback) {
		 return this.super.request({
			 path: `${Attachment.URL}/list`,
			 params: obj,
			 callback: callback
		 });
	}
	ListAll (obj, callback) {
		 return this.super.request({
			 path: `${Attachment.URL}/listall`,
			 params: obj,
			 callback: callback
		 });
	}
	Remove (obj, callback) {
		return this.super.request({
			 path: `${Attachment.URL}/remove`,
			 params: obj,
			 callback: callback
		 });
	}
	Upload (obj, callback, file) {
		return this.super.request({
			 path: `${Attachment.URL}/upload`,
			 params: obj,
			 callback: callback
		 }, file);
	}
}

Attachment.URL = '/attachment';
module.exports = Attachment;
