"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupDto = void 0;
class SignupDto {
    static validate(data) {
        const errors = [];
        if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            errors.push('Invalid email format');
        }
        if (!data.password || data.password.length < 6) {
            errors.push('Password must be at least 6 characters');
        }
        return {
            valid: errors.length === 0,
            errors,
        };
    }
}
exports.SignupDto = SignupDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmR0by5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5kdG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBYSxTQUFTO0lBS3BCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBUztRQUN2QixNQUFNLE1BQU0sR0FBYSxFQUFFLENBQUM7UUFFNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDLHdDQUF3QyxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUVELE9BQU87WUFDTCxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQzFCLE1BQU07U0FDUCxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBckJELDhCQXFCQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTaWdudXBEdG8ge1xuICBlbWFpbCE6IHN0cmluZztcbiAgcGFzc3dvcmQhOiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG5cbiAgc3RhdGljIHZhbGlkYXRlKGRhdGE6IGFueSk6IHsgdmFsaWQ6IGJvb2xlYW47IGVycm9yczogc3RyaW5nW10gfSB7XG4gICAgY29uc3QgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgaWYgKCFkYXRhLmVtYWlsIHx8ICEvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskLy50ZXN0KGRhdGEuZW1haWwpKSB7XG4gICAgICBlcnJvcnMucHVzaCgnSW52YWxpZCBlbWFpbCBmb3JtYXQnKTtcbiAgICB9XG5cbiAgICBpZiAoIWRhdGEucGFzc3dvcmQgfHwgZGF0YS5wYXNzd29yZC5sZW5ndGggPCA2KSB7XG4gICAgICBlcnJvcnMucHVzaCgnUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsaWQ6IGVycm9ycy5sZW5ndGggPT09IDAsXG4gICAgICBlcnJvcnMsXG4gICAgfTtcbiAgfVxufSJdfQ==