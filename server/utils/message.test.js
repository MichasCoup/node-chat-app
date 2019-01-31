const expect = require('expect');
const {generateMessage} = require('./message');

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