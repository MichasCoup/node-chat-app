const expect = require('expect');
const {Users} = require('./users');

describe('Users', () =>{

	let users;

	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: '1',
			name: 'Michael',
			room: 'Marketing'
		},{
			id: '2',
			name: 'John',
			room: 'IT'
		},{
			id: '3',
			name: 'Julia',
			room: 'Marketing'
		}]
	});

	it('should add new user', () =>{
		let users = new Users();
		let user = {
			id: '123',
			name: 'Micha',
			room: 'Marketing'
		};
		let resUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);
	});

	it('should remove a user', () => {
		let userId = '3';
		let user = users.removeUser(userId);

		expect(user.id).toEqual(userId);
		expect(users.users.length).toEqual(2);
	});

	it('should not remove user', () => {
		let userId = '99';
		let user = users.removeUser(userId);

		expect(user).toBeFalsy();
		expect(users.users.length).toEqual(3);
	});

	it('should find user', () => {
		let userId = '2';
		let user = users.getUser(userId);

		expect(user.id).toBe(userId);
	});

	it('should not find user', () => {
		let userId = '99';
		let user = users.getUser(userId);

		expect(user).toBeFalsy();
	});

	it('should return name for marketing', () => {
		let userList = users.getUserList('Marketing');

		expect(userList).toEqual(['Michael', 'Julia']);
	});
	it('should return name for IT', () => {
		let userList = users.getUserList('IT');

		expect(userList).toEqual(['John']);
	});
});