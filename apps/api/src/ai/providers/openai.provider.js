"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIProvider = void 0;
const common_1 = require("@nestjs/common");
const openai_1 = __importDefault(require("openai"));
let OpenAIProvider = class OpenAIProvider {
    constructor() {
        this.openai = new openai_1.default({
            apiKey: process.env.OPENAI_API_KEY,
        });
    }
    async generate(request) {
        const prompt = this.buildPrompt(request);
        try {
            const completion = await this.openai.chat.completions.create({
                model: 'gpt-4',
                messages: [
                    {
                        role: 'system',
                        content: `You are a professional website generator for healthcare professionals.
            Always generate valid JSON following the exact schema.
            Include necessary disclaimers for healthcare services.
            Never promise cures or guaranteed results.
            Keep content professional and accurate.`,
                    },
                    {
                        role: 'user',
                        content: prompt,
                    },
                ],
                temperature: 0.7,
            });
            const responseText = completion.choices[0].message.content || '';
            return this.parseResponse(responseText);
        }
        catch (error) {
            throw new Error(`OpenAI API error: ${error?.message || error}`);
        }
    }
    buildPrompt(request) {
        return `
Generate a complete website structure for a healthcare professional with the following details:

Profession: ${request.profession}
Name: ${request.name}
City: ${request.city}
Specialty: ${request.specialty}
WhatsApp: ${request.whatsapp}
Address: ${request.address}
Hours: ${request.hours}
Social Links: ${request.socialLinks.join(', ')}
Tone: ${request.tone}

Requirements:
1. Create a homepage with hero, about, services, testimonials, and contact sections
2. Generate SEO-optimized title and description
3. Suggest 3 relevant images (provide placeholder URLs)
4. Include healthcare disclaimers
5. Use professional, ${request.tone} tone

Return ONLY valid JSON in this exact format:
{
  "siteStructure": {
    "pages": [
      {
        "slug": "home",
        "title": "Home",
        "sections": [
          {
            "type": "hero",
            "props": {
              "title": "Welcome to ${request.name}",
              "subtitle": "${request.profession} in ${request.city}",
              "ctaText": "Book Appointment",
              "ctaLink": "/contact"
            }
          },
          {
            "type": "about",
            "props": {
              "title": "About Me",
              "description": "Professional description here",
              "features": [
                { "icon": "graduation-cap", "title": "Qualified", "description": "Certified professional" },
                { "icon": "heart", "title": "Compassionate", "description": "Patient-centered care" }
              ]
            }
          },
          {
            "type": "services",
            "props": {
              "title": "Services",
              "services": [
                { "icon": "stethoscope", "title": "${request.specialty}", "description": "Comprehensive care" }
              ]
            }
          },
          {
            "type": "testimonials",
            "props": {
              "title": "Patient Testimonials",
              "testimonials": [
                { "name": "Patient", "role": "Patient", "text": "Excellent care!" }
              ]
            }
          },
          {
            "type": "contact",
            "props": {
              "title": "Contact",
              "phone": "${request.whatsapp}",
              "email": "contact@example.com",
              "address": "${request.address}",
              "whatsapp": "${request.whatsapp}",
              "socialLinks": ${JSON.stringify(request.socialLinks.map(link => ({ platform: link.split('.')[0], url: link })))}
            }
          }
        ]
      }
    ]
  },
  "texts": {
    "title": "${request.name} - ${request.profession} in ${request.city}",
    "description": "Professional ${request.profession} specializing in ${request.specialty} in ${request.city}",
    "services": [
      { "icon": "stethoscope", "title": "${request.specialty}", "description": "Comprehensive healthcare services" }
    ],
    "testimonials": [
      { "name": "Jane Smith", "role": "Patient", "text": "Amazing experience! Highly recommended!" }
    ]
  },
  "seo": {
    "title": "${request.name} | ${request.profession} in ${request.city}",
    "description": "Book an appointment with ${request.name}, a professional ${request.profession} in ${request.city}."
  },
  "imageSuggestions": [
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
  ]
}
`;
    }
    parseResponse(text) {
        try {
            const jsonMatch = text.match(/\{[\s\S]*\}/);
            if (!jsonMatch) {
                throw new Error('No JSON found in response');
            }
            const json = JSON.parse(jsonMatch[0]);
            return json;
        }
        catch (error) {
            throw new Error(`Failed to parse AI response: ${error?.message || error}`);
        }
    }
};
exports.OpenAIProvider = OpenAIProvider;
exports.OpenAIProvider = OpenAIProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], OpenAIProvider);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlbmFpLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3BlbmFpLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUE0QztBQUM1QyxvREFBNEI7QUFJckIsSUFBTSxjQUFjLEdBQXBCLE1BQU0sY0FBYztJQUd6QjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxnQkFBTSxDQUFDO1lBQ3ZCLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWM7U0FDbkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBcUI7UUFDbEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV6QyxJQUFJLENBQUM7WUFDSCxNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7Z0JBQzNELEtBQUssRUFBRSxPQUFPO2dCQUNkLFFBQVEsRUFBRTtvQkFDUjt3QkFDRSxJQUFJLEVBQUUsUUFBUTt3QkFDZCxPQUFPLEVBQUU7Ozs7b0RBSStCO3FCQUN6QztvQkFDRDt3QkFDRSxJQUFJLEVBQUUsTUFBTTt3QkFDWixPQUFPLEVBQUUsTUFBTTtxQkFDaEI7aUJBQ0Y7Z0JBQ0QsV0FBVyxFQUFFLEdBQUc7YUFDakIsQ0FBQyxDQUFDO1lBRUgsTUFBTSxZQUFZLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztZQUNqRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUFDLE9BQU8sS0FBVSxFQUFFLENBQUM7WUFDcEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsS0FBSyxFQUFFLE9BQU8sSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7SUFDSCxDQUFDO0lBRU8sV0FBVyxDQUFDLE9BQXFCO1FBQ3ZDLE9BQU87OztjQUdHLE9BQU8sQ0FBQyxVQUFVO1FBQ3hCLE9BQU8sQ0FBQyxJQUFJO1FBQ1osT0FBTyxDQUFDLElBQUk7YUFDUCxPQUFPLENBQUMsU0FBUztZQUNsQixPQUFPLENBQUMsUUFBUTtXQUNqQixPQUFPLENBQUMsT0FBTztTQUNqQixPQUFPLENBQUMsS0FBSztnQkFDTixPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdEMsT0FBTyxDQUFDLElBQUk7Ozs7Ozs7dUJBT0csT0FBTyxDQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7cUNBYUUsT0FBTyxDQUFDLElBQUk7NkJBQ3BCLE9BQU8sQ0FBQyxVQUFVLE9BQU8sT0FBTyxDQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREFxQmIsT0FBTyxDQUFDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQWlCNUMsT0FBTyxDQUFDLFFBQVE7OzRCQUVkLE9BQU8sQ0FBQyxPQUFPOzZCQUNkLE9BQU8sQ0FBQyxRQUFROytCQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Z0JBUTdHLE9BQU8sQ0FBQyxJQUFJLE1BQU0sT0FBTyxDQUFDLFVBQVUsT0FBTyxPQUFPLENBQUMsSUFBSTttQ0FDcEMsT0FBTyxDQUFDLFVBQVUsb0JBQW9CLE9BQU8sQ0FBQyxTQUFTLE9BQU8sT0FBTyxDQUFDLElBQUk7OzJDQUVsRSxPQUFPLENBQUMsU0FBUzs7Ozs7OztnQkFPNUMsT0FBTyxDQUFDLElBQUksTUFBTSxPQUFPLENBQUMsVUFBVSxPQUFPLE9BQU8sQ0FBQyxJQUFJOytDQUN4QixPQUFPLENBQUMsSUFBSSxvQkFBb0IsT0FBTyxDQUFDLFVBQVUsT0FBTyxPQUFPLENBQUMsSUFBSTs7Ozs7Ozs7Q0FRbkgsQ0FBQztJQUNBLENBQUM7SUFFTyxhQUFhLENBQUMsSUFBWTtRQUNoQyxJQUFJLENBQUM7WUFDSCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDZixNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFDL0MsQ0FBQztZQUNELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsT0FBTyxJQUFxQixDQUFDO1FBQy9CLENBQUM7UUFBQyxPQUFPLEtBQVUsRUFBRSxDQUFDO1lBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLEtBQUssRUFBRSxPQUFPLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQztRQUM3RSxDQUFDO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUE1Slksd0NBQWM7eUJBQWQsY0FBYztJQUQxQixJQUFBLG1CQUFVLEdBQUU7O0dBQ0EsY0FBYyxDQTRKMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IE9wZW5BSSBmcm9tICdvcGVuYWknO1xuaW1wb3J0IHsgQWlQcm92aWRlciwgQWlSZXF1ZXN0RHRvLCBBaVJlc3BvbnNlRHRvIH0gZnJvbSAnLi4vYWkucHJvdmlkZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3BlbkFJUHJvdmlkZXIgaW1wbGVtZW50cyBBaVByb3ZpZGVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSBvcGVuYWk6IE9wZW5BSTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm9wZW5haSA9IG5ldyBPcGVuQUkoe1xuICAgICAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGdlbmVyYXRlKHJlcXVlc3Q6IEFpUmVxdWVzdER0byk6IFByb21pc2U8QWlSZXNwb25zZUR0bz4ge1xuICAgIGNvbnN0IHByb21wdCA9IHRoaXMuYnVpbGRQcm9tcHQocmVxdWVzdCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgY29tcGxldGlvbiA9IGF3YWl0IHRoaXMub3BlbmFpLmNoYXQuY29tcGxldGlvbnMuY3JlYXRlKHtcbiAgICAgICAgbW9kZWw6ICdncHQtNCcsXG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcm9sZTogJ3N5c3RlbScsXG4gICAgICAgICAgICBjb250ZW50OiBgWW91IGFyZSBhIHByb2Zlc3Npb25hbCB3ZWJzaXRlIGdlbmVyYXRvciBmb3IgaGVhbHRoY2FyZSBwcm9mZXNzaW9uYWxzLlxuICAgICAgICAgICAgQWx3YXlzIGdlbmVyYXRlIHZhbGlkIEpTT04gZm9sbG93aW5nIHRoZSBleGFjdCBzY2hlbWEuXG4gICAgICAgICAgICBJbmNsdWRlIG5lY2Vzc2FyeSBkaXNjbGFpbWVycyBmb3IgaGVhbHRoY2FyZSBzZXJ2aWNlcy5cbiAgICAgICAgICAgIE5ldmVyIHByb21pc2UgY3VyZXMgb3IgZ3VhcmFudGVlZCByZXN1bHRzLlxuICAgICAgICAgICAgS2VlcCBjb250ZW50IHByb2Zlc3Npb25hbCBhbmQgYWNjdXJhdGUuYCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJvbGU6ICd1c2VyJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHByb21wdCxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICB0ZW1wZXJhdHVyZTogMC43LFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlVGV4dCA9IGNvbXBsZXRpb24uY2hvaWNlc1swXS5tZXNzYWdlLmNvbnRlbnQgfHwgJyc7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZVJlc3BvbnNlKHJlc3BvbnNlVGV4dCk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPcGVuQUkgQVBJIGVycm9yOiAke2Vycm9yPy5tZXNzYWdlIHx8IGVycm9yfWApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRQcm9tcHQocmVxdWVzdDogQWlSZXF1ZXN0RHRvKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuR2VuZXJhdGUgYSBjb21wbGV0ZSB3ZWJzaXRlIHN0cnVjdHVyZSBmb3IgYSBoZWFsdGhjYXJlIHByb2Zlc3Npb25hbCB3aXRoIHRoZSBmb2xsb3dpbmcgZGV0YWlsczpcblxuUHJvZmVzc2lvbjogJHtyZXF1ZXN0LnByb2Zlc3Npb259XG5OYW1lOiAke3JlcXVlc3QubmFtZX1cbkNpdHk6ICR7cmVxdWVzdC5jaXR5fVxuU3BlY2lhbHR5OiAke3JlcXVlc3Quc3BlY2lhbHR5fVxuV2hhdHNBcHA6ICR7cmVxdWVzdC53aGF0c2FwcH1cbkFkZHJlc3M6ICR7cmVxdWVzdC5hZGRyZXNzfVxuSG91cnM6ICR7cmVxdWVzdC5ob3Vyc31cblNvY2lhbCBMaW5rczogJHtyZXF1ZXN0LnNvY2lhbExpbmtzLmpvaW4oJywgJyl9XG5Ub25lOiAke3JlcXVlc3QudG9uZX1cblxuUmVxdWlyZW1lbnRzOlxuMS4gQ3JlYXRlIGEgaG9tZXBhZ2Ugd2l0aCBoZXJvLCBhYm91dCwgc2VydmljZXMsIHRlc3RpbW9uaWFscywgYW5kIGNvbnRhY3Qgc2VjdGlvbnNcbjIuIEdlbmVyYXRlIFNFTy1vcHRpbWl6ZWQgdGl0bGUgYW5kIGRlc2NyaXB0aW9uXG4zLiBTdWdnZXN0IDMgcmVsZXZhbnQgaW1hZ2VzIChwcm92aWRlIHBsYWNlaG9sZGVyIFVSTHMpXG40LiBJbmNsdWRlIGhlYWx0aGNhcmUgZGlzY2xhaW1lcnNcbjUuIFVzZSBwcm9mZXNzaW9uYWwsICR7cmVxdWVzdC50b25lfSB0b25lXG5cblJldHVybiBPTkxZIHZhbGlkIEpTT04gaW4gdGhpcyBleGFjdCBmb3JtYXQ6XG57XG4gIFwic2l0ZVN0cnVjdHVyZVwiOiB7XG4gICAgXCJwYWdlc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwic2x1Z1wiOiBcImhvbWVcIixcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhvbWVcIixcbiAgICAgICAgXCJzZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaGVyb1wiLFxuICAgICAgICAgICAgXCJwcm9wc1wiOiB7XG4gICAgICAgICAgICAgIFwidGl0bGVcIjogXCJXZWxjb21lIHRvICR7cmVxdWVzdC5uYW1lfVwiLFxuICAgICAgICAgICAgICBcInN1YnRpdGxlXCI6IFwiJHtyZXF1ZXN0LnByb2Zlc3Npb259IGluICR7cmVxdWVzdC5jaXR5fVwiLFxuICAgICAgICAgICAgICBcImN0YVRleHRcIjogXCJCb29rIEFwcG9pbnRtZW50XCIsXG4gICAgICAgICAgICAgIFwiY3RhTGlua1wiOiBcIi9jb250YWN0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImFib3V0XCIsXG4gICAgICAgICAgICBcInByb3BzXCI6IHtcbiAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkFib3V0IE1lXCIsXG4gICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJQcm9mZXNzaW9uYWwgZGVzY3JpcHRpb24gaGVyZVwiLFxuICAgICAgICAgICAgICBcImZlYXR1cmVzXCI6IFtcbiAgICAgICAgICAgICAgICB7IFwiaWNvblwiOiBcImdyYWR1YXRpb24tY2FwXCIsIFwidGl0bGVcIjogXCJRdWFsaWZpZWRcIiwgXCJkZXNjcmlwdGlvblwiOiBcIkNlcnRpZmllZCBwcm9mZXNzaW9uYWxcIiB9LFxuICAgICAgICAgICAgICAgIHsgXCJpY29uXCI6IFwiaGVhcnRcIiwgXCJ0aXRsZVwiOiBcIkNvbXBhc3Npb25hdGVcIiwgXCJkZXNjcmlwdGlvblwiOiBcIlBhdGllbnQtY2VudGVyZWQgY2FyZVwiIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2VydmljZXNcIixcbiAgICAgICAgICAgIFwicHJvcHNcIjoge1xuICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiU2VydmljZXNcIixcbiAgICAgICAgICAgICAgXCJzZXJ2aWNlc1wiOiBbXG4gICAgICAgICAgICAgICAgeyBcImljb25cIjogXCJzdGV0aG9zY29wZVwiLCBcInRpdGxlXCI6IFwiJHtyZXF1ZXN0LnNwZWNpYWx0eX1cIiwgXCJkZXNjcmlwdGlvblwiOiBcIkNvbXByZWhlbnNpdmUgY2FyZVwiIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGVzdGltb25pYWxzXCIsXG4gICAgICAgICAgICBcInByb3BzXCI6IHtcbiAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlBhdGllbnQgVGVzdGltb25pYWxzXCIsXG4gICAgICAgICAgICAgIFwidGVzdGltb25pYWxzXCI6IFtcbiAgICAgICAgICAgICAgICB7IFwibmFtZVwiOiBcIlBhdGllbnRcIiwgXCJyb2xlXCI6IFwiUGF0aWVudFwiLCBcInRleHRcIjogXCJFeGNlbGxlbnQgY2FyZSFcIiB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImNvbnRhY3RcIixcbiAgICAgICAgICAgIFwicHJvcHNcIjoge1xuICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiQ29udGFjdFwiLFxuICAgICAgICAgICAgICBcInBob25lXCI6IFwiJHtyZXF1ZXN0LndoYXRzYXBwfVwiLFxuICAgICAgICAgICAgICBcImVtYWlsXCI6IFwiY29udGFjdEBleGFtcGxlLmNvbVwiLFxuICAgICAgICAgICAgICBcImFkZHJlc3NcIjogXCIke3JlcXVlc3QuYWRkcmVzc31cIixcbiAgICAgICAgICAgICAgXCJ3aGF0c2FwcFwiOiBcIiR7cmVxdWVzdC53aGF0c2FwcH1cIixcbiAgICAgICAgICAgICAgXCJzb2NpYWxMaW5rc1wiOiAke0pTT04uc3RyaW5naWZ5KHJlcXVlc3Quc29jaWFsTGlua3MubWFwKGxpbmsgPT4gKHsgcGxhdGZvcm06IGxpbmsuc3BsaXQoJy4nKVswXSwgdXJsOiBsaW5rIH0pKSl9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcInRleHRzXCI6IHtcbiAgICBcInRpdGxlXCI6IFwiJHtyZXF1ZXN0Lm5hbWV9IC0gJHtyZXF1ZXN0LnByb2Zlc3Npb259IGluICR7cmVxdWVzdC5jaXR5fVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJQcm9mZXNzaW9uYWwgJHtyZXF1ZXN0LnByb2Zlc3Npb259IHNwZWNpYWxpemluZyBpbiAke3JlcXVlc3Quc3BlY2lhbHR5fSBpbiAke3JlcXVlc3QuY2l0eX1cIixcbiAgICBcInNlcnZpY2VzXCI6IFtcbiAgICAgIHsgXCJpY29uXCI6IFwic3RldGhvc2NvcGVcIiwgXCJ0aXRsZVwiOiBcIiR7cmVxdWVzdC5zcGVjaWFsdHl9XCIsIFwiZGVzY3JpcHRpb25cIjogXCJDb21wcmVoZW5zaXZlIGhlYWx0aGNhcmUgc2VydmljZXNcIiB9XG4gICAgXSxcbiAgICBcInRlc3RpbW9uaWFsc1wiOiBbXG4gICAgICB7IFwibmFtZVwiOiBcIkphbmUgU21pdGhcIiwgXCJyb2xlXCI6IFwiUGF0aWVudFwiLCBcInRleHRcIjogXCJBbWF6aW5nIGV4cGVyaWVuY2UhIEhpZ2hseSByZWNvbW1lbmRlZCFcIiB9XG4gICAgXVxuICB9LFxuICBcInNlb1wiOiB7XG4gICAgXCJ0aXRsZVwiOiBcIiR7cmVxdWVzdC5uYW1lfSB8ICR7cmVxdWVzdC5wcm9mZXNzaW9ufSBpbiAke3JlcXVlc3QuY2l0eX1cIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQm9vayBhbiBhcHBvaW50bWVudCB3aXRoICR7cmVxdWVzdC5uYW1lfSwgYSBwcm9mZXNzaW9uYWwgJHtyZXF1ZXN0LnByb2Zlc3Npb259IGluICR7cmVxdWVzdC5jaXR5fS5cIlxuICB9LFxuICBcImltYWdlU3VnZ2VzdGlvbnNcIjogW1xuICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTk4Mzk3MzQtMmI3MWVhMTk3ZWMyP3c9ODAwJnE9ODBcIixcbiAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE5NDk0MDI2ODkyLTgwYmJkMmQ2ZmQwZD93PTgwMCZxPTgwXCIsXG4gICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU3NjA5MTE2MDM5OS0xMTJiYThkMjVkMWQ/dz04MDAmcT04MFwiXG4gIF1cbn1cbmA7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlUmVzcG9uc2UodGV4dDogc3RyaW5nKTogQWlSZXNwb25zZUR0byB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGpzb25NYXRjaCA9IHRleHQubWF0Y2goL1xce1tcXHNcXFNdKlxcfS8pO1xuICAgICAgaWYgKCFqc29uTWF0Y2gpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBKU09OIGZvdW5kIGluIHJlc3BvbnNlJyk7XG4gICAgICB9XG4gICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShqc29uTWF0Y2hbMF0pO1xuICAgICAgcmV0dXJuIGpzb24gYXMgQWlSZXNwb25zZUR0bztcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBBSSByZXNwb25zZTogJHtlcnJvcj8ubWVzc2FnZSB8fCBlcnJvcn1gKTtcbiAgICB9XG4gIH1cbn0iXX0=