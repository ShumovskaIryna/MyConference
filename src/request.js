const getAllConferences = async () => ({
  data: {
    conferences: [
      {
        id: '1',
        name: 'Birthday Alex Skryhun',
        date: 'August 13, 2022 (05:00 PM)',
        location: { lat: 47.839984704870645, lng: 35.12596258205736 },
        country: 'Ukraine',
      },
      {
        id: '2',
        name: 'Dantist',
        date: 'August 16, 2022 (06:00 PM)',
        location: { lat: 47.839984704870645, lng: 35.12596258205736 },
        country: 'Ukraine',
      },
    ],
  },
});
export default getAllConferences;
