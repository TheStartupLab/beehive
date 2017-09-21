import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { DDPRateLimiter } from "meteor/ddp-rate-limiter";
import { fetchAllForUser, insert } from '../methods';

describe('bee methods', () => {
  it('should call fetch', () => {
    expect(ValidatedMethod).toHaveBeenCalledWith({
      name: 'bees.fetchAllForUser',
      run: jasmine.any(Function),
      validate: null,
    });
  });

  it('should call insert', () => {
    expect(ValidatedMethod).toHaveBeenCalledWith({
      name: 'bees.insert',
      run: jasmine.any(Function),
      validate: null,
    });
  });

  it('should call update name', () => {
    expect(ValidatedMethod).toHaveBeenCalledWith({
      name: 'bees.updateName',
      run: jasmine.any(Function),
      validate: jasmine.any(Function),
    });
  });

  it('should call remove', () => {
    expect(ValidatedMethod).toHaveBeenCalledWith({
      name: 'bees.remove',
      run: jasmine.any(Function),
      validate: jasmine.any(Function),
    });
  });

  it('should call removeAllForUser', () => {
    expect(ValidatedMethod).toHaveBeenCalledWith({
      name: 'bees.removeAllForUser',
      run: jasmine.any(Function),
      validate: null,
    });
  });
});
