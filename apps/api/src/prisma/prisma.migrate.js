"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    try {
        // Run migrations
        await prisma.$migrate();
        console.log('Migrations applied successfully');
    }
    catch (error) {
        console.error('Migration failed:', error);
        process.exit(1);
    }
}
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpc21hLm1pZ3JhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcmlzbWEubWlncmF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE4QztBQUU5QyxNQUFNLE1BQU0sR0FBRyxJQUFJLHFCQUFZLEVBQUUsQ0FBQztBQUVsQyxLQUFLLFVBQVUsSUFBSTtJQUNqQixJQUFJLENBQUM7UUFDSCxpQkFBaUI7UUFDakIsTUFBTSxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1FBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7QUFDSCxDQUFDO0FBRUQsSUFBSSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcbiAgdHJ5IHtcbiAgICAvLyBSdW4gbWlncmF0aW9uc1xuICAgIGF3YWl0IHByaXNtYS4kbWlncmF0ZSgpO1xuICAgIGNvbnNvbGUubG9nKCdNaWdyYXRpb25zIGFwcGxpZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignTWlncmF0aW9uIGZhaWxlZDonLCBlcnJvcik7XG4gICAgcHJvY2Vzcy5leGl0KDEpO1xuICB9XG59XG5cbm1haW4oKTsiXX0=