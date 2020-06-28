export interface Message {
    text: string;
    sentTime: Date;
    seenTime: Date;
    sentBy: UserType

}
export enum UserType {
    Bot = "Bot",
    User = "User"
}
