const _request = require('request');
const querystring = require('querystring');

const Account = require('./method/account.js');
const Attachment = require('./method/attachment.js');
const Campaign = require('./method/campaign.js');
const Channel = require('./method/channel.js');
const Contact = require('./method/contact.js');
const Domain = require('./method/domain.js');
const Email = require('./method/email.js');
const Export = require('./method/export.js');
const List = require('./method/list.js');
const Log = require('./method/log.js');
const Segment = require('./method/segment.js');
const Sms = require('./method/sms.js');
const Survey = require('./method/survey.js');
const Template = require('./method/template.js');

class Elastic {

	constructor(key){
		this.setApiKey(key);

		// API Methods
		this.Account = new Account(this);
		this.Attachment = new Attachment(this);
		this.Campaign = new Campaign(this);
		this.Channel = new Channel(this);
		this.Contact = new Contact(this);
		this.Domain = new Domain(this);
		this.Email = new Email(this);
		this.Export = new Export(this);
		this.List = new List(this);
		this.Log = new Log(this);
		this.Segment = new Segment(this);
		this.SMS = new Sms(this);
		this.Survey = new Survey(this);
		this.Template = new Template(this);
	}

	setApiKey (str) {
		if(str !== 'string'){
			throw new Error('Is need a the API Key');
		}

		this.apikey = str;
	}

	request (optionObj, file) {

		var params = { method: 'POST', formData: file, uri : Elastic.BASE_URL + Elastic.VERSION };

		if (typeof optionObj !== "object") {
			let msg = `FAILED! Request Method: input typeof is "${typeof optionObj}" but should be: "object"!`;
			return optionObj.callback ? optionObj.callback(null, msg) : Promise.reject(msg);
		}

		if (optionObj && typeof optionObj.path !== 'string') {
			let msg = `FAILED! Request Method: input.path property typeof is "${typeof optionObj.path}" but should be: "string"!`;
			return optionObj.callback ? optionObj.callback(null, msg) : Promise.reject(msg);
		}

		params.uri += optionObj.path + this._getParameters(optionObj.params, optionObj.hideApiKey);

		if(optionObj.callback){
			_request(params, (err, res, body) => optionObj.callback({
				response: body,
				path: params.uri
			}, err));

			return this;
		} else {
			return new Promise(
				(res, rec) => _request(params, 
					(err, res, body) => err ? rec(err) : res({
						response: body,
						path: params.uri
					})));
		}
	}

	_getParameters (obj, hideApiKey) {

		var paramObj = Object.assign({ apikey: this.apikey }, obj);

		if (hideApiKey) delete paramObj.apikey

		return "?" + querystring.stringify(paramObj);
	}
}

Elastic.BASE_URL = 'https://api.elasticemail.com';
Elastic.VERSION = '/v2';

module.exports = Elastic;
