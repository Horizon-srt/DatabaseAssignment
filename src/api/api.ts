import { GetRecordProps, GetUsageProps, RecordProps, RoomListProps, RoomProps, SearchRoomsProps, UsageProps, UserInfoProps, UserLoginProps, UserRegisterProps } from "@/utils/appType";

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
export const getRooms =  async (args: SearchRoomsProps) => {
    const room1: RoomProps = {
        room: '101',
        building: '1',
        time: '1',
        name: 'aaa',
        avaliable: false
    }
    const room2: RoomProps = {
        room: '102',
        building: '1',
        time: '1',
        name: '',
        avaliable: true
    }
    const res: RoomListProps = {
        roomList: [room1, room2],
    };
    return res.roomList;
};

// 创建一条自习记录
export const postCreateRecord = async (args: RecordProps) => {
    return {};
};

// 查看自习记录
export const getRecords = async (args: GetRecordProps) => {
    const temp: RecordProps = {
        room: '101',
        building: '2',
        userId: '1',
        startAt: '111',
        period: 1111
    }
    return [temp] as RecordProps[];
};

// 创建一条教室使用记录
export const postCreateUsage = (args: UsageProps) => {

};

// 查看使用记录
export const getUsages = async (args: GetUsageProps) => {
    const temp: UsageProps = {
        room: '101',
        building: '2',
        userId: '1',
        startAt: '111',
        time: '1',
    }
    return [temp] as UsageProps[];
};
