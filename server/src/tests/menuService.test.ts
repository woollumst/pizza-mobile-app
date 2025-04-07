const mockRepo = {
    findAll: jest.fn(),
    findById: jest.fn(),
    create: jest.fn(),
};

const menuService = new menuService(mockRepo as any);