class Template {
	constructor(sup){
		this.super = sup;
	}

	Add (obj, callback) {
		return this.super.request({
			path: `${Template.URL}/add`,
			params: obj,
			callback: callback
		});
	}
	CheckUsage (obj, callback) {
		return this.super.request({
			path: `${Template.URL}/checkusage`,
			params: obj,
			callback: callback
		});
	}
	Copy (obj, callback) {
		return this.super.request({
			path: `${Template.URL}/copy`,
			params: obj,
			callback: callback
		});
	}
	Delete (obj, callback) {
		return this.super.request({
			path: `${Template.URL}/delete`,
			params: obj,
			callback: callback
		});
	}
	GetEmbeddedHtml (obj, callback) {
		return this.super.request({
			path: `${Template.URL}/getembeddedhtml`,
			params: obj,
			callback: callback
		});
	}
	GetList (obj, callback) {
		return this.super.request({
			path: `${Template.URL}/getlist`,
			params: obj,
			callback: callback
		});
	}
	LoadTemplate (obj, callback) {
		return this.super.request({
			path: `${Template.URL}/loadtemplate`,
			params: obj,
			callback: callback
		});
	}
	RemoveScreenshot (obj, callback) {
		return this.super.request({
			path: `${Template.URL}/removescreenshot`,
			params: obj,
			callback: callback
		});
	}
	SaveScreenshot (obj, callback) {
		return this.super.request({
			path: `${Template.URL}/savescreenshot`,
			params: obj,
			callback: callback
		});
	}
	Update (obj, callback) {
		return this.super.request({
			path: `${Template.URL}/update`,
			params: obj,
			callback: callback
		});
	}
}

Template.URL = '/template';
module.exports = Template;
