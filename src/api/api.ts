import { GetAllReviewProps, GetOwnReviewListProps, GetRecordProps, GetRoomInfoProps, GetUsageProps, PostChangeeRoomProps, PostCreateRoomProps, PostRemoveRoomProps, PostReviewProps, RecordProps, ReviewProps, RoomInfo, RoomListProps, RoomProps, RootLoginProps, SearchRoomsProps, UsageProps, UserInfoProps, UserLoginProps, UserRegisterProps } from "@/utils/appType";
import axios from 'axios'

// root
export const postRootLogin = async (args: RootLoginProps) => {
    const { data } = await axios.post('http://localhost:80/dba/root/login', {
        ...args
    });
    return data;
};

// 获取用户数据
export const postUserLogin = async (args: UserLoginProps) => {
    const { data } = await axios.post('http://localhost:80/dba/user/login', {
        userid: args.userId,
        password: args.password,
        root: args.root == true ? 1 : 0
    });
    return data;
};

// 注册
export const postUserRegister = async (args: UserRegisterProps) => {
    console.log(args);
    const { data } = await axios.post('http://localhost:80/dba/user/register', {
        userid: args.userId,
        password: args.password,
        name: args.name,
        root: args.root == true ? 1 : 0
    });
    return data;
};

// 查询当天空教室
export const getRooms =  async (args: SearchRoomsProps) => {
    const roomList = [] as RoomProps[];
    await axios.get(`http://localhost:80/dba/room?building=${args.building}&time=${args.time}`).then(res => {
        res.data.forEach((item: any) => {
            roomList.push({
                room: item.room,
                building: item.building,
                time: item.time,
                name: item.user,
                avaliable: item.available === 1 ? true : false,
            } as RoomProps);
        });
    }).catch(err => {
        console.log(err);
    })
    return roomList;
};

// 创建一条自习记录
export const postCreateRecord = async (args: RecordProps) => {
    console.log(args);
    const { data } = await axios.post('http://localhost:80/dba/record', {
        room: args.room,
        building: args.building,
        userid: args.userId,
        startat: args.startAt,
        period: args.period
    })
    return data;
};

// 查看自习记录
export const getRecords = async (args: GetRecordProps) => {
    const recordList = [] as RecordProps[];
    await axios.get(`http://localhost:80/dba/record?num=${args.num}&size=${args.size}&user=${args.userId}`).then(res => {
        res.data.forEach((item: any) => {
            recordList.push({
                room: item.room,
                building: item.building,
                userId: item.userid,
                startAt: item.startat,
                period: item.period,
            } as RecordProps);
        })
    }).catch(err => {
        console.log(err);
    });
    return recordList;
};

// 创建一条教室使用记录
export const postCreateUsage = async (args: UsageProps) => {
    const { data } = await axios.post('http://localhost:80/dba/usage', {
        room: args.room,
        building: args.building,
        userid: args.userId,
        time: Number(args.time)
    })
    return data;
};

// 查看使用记录
export const getUsages = async (args: GetUsageProps) => {
    const usage = [] as UsageProps[];
    await axios.get(`http://localhost:80/dba/usage?userid=${args.userId}`).then(res => {
        console.log(res);
        res.data.forEach((item: any) => {
            usage.push({
                room: item.room,
                building: item.building,
                userId: item.userid,
                startAt: '',
                time: item.time
            });
        });
    }).catch(err => {
        console.log(err);
    });
    return usage;
};

// 创建评论
// 传入账号，房间号，建筑，评论。
export const postReview = async (args: PostReviewProps) => {
    const { data } = await axios.post('http://localhost/dba/review', {
        userid: args.userId,
        room: args.room,
        building: args.building,
        comment: args.comment,
        rate: args.rate
    });
    return data;
};

// 查看自己评论
// 传入账号，返回评论列表
export const getOwnReview = async (args: GetOwnReviewListProps) => {
    const reviewList = [] as ReviewProps[];
    await axios.get(`http://localhost/dba/review/own?userid=${args.userId}`).then(res => {
        res.data.forEach((item: any) => {
            reviewList.push({
                name: item.name,
                room: item.room,
                building: item.building,
                comment: item.comment,
                rate: item.rate,
                root: item.root
            })
        })
    });
    return reviewList;
};

// 查看全部评论
// 传入房间号，楼号，返回评论列表

export const getAllReview = async (args: GetAllReviewProps) => {
    const reviewList = [] as ReviewProps[];
    await axios.get(`http://localhost/dba/review/all?room=${args.room}&building=${args.building}`).then(res => {
        res.data.forEach((item: any) => {
            reviewList.push({
                name: item.name,
                room: item.room,
                building: item.building,
                comment: item.comment,
                rate: item.rate,
                root: item.root
            })
        })
    });
    return reviewList;
};

// 根权限
// 查看：传入楼号，返回教室列表
export const getRoomInfo = async (args: GetRoomInfoProps) => {
    const roomList = [] as RoomInfo[];
    await axios.get(`http://localhost/dba/root?building=${args.building}`).then(res => {
        res.data.forEach((item: any) => {
            roomList.push({
                roomId: item.id,
                room: item.room,
                building: item.building
            })
        })
    });
    return roomList;
};

// 添加：传入房间号，楼号
export const postCreateRoom = async (args: PostCreateRoomProps) => {
    const { data } = await axios.post('http://localhost/dba/root/cr', {
        room: args.room,
        building: args.building
    });
    return data;
};

// 删除：传入房间id，不返回
export const postRemoveRoom = async (args: PostRemoveRoomProps) => {
    const { data } = await axios.post(`http://localhost/dba/root/rm?id=${args.roomId}`);
    return data;
};

// 修改：传入房间id，
export const postChangeRoom = async (args: PostChangeeRoomProps) => {
    const { data } = await axios.post('http://localhost/dba/root/ch', {
        id: args.roomId,
        room: args.room,
        building: args.building
    });
    return data;
};