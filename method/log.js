class Log {
	constructor(sup){
		this.super = sup;
	}

	CancelInProgress (obj, callback) {
		return this.super.request({
			path: `${Log.URL}/cancelinprogress`,
			params: obj,
			callback: callback
		});
	}
	LinkTracking (obj, callback) {
		return this.super.request({
			path: `${Log.URL}/linktracking`,
			params: obj,
			callback: callback
		});
	}
	Load (obj, callback) {
		return this.super.request({
			path: `${Log.URL}/load`,
			params: obj,
			callback: callback
		});
	}
	RetryNow (obj, callback) {
		return this.super.request({
			path: `${Log.URL}/retrynow`,
			params: obj,
			callback: callback
		});
	}
	Summary (obj, callback) {
		return this.super.request({
			path: `${Log.URL}/summary`,
			params: obj,
			callback: callback
		});
	}
}

Log.URL = '/log';
module.exports = Log;
