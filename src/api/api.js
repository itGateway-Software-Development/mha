let host = "https://admin.myanmarhotelier.org/api/v1/";

let api = {
  getZones: host + "zones",
  getHotels: host + "hotels",
  getHotelsBySubzone: host + "hotelsBySubzone",
  getNews: host + "news",
  getNewsDetail: host + "news/",
  getSearchHotels: host + "searchHotels",

  sendHotelMemberForm: host + "createHotelMemberForm",
  image_url: "https://admin.myanmarhotelier.org/storage/images/",
};

export default api;
