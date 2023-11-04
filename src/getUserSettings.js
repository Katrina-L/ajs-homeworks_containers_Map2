export default class Settings {
    constructor() {
        this.defaultSettings = new Map([
            ['theme', 'dark'],
            ['music', 'trance'],
            ['difficulty', 'easy'],
        ]);
        this.userSettings = new Map();
    }
    
    getUserSettings(key, value) {
        const resultSettings = new Map();
        this.userSettings.set(key, value);
        this.defaultSettings.forEach( (value, key) => resultSettings.set(key, value) );
        this.userSettings.forEach( (value, key) => resultSettings.set(key, value) );
        return resultSettings.set(key, value);
    }
}
