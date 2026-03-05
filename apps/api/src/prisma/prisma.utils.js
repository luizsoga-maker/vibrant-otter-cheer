"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
exports.getUserByEmail = getUserByEmail;
exports.createTestSite = createTestSite;
const client_1 = require("@prisma/client");
exports.prisma = new client_1.PrismaClient();
async function getUserByEmail(email) {
    try {
        return await exports.prisma.user.findUnique({ where: { email } });
    }
    catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
}
async function createTestSite() {
    try {
        return await exports.prisma.site.create({
            data: {
                name: 'Test Site',
                slug: 'test-site',
                theme: {
                    colors: {
                        primary: '#3b82f6',
                        secondary: '#10b981',
                        background: '#ffffff',
                        text: '#333333',
                    },
                    typography: {
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        lineHeight: '1.6',
                    },
                },
                status: 'DRAFT',
            },
        });
    }
    catch (error) {
        console.error('Error creating test site:', error);
        return null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpc21hLnV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJpc21hLnV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLHdDQU9DO0FBRUQsd0NBMEJDO0FBdkNELDJDQUE4QztBQUVqQyxRQUFBLE1BQU0sR0FBRyxJQUFJLHFCQUFZLEVBQUUsQ0FBQztBQUVsQyxLQUFLLFVBQVUsY0FBYyxDQUFDLEtBQWE7SUFDaEQsSUFBSSxDQUFDO1FBQ0gsT0FBTyxNQUFNLGNBQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1FBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7QUFDSCxDQUFDO0FBRU0sS0FBSyxVQUFVLGNBQWM7SUFDbEMsSUFBSSxDQUFDO1FBQ0gsT0FBTyxNQUFNLGNBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzlCLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsV0FBVztnQkFDakIsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLEtBQUssRUFBRTtvQkFDTCxNQUFNLEVBQUU7d0JBQ04sT0FBTyxFQUFFLFNBQVM7d0JBQ2xCLFNBQVMsRUFBRSxTQUFTO3dCQUNwQixVQUFVLEVBQUUsU0FBUzt3QkFDckIsSUFBSSxFQUFFLFNBQVM7cUJBQ2hCO29CQUNELFVBQVUsRUFBRTt3QkFDVixVQUFVLEVBQUUsbUJBQW1CO3dCQUMvQixRQUFRLEVBQUUsTUFBTTt3QkFDaEIsVUFBVSxFQUFFLEtBQUs7cUJBQ2xCO2lCQUNGO2dCQUNELE1BQU0sRUFBRSxPQUFPO2FBQ2hCO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7UUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLDJCQUEyQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmV4cG9ydCBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyQnlFbWFpbChlbWFpbDogc3RyaW5nKTogUHJvbWlzZTxVc2VyIHwgbnVsbD4ge1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgZW1haWwgfSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyOicsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGVzdFNpdGUoKTogUHJvbWlzZTxTaXRlIHwgbnVsbD4ge1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBwcmlzbWEuc2l0ZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiAnVGVzdCBTaXRlJyxcbiAgICAgICAgc2x1ZzogJ3Rlc3Qtc2l0ZScsXG4gICAgICAgIHRoZW1lOiB7XG4gICAgICAgICAgY29sb3JzOiB7XG4gICAgICAgICAgICBwcmltYXJ5OiAnIzNiODJmNicsXG4gICAgICAgICAgICBzZWNvbmRhcnk6ICcjMTBiOTgxJyxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgIHRleHQ6ICcjMzMzMzMzJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHR5cG9ncmFwaHk6IHtcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdJbnRlciwgc2Fucy1zZXJpZicsXG4gICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICAgICAgbGluZUhlaWdodDogJzEuNicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdHVzOiAnRFJBRlQnLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyB0ZXN0IHNpdGU6JywgZXJyb3IpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59Il19