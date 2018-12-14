
var CacheKey={
	LoginUser:"LoginUser",
	ServerName:"ServerName",
};

//var ServerName=git.IsEmpty(git.GetCache(CacheKey.ServerName)) ?"http://192.168.214.202:8013":git.GetCache(CacheKey.ServerName);

var ServerName="http://192.168.5.6:8013";

//var ServerName="http://mesapi.gitwms.com";

var UserApiName={
	UserApiName_Login: ServerName+"/api/User/Login",
	UserApiName_Scan: ServerName+"/api/User/Scan",
};

var DeviceApiName={
	DeviceApiName_ScanDevice: ServerName+"/api/Device/ScanDevice",
};

var PlanApiName={
	PlanApiName_GetPlanByNumber: ServerName+"/api/Plan/GetPlanByNumber",
	PlanApiName_Start: ServerName+"/api/Plan/Start",
	PlanApiName_Complete: ServerName+"/api/Plan/Complete",
};

var WeightApiName={
	WeightApiName_GetTask: ServerName+"/api/WeighTask/GetTask",
	WeightApiName_Send: ServerName+"/api/WeighTask/Send",
	WeightApiName_Receive: ServerName+"/api/WeighTask/Receive",
	WeightApiName_Into: ServerName+"/api/WeighTask/Into",
	WeightApiName_IntoWater: ServerName+"/api/WeighTask/IntoWater",
	WeightApiName_GetPage: ServerName+"/api/WeighTask/GetPage",
	WeightApiName_GetTaskList: ServerName+"/api/WeighTask/GetTaskList",
};