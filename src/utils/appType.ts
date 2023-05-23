// 用户信息
export interface UserInfoProps {
  userId: string;
  password: string;
  name: string;
  root: boolean;
};

// 用户登录信息
export interface UserLoginProps {
  userId: string;
  password: string;
  root: boolean;
};

// 用户注册信息
export interface UserRegisterProps {
  userId: string;
  password: string;
  name: string;
  root: boolean;
};

// 教室查询参数
export interface SearchRoomsProps {
  building: string;
  time: string;
};

// 教室列表
export interface RoomListProps {
  roomList: RoomProps[];
};

// 教室信息
export interface RoomProps {
  room: string;
  building: string;
  time: string;
  name: string;
  avaliable: boolean;
};

// 自习记录信息
export interface RecordProps {
  room: string;
  building: string;
  userId: string;
  startAt: string;
  period: number;
};

// 获取自习记录参数
export interface GetRecordProps {
  num: number;
  size: number;
  userId: string;
};

// 自习记录列表
export interface RecordListProps {
  recordList: RecordProps[];
};

// 教室占用信息
export interface UsageProps {
  room: string;
  building: string;
  userId: string;
  startAt: string;
  time: string;
};

// 获取教室占用参数
export interface GetUsageProps {
  userId: string;
};

// 教室占用列表
export interface UsageListProps {
  usageList: UsageProps[];
};


// 创建评论
export interface PostReviewProps {
  userId: string;
  room: string;
  building: string;
  comment: string;
  rate: number;
};

// 查看自己评论
// 传入账号，返回评论列表
export interface GetOwnReviewListProps {
  userId: string;
};

// 查看全部评论
// 传入房间号，楼号，返回评论列表
export interface GetAllReviewProps {
  room: string;
  building: string;
};

export interface ReviewListProps {
  reviewList: ReviewProps[];
};

// 评论数据
export interface ReviewProps {
  name: string;
  room: string;
  building: string;
  comment: string;
  rate: string;
  root: boolean;
};


// 根权限
// 查看：传入楼号，返回教室列表
export interface GetRoomInfoProps {
  building: string;
};

// 房间信息
export interface RoomInfoList {
  roomInfoList: RoomInfo[];
};

// 添加：传入房间号，楼号
export interface PostCreateRoomProps {
  room: string;
  building: string;
};

// 删除：传入房间id，不返回
export interface PostRemoveRoomProps {
  roomId: string;
};

// 修改：传入房间id，
export interface PostChangeeRoomProps {
  roomId: string;
  room: string;
  building: string;
};

export interface RoomInfo {
  roomId: string;
  room: string;
  building: string;
};
