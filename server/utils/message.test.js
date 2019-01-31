const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		let from = 'Jen';
		let text = 'some message';
		let message = generateMessage(from, text);

		expect(message.createdAt).toBeDefined();
		expect(message.from).toEqual(from);
		expect(message.text).toEqual(text);

	});
});

describe('generateLocationMessage', ()=> {
	it('should generate correct location object', ()=>{
		let from = 'Jen';
		let latitude = 52.52;
		let longitude = 13.41;
		let url =`https://www.google.com/maps?q=52.52,13.41`;
		let message = generateLocationMessage(from, latitude, longitude);

		expect(message.createdAt).toBeDefined();
		expect(message.from).toEqual(from);
		expect(message.url).toEqual(url);
	})
});