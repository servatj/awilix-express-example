import { UserService } from '../../src/services/UserService';

describe('UserService', () => {
  it('should return a list of users', () => {
    const getUserMock = jest.fn();
    getUserMock.mockReturnValue([{ name: 'John Doe' }]);
    
    const userService = new UserService({ userRepository: { getUsers: getUserMock } });
    const users = userService.getUsers();
    expect(users).toBeDefined();
    expect(users.length).toBeGreaterThan(0);
    expect(users[0].name).toBe('John Doe');
    expect(getUserMock).toHaveBeenCalled();
  });
});
