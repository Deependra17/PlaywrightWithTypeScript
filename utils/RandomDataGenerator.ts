
    class RandomDataGenerator {
    static randomEmail(domain = "example.com") {
        const randomStr = Math.random().toString(36).substring(2, 10);
        return `user_${randomStr}@${domain}`;
    }

    static randomString(length = 8) {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars[Math.floor(Math.random() * chars.length)];
        }
        return result;
    }

    static randomNumber(min = 0, max = 1000) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
export {RandomDataGenerator};
