export interface IUser {
    permissions: string[];
    userProfile: UserProfile;
    token: string;
}

export interface UserProfile {
    id: number;
    fullName: string;
    roleId: number;
    roleName: string;
    email: string;
    phoneNumber: string;
}
