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
  userId: string;
};

// 自习记录信息
export interface RecordProps {
  room: string;
  building: string;
  userId: string;
  startAt: string;
  period: string;
};

// 获取自习记录参数
export interface GetRecordProps {
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