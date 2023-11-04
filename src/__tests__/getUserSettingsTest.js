import Settings from "../getUserSettings";

const usedSettings = new Settings;

test.each([
    ['music', 'pop', { 'theme': 'dark', 'music': 'pop', 'difficulty': 'easy' }],
    ['music', 'off', { 'theme': 'dark', 'music': 'off', 'difficulty': 'easy' }],
    ['difficulty', 'nightmare', {'theme': 'dark', 'music': 'off', 'difficulty': 'nightmare'}],
])("Testing default & user's settings", (key, value, expected) => {
    const recieved = usedSettings.getUserSettings(key, value);
    expect(Object.fromEntries(recieved)).toEqual(expected);
});

test.each([
    [usedSettings.defaultSettings, { 'theme': 'dark', 'music': 'trance', 'difficulty': 'easy' }],
    [usedSettings.userSettings, {'music': 'off', 'difficulty': 'nightmare'}],   // не должно быть темы
])("Testing conteiners", (conteiner, expected) => {
    expect(Object.fromEntries(conteiner)).toEqual(expected);
});
