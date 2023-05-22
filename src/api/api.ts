import { GetRecordProps, GetUsageProps, RecordProps, RoomListProps, RoomProps, SearchRoomsProps, UsageProps, UserInfoProps, UserLoginProps, UserRegisterProps } from "@/utils/appType";
import axios from 'axios'

// 获取用户数据
export const postUserLogin = async (args: UserLoginProps) => {
    axios.post('localhost/dba/user/login', {
        userid: args.userId,
        password: args.password,
        root: args.root
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
    return {};
};

// 注册
export const postUserRegister = async (args: UserRegisterProps) => {
    axios.post('localhost/dba/user/register', {
        userid: args.userId,
        password: args.password,
        name: args.name,
        root: args.root
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
    return {};
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
    axios.get(`localhost/dba/room?building=${args.building}&time=${args.time}`).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
    return res.roomList;
};

// 创建一条自习记录
export const postCreateRecord = async (args: RecordProps) => {
    axios.post('localhost/dba/record', {
        room: args.room,
        building: args.building,
        user: args.userId,
        startAt: args.startAt,
        period: args.period
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
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
    axios.get(`localhost/dba/record?num=${args.num}&size=${args.size}&user=${args.userId}`).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
    return [temp] as RecordProps[];
};

// 创建一条教室使用记录
export const postCreateUsage = async (args: UsageProps) => {
    axios.post('localhost/dba/usage', {
        room: args.room,
        building: args.building,
        user: args.userId, // user
        startAt: args.startAt,
        time: args.time
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
    return {};
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
    axios.get(`localhost/dba/usage?user=${args.userId}`).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
    return [temp] as UsageProps[];
};
