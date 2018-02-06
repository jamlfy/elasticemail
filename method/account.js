
class Account {
	constructor(sup){
		this.super = sup;
	}

	AddSubAccount (obj, callback) {
		return this.super.request({
			 path: `${Account.URL}/addsubaccount`,
			 params: obj,
			 callback: callback
		 });
	}
	AddSubAccountCredits (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/addsubaccountcredits`,
			 params: obj,
			 callback: callback
		 });
	}
	ChangeEmail (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/changeemail`,
			 params: obj,
			 callback: callback
		 });
	}
	ChangePassword (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/changepassword`,
			 params: obj,
			 callback: callback
		 });
	}
	DeleteSubAccount (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/deletesubaccount`,
			 params: obj,
			 callback: callback
		 });
	}
	GetSubAccountApiKey (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/getsubaccountapikey`,
			 params: obj,
			 callback: callback
		 });
	}
	GetSubAccountList (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/getsubaccountlist`,
			 params: obj,
			 callback: callback
		 });
	}
	Load (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/load`,
			 params: obj,
			 callback: callback
		 });
	}
	LoadAdvancedOptions (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/loadadvancedoptions`,
			 params: obj,
			 callback: callback
		 });
	}
	LoadEmailCreditsHistory (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/loademailcreditshistory`,
			 params: obj,
			 callback: callback
		 });
	}
	LoadLitmusCreditsHistory (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/loadlitmuscreditshistory`,
			 params: obj,
			 callback: callback
		 });
	}
	LoadNotificationQueue (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/loadnotificationqueue`,
			 params: obj,
			 callback: callback
		 });
	}
	LoadPaymentHistory (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/loadpaymenthistory`,
			 params: obj,
			 callback: callback
		 });
	}
	LoadPayoutHistory (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/loadpayouthistory`,
			 params: obj,
			 callback: callback
		 });
	}
	LoadReferralDetails (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/loadreferraldetails`,
			 params: obj,
			 callback: callback
		 });
	}
	LoadReputationHistory (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/loadreputationhistory`,
			 params: obj,
			 callback: callback
		 });
	}
	LoadReputationImpact (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/loadreputationimpact`,
			 params: obj,
			 callback: callback
		 });
	}
	LoadSpamCheck (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/loadspamcheck`,
			 params: obj,
			 callback: callback
		 });
	}
	LoadSubAccountsEmailCreditsHistory (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/loadsubaccountsemailcreditshistory`,
			 params: obj,
			 callback: callback
		 });
	}
	LoadSubAccountSettings (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/loadsubaccountsettings`,
			 params: obj,
			 callback: callback
		 });
	}
	LoadSubAccountsLitmusCreditsHistory (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/loadsubaccountslitmuscreditshistory`,
			 params: obj,
			 callback: callback
		 });
	}
	LoadUsage (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/loadusage`,
			 params: obj,
			 callback: callback
		 });
	}
	ManageApiKeys (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/manageapikeys`,
			 params: obj,
			 callback: callback
		 });
	}
	Overview (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/overview`,
			 params: obj,
			 callback: callback
		 });
	}
	PurchasePrivateIP (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/purchaseprivateip`,
			 params: obj,
			 callback: callback
		 });
	}
	RemoveSubAccountCredits (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/removesubaccountcredits`,
			 params: obj,
			 callback: callback
		 });
	}
	RequestPrivateIP (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/requestprivateip`,
			 params: obj,
			 callback: callback
		 });
	}
	UpdateAdvancedOptions (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/updateadvancedoptions`,
			 params: obj,
			 callback: callback
		 });
	}
	UpdateCustomBranding (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/updatecustombranding`,
			 params: obj,
			 callback: callback
		 });
	}
	UpdateHttpNotification (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/updatehttpnotification`,
			 params: obj,
			 callback: callback
		 });
	}
	UpdateProfile (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/updateprofile`,
			 params: obj,
			 callback: callback
		 });
	}
	UpdateSubAccountSettings (obj, callback) {
		 return this.super.request({
			 path: `${Account.URL}/updatesubaccountsettings`,
			 params: obj,
			 callback: callback
		 });
	}
}

Account.URL = '/account';
module.exports = Account;
