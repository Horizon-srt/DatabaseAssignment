import { GetRecordProps, GetUsageProps, RecordProps, SearchRoomsProps, UsageProps, UserInfoProps, UserLoginProps, UserRegisterProps } from "@/utils/appType";

// 获取用户数据
export const postUserLogin = async (args: UserLoginProps) => {
    const temp: UserInfoProps = {
        userId: '1',
        password: '1',
        name: '1',
        root: false
    };
    return temp;
};

// 注册
export const postUserRegister = async (args: UserRegisterProps) => {
    const temp: UserRegisterProps = {
        userId: '',
        password: '',
        name: '',
        root: false
    };
    return temp;
};

// 查询当天空教室
export const getRooms = (args: SearchRoomsProps) => {

};

// 创建一条自习记录
export const postCreateRecord = (args: RecordProps) => {

};

// 查看自习记录
export const getRecords = (args: GetRecordProps) => {

};

// 创建一条教室使用记录
export const postCreateUsage = (args: UsageProps) => {

};

// 查看使用记录
export const getUsages = (args: GetUsageProps) => {

};
