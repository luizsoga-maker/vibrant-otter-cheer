"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const client_1 = require("@prisma/client");
class PrismaService extends client_1.PrismaClient {
    async $connect() {
        await super.$connect();
    }
    async $disconnect() {
        await super.$disconnect();
    }
}
exports.PrismaService = PrismaService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpc21hLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcmlzbWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBOEM7QUFFOUMsTUFBYSxhQUFjLFNBQVEscUJBQVk7SUFDN0MsS0FBSyxDQUFDLFFBQVE7UUFDWixNQUFNLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsS0FBSyxDQUFDLFdBQVc7UUFDZixNQUFNLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7QUFSRCxzQ0FRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxuZXhwb3J0IGNsYXNzIFByaXNtYVNlcnZpY2UgZXh0ZW5kcyBQcmlzbWFDbGllbnQge1xuICBhc3luYyAkY29ubmVjdCgpIHtcbiAgICBhd2FpdCBzdXBlci4kY29ubmVjdCgpO1xuICB9XG5cbiAgYXN5bmMgJGRpc2Nvbm5lY3QoKSB7XG4gICAgYXdhaXQgc3VwZXIuJGRpc2Nvbm5lY3QoKTtcbiAgfVxufSJdfQ==