"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockProvider = void 0;
const common_1 = require("@nestjs/common");
let MockProvider = class MockProvider {
    async generate(request) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return {
            siteStructure: {
                pages: [
                    {
                        slug: 'home',
                        title: 'Home',
                        sections: [
                            {
                                type: 'hero',
                                props: {
                                    title: `Welcome to ${request.name}`,
                                    subtitle: `${request.profession} specializing in ${request.specialty}`,
                                    ctaText: 'Book Appointment',
                                    ctaLink: '/contact',
                                },
                            },
                            {
                                type: 'about',
                                props: {
                                    title: 'About Me',
                                    description: `Professional ${request.profession} with expertise in ${request.specialty}. Serving patients in ${request.city}.`,
                                    features: [
                                        {
                                            icon: 'graduation-cap',
                                            title: 'Qualified Professional',
                                            description: 'Certified and experienced in my field',
                                        },
                                        {
                                            icon: 'heart',
                                            title: 'Compassionate Care',
                                            description: 'Patient-centered approach to treatment',
                                        },
                                    ],
                                },
                            },
                            {
                                type: 'services',
                                props: {
                                    title: 'Services',
                                    services: [
                                        {
                                            icon: 'stethoscope',
                                            title: request.specialty,
                                            description: 'Comprehensive care and treatment',
                                        },
                                    ],
                                },
                            },
                            {
                                type: 'testimonials',
                                props: {
                                    title: 'Patient Testimonials',
                                    testimonials: [
                                        {
                                            name: 'John Doe',
                                            role: 'Patient',
                                            text: 'Excellent care and professional service.',
                                        },
                                    ],
                                },
                            },
                            {
                                type: 'contact',
                                props: {
                                    title: 'Contact',
                                    phone: request.whatsapp,
                                    email: 'contact@example.com',
                                    address: request.address,
                                    whatsapp: request.whatsapp,
                                    socialLinks: request.socialLinks.map(link => ({
                                        platform: link.split('.')[0],
                                        url: link,
                                    })),
                                },
                            },
                        ],
                    },
                ],
            },
            texts: {
                title: `${request.name} - ${request.profession} in ${request.city}`,
                description: `Professional ${request.profession} specializing in ${request.specialty}. Serving ${request.city} and surrounding areas.`,
                services: [
                    {
                        icon: 'stethoscope',
                        title: request.specialty,
                        description: 'Comprehensive healthcare services',
                    },
                ],
                testimonials: [
                    {
                        name: 'Jane Smith',
                        role: 'Patient',
                        text: 'Amazing experience with Dr. Silva. Highly recommended!',
                    },
                ],
            },
            seo: {
                title: `${request.name} | ${request.profession} in ${request.city}`,
                description: `Book an appointment with ${request.name}, a professional ${request.profession} in ${request.city}. Specializing in ${request.specialty}.`,
            },
            imageSuggestions: [
                `https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80`,
                `https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80`,
                `https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80`,
            ],
        };
    }
};
exports.MockProvider = MockProvider;
exports.MockProvider = MockProvider = __decorate([
    (0, common_1.Injectable)()
], MockProvider);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vY2sucHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBQTRDO0FBSXJDLElBQU0sWUFBWSxHQUFsQixNQUFNLFlBQVk7SUFDdkIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFxQjtRQUNsQyxNQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRXhELE9BQU87WUFDTCxhQUFhLEVBQUU7Z0JBQ2IsS0FBSyxFQUFFO29CQUNMO3dCQUNFLElBQUksRUFBRSxNQUFNO3dCQUNaLEtBQUssRUFBRSxNQUFNO3dCQUNiLFFBQVEsRUFBRTs0QkFDUjtnQ0FDRSxJQUFJLEVBQUUsTUFBTTtnQ0FDWixLQUFLLEVBQUU7b0NBQ0wsS0FBSyxFQUFFLGNBQWMsT0FBTyxDQUFDLElBQUksRUFBRTtvQ0FDbkMsUUFBUSxFQUFFLEdBQUcsT0FBTyxDQUFDLFVBQVUsb0JBQW9CLE9BQU8sQ0FBQyxTQUFTLEVBQUU7b0NBQ3RFLE9BQU8sRUFBRSxrQkFBa0I7b0NBQzNCLE9BQU8sRUFBRSxVQUFVO2lDQUNwQjs2QkFDRjs0QkFDRDtnQ0FDRSxJQUFJLEVBQUUsT0FBTztnQ0FDYixLQUFLLEVBQUU7b0NBQ0wsS0FBSyxFQUFFLFVBQVU7b0NBQ2pCLFdBQVcsRUFBRSxnQkFBZ0IsT0FBTyxDQUFDLFVBQVUsc0JBQXNCLE9BQU8sQ0FBQyxTQUFTLHlCQUF5QixPQUFPLENBQUMsSUFBSSxHQUFHO29DQUM5SCxRQUFRLEVBQUU7d0NBQ1I7NENBQ0UsSUFBSSxFQUFFLGdCQUFnQjs0Q0FDdEIsS0FBSyxFQUFFLHdCQUF3Qjs0Q0FDL0IsV0FBVyxFQUFFLHVDQUF1Qzt5Q0FDckQ7d0NBQ0Q7NENBQ0UsSUFBSSxFQUFFLE9BQU87NENBQ2IsS0FBSyxFQUFFLG9CQUFvQjs0Q0FDM0IsV0FBVyxFQUFFLHdDQUF3Qzt5Q0FDdEQ7cUNBQ0Y7aUNBQ0Y7NkJBQ0Y7NEJBQ0Q7Z0NBQ0UsSUFBSSxFQUFFLFVBQVU7Z0NBQ2hCLEtBQUssRUFBRTtvQ0FDTCxLQUFLLEVBQUUsVUFBVTtvQ0FDakIsUUFBUSxFQUFFO3dDQUNSOzRDQUNFLElBQUksRUFBRSxhQUFhOzRDQUNuQixLQUFLLEVBQUUsT0FBTyxDQUFDLFNBQVM7NENBQ3hCLFdBQVcsRUFBRSxrQ0FBa0M7eUNBQ2hEO3FDQUNGO2lDQUNGOzZCQUNGOzRCQUNEO2dDQUNFLElBQUksRUFBRSxjQUFjO2dDQUNwQixLQUFLLEVBQUU7b0NBQ0wsS0FBSyxFQUFFLHNCQUFzQjtvQ0FDN0IsWUFBWSxFQUFFO3dDQUNaOzRDQUNFLElBQUksRUFBRSxVQUFVOzRDQUNoQixJQUFJLEVBQUUsU0FBUzs0Q0FDZixJQUFJLEVBQUUsMENBQTBDO3lDQUNqRDtxQ0FDRjtpQ0FDRjs2QkFDRjs0QkFDRDtnQ0FDRSxJQUFJLEVBQUUsU0FBUztnQ0FDZixLQUFLLEVBQUU7b0NBQ0wsS0FBSyxFQUFFLFNBQVM7b0NBQ2hCLEtBQUssRUFBRSxPQUFPLENBQUMsUUFBUTtvQ0FDdkIsS0FBSyxFQUFFLHFCQUFxQjtvQ0FDNUIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPO29DQUN4QixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7b0NBQzFCLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7d0NBQzVDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3Q0FDNUIsR0FBRyxFQUFFLElBQUk7cUNBQ1YsQ0FBQyxDQUFDO2lDQUNKOzZCQUNGO3lCQUNGO3FCQUNGO2lCQUNGO2FBQ0Y7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksTUFBTSxPQUFPLENBQUMsVUFBVSxPQUFPLE9BQU8sQ0FBQyxJQUFJLEVBQUU7Z0JBQ25FLFdBQVcsRUFBRSxnQkFBZ0IsT0FBTyxDQUFDLFVBQVUsb0JBQW9CLE9BQU8sQ0FBQyxTQUFTLGFBQWEsT0FBTyxDQUFDLElBQUkseUJBQXlCO2dCQUN0SSxRQUFRLEVBQUU7b0JBQ1I7d0JBQ0UsSUFBSSxFQUFFLGFBQWE7d0JBQ25CLEtBQUssRUFBRSxPQUFPLENBQUMsU0FBUzt3QkFDeEIsV0FBVyxFQUFFLG1DQUFtQztxQkFDakQ7aUJBQ0Y7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaO3dCQUNFLElBQUksRUFBRSxZQUFZO3dCQUNsQixJQUFJLEVBQUUsU0FBUzt3QkFDZixJQUFJLEVBQUUsd0RBQXdEO3FCQUMvRDtpQkFDRjthQUNGO1lBQ0QsR0FBRyxFQUFFO2dCQUNILEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLE1BQU0sT0FBTyxDQUFDLFVBQVUsT0FBTyxPQUFPLENBQUMsSUFBSSxFQUFFO2dCQUNuRSxXQUFXLEVBQUUsNEJBQTRCLE9BQU8sQ0FBQyxJQUFJLG9CQUFvQixPQUFPLENBQUMsVUFBVSxPQUFPLE9BQU8sQ0FBQyxJQUFJLHFCQUFxQixPQUFPLENBQUMsU0FBUyxHQUFHO2FBQ3hKO1lBQ0QsZ0JBQWdCLEVBQUU7Z0JBQ2hCLHNFQUFzRTtnQkFDdEUseUVBQXlFO2dCQUN6RSx5RUFBeUU7YUFDMUU7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFoSFksb0NBQVk7dUJBQVosWUFBWTtJQUR4QixJQUFBLG1CQUFVLEdBQUU7R0FDQSxZQUFZLENBZ0h4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBBaVByb3ZpZGVyLCBBaVJlcXVlc3REdG8sIEFpUmVzcG9uc2VEdG8gfSBmcm9tICcuLi9haS5wcm92aWRlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2NrUHJvdmlkZXIgaW1wbGVtZW50cyBBaVByb3ZpZGVyIHtcbiAgYXN5bmMgZ2VuZXJhdGUocmVxdWVzdDogQWlSZXF1ZXN0RHRvKTogUHJvbWlzZTxBaVJlc3BvbnNlRHRvPiB7XG4gICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKTtcblxuICAgIHJldHVybiB7XG4gICAgICBzaXRlU3RydWN0dXJlOiB7XG4gICAgICAgIHBhZ2VzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2x1ZzogJ2hvbWUnLFxuICAgICAgICAgICAgdGl0bGU6ICdIb21lJyxcbiAgICAgICAgICAgIHNlY3Rpb25zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaGVybycsXG4gICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBgV2VsY29tZSB0byAke3JlcXVlc3QubmFtZX1gLFxuICAgICAgICAgICAgICAgICAgc3VidGl0bGU6IGAke3JlcXVlc3QucHJvZmVzc2lvbn0gc3BlY2lhbGl6aW5nIGluICR7cmVxdWVzdC5zcGVjaWFsdHl9YCxcbiAgICAgICAgICAgICAgICAgIGN0YVRleHQ6ICdCb29rIEFwcG9pbnRtZW50JyxcbiAgICAgICAgICAgICAgICAgIGN0YUxpbms6ICcvY29udGFjdCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdhYm91dCcsXG4gICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQWJvdXQgTWUnLFxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBQcm9mZXNzaW9uYWwgJHtyZXF1ZXN0LnByb2Zlc3Npb259IHdpdGggZXhwZXJ0aXNlIGluICR7cmVxdWVzdC5zcGVjaWFsdHl9LiBTZXJ2aW5nIHBhdGllbnRzIGluICR7cmVxdWVzdC5jaXR5fS5gLFxuICAgICAgICAgICAgICAgICAgZmVhdHVyZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGljb246ICdncmFkdWF0aW9uLWNhcCcsXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdRdWFsaWZpZWQgUHJvZmVzc2lvbmFsJyxcbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NlcnRpZmllZCBhbmQgZXhwZXJpZW5jZWQgaW4gbXkgZmllbGQnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2hlYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0NvbXBhc3Npb25hdGUgQ2FyZScsXG4gICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQYXRpZW50LWNlbnRlcmVkIGFwcHJvYWNoIHRvIHRyZWF0bWVudCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2VydmljZXMnLFxuICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ1NlcnZpY2VzJyxcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2VzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3RldGhvc2NvcGUnLFxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXF1ZXN0LnNwZWNpYWx0eSxcbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbXByZWhlbnNpdmUgY2FyZSBhbmQgdHJlYXRtZW50JyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXN0aW1vbmlhbHMnLFxuICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ1BhdGllbnQgVGVzdGltb25pYWxzJyxcbiAgICAgICAgICAgICAgICAgIHRlc3RpbW9uaWFsczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0pvaG4gRG9lJyxcbiAgICAgICAgICAgICAgICAgICAgICByb2xlOiAnUGF0aWVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0V4Y2VsbGVudCBjYXJlIGFuZCBwcm9mZXNzaW9uYWwgc2VydmljZS4nLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2NvbnRhY3QnLFxuICAgICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ0NvbnRhY3QnLFxuICAgICAgICAgICAgICAgICAgcGhvbmU6IHJlcXVlc3Qud2hhdHNhcHAsXG4gICAgICAgICAgICAgICAgICBlbWFpbDogJ2NvbnRhY3RAZXhhbXBsZS5jb20nLFxuICAgICAgICAgICAgICAgICAgYWRkcmVzczogcmVxdWVzdC5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgd2hhdHNhcHA6IHJlcXVlc3Qud2hhdHNhcHAsXG4gICAgICAgICAgICAgICAgICBzb2NpYWxMaW5rczogcmVxdWVzdC5zb2NpYWxMaW5rcy5tYXAobGluayA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybTogbGluay5zcGxpdCgnLicpWzBdLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGxpbmssXG4gICAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB0ZXh0czoge1xuICAgICAgICB0aXRsZTogYCR7cmVxdWVzdC5uYW1lfSAtICR7cmVxdWVzdC5wcm9mZXNzaW9ufSBpbiAke3JlcXVlc3QuY2l0eX1gLFxuICAgICAgICBkZXNjcmlwdGlvbjogYFByb2Zlc3Npb25hbCAke3JlcXVlc3QucHJvZmVzc2lvbn0gc3BlY2lhbGl6aW5nIGluICR7cmVxdWVzdC5zcGVjaWFsdHl9LiBTZXJ2aW5nICR7cmVxdWVzdC5jaXR5fSBhbmQgc3Vycm91bmRpbmcgYXJlYXMuYCxcbiAgICAgICAgc2VydmljZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiAnc3RldGhvc2NvcGUnLFxuICAgICAgICAgICAgdGl0bGU6IHJlcXVlc3Quc3BlY2lhbHR5LFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDb21wcmVoZW5zaXZlIGhlYWx0aGNhcmUgc2VydmljZXMnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHRlc3RpbW9uaWFsczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdKYW5lIFNtaXRoJyxcbiAgICAgICAgICAgIHJvbGU6ICdQYXRpZW50JyxcbiAgICAgICAgICAgIHRleHQ6ICdBbWF6aW5nIGV4cGVyaWVuY2Ugd2l0aCBEci4gU2lsdmEuIEhpZ2hseSByZWNvbW1lbmRlZCEnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgc2VvOiB7XG4gICAgICAgIHRpdGxlOiBgJHtyZXF1ZXN0Lm5hbWV9IHwgJHtyZXF1ZXN0LnByb2Zlc3Npb259IGluICR7cmVxdWVzdC5jaXR5fWAsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgQm9vayBhbiBhcHBvaW50bWVudCB3aXRoICR7cmVxdWVzdC5uYW1lfSwgYSBwcm9mZXNzaW9uYWwgJHtyZXF1ZXN0LnByb2Zlc3Npb259IGluICR7cmVxdWVzdC5jaXR5fS4gU3BlY2lhbGl6aW5nIGluICR7cmVxdWVzdC5zcGVjaWFsdHl9LmAsXG4gICAgICB9LFxuICAgICAgaW1hZ2VTdWdnZXN0aW9uczogW1xuICAgICAgICBgaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTk4Mzk3MzQtMmI3MWVhMTk3ZWMyP3c9ODAwJnE9ODBgLFxuICAgICAgICBgaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTk0OTQwMjY4OTItODBiYmQyZDZmZDBkP3c9ODAwJnE9ODBgLFxuICAgICAgICBgaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NzYwOTExNjAzOTktMTEyYmE4ZDI1ZDFkP3c9ODAwJnE9ODBgLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59Il19