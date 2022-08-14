const getAllConferences = async () => ({
  data: {
    conferences: [
      {
        id: '1',
        name: 'Birthday Alex Skryhun',
        date: 'Sun, August 14, 2022',
        location: { lat: 47.839984704870645, lng: 35.12596258205736 },
        country: 'Ukraine',
      },
      {
        id: '2',
        name: 'Dantist',
        date: 'Tue, August 16, 2022',
        location: { lat: 47.839984704870645, lng: 35.12596258205736 },
        country: 'Ukraine',
      },
    ],
  },
});

const getConferenceById = async () => ({
  data: {
    conference: {
      id: '1',
      name: 'Birthday Alex Skryhun',
      date: 'Mon, August 15, 2022',
      location: { lat: 47.839984704870645, lng: 35.12596258205736 },
      country: 'Ukraine',
    },
  },
});

// export default getAllConferences;
export {
  getAllConferences,
  getConferenceById,
};
