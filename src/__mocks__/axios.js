const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "Laith",
                    last: "Harb",
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/59.jp",
                },
                login: {
            username: "GoGoDoll"
        }
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse)
};