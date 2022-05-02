import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {
  salonArr: [
    {
      name: "Affinity Salon",
      description:
        "Affinity is a unisex salon that offers the best of hair and beauty treatments. This salon offers cutting-edge treatments and styles in a chic ambience. Their stylists have received training from some of the best and reputed institutions, so you can just sit back and let them work their magic!  ",
      address: "Green Park, Def Col, Khan Market",
      timings: "10 AM - 8 PM",
      //   photos: []
    },
    {
      name: "Monsoon Salon & Spa",
      description:
        "Their goal is to change the face of hairdressing for a sustainable future for the next generation of passionate, artistic and articulate hair stylists. You can just come here, tell the stylist what you want and just watch them work their magic! And, if you want to avail some great discounts, then you can become a member of this salon and enjoy up to 50% off on all their services.",
      address: "Dwarka, Rajouri Garden, GGN",
      timings: "10 AM - 8 PM",
    },
    {
      name: "Martina Wu Salon",
      description:
        "Martina Wu is known as one of the best hairstylists in Delhi who understands all kinds of hair types (especially curly hair) and hair woes. Getting an appointment at her salon requires quite a bit of determination, so make sure you book well in advance and then just let her work her magic. Do remember that these guys are shut on Tuesdays, so plan your trip accordingly!",
      address: " C93, Geetanjali Marg, Block C, Shivalik Colony, Malviya Nagar",
      timings: "10 AM - 7:30 PM",
    },
    {
      name: "Jawed Habib Hair & Beauty Salon",
      description:
        "Jawed Habib comes from a family which has been in the hair business for more than a century. His grandfather, Nazir Ahmed was the hairstylist of none other than Jawaharlal Nehru and Lord Mountbatten. What we’re saying is that you can expect nothing but a great hair experience at this place! So book an appointment right away.",
      address: "Lajpat Nagar II, Hauz Khas, Khan Market ",
      timings: "10 AM - 8 PM",
    },
    {
      name: "Vikings Salon",
      description:
        "This chic and stylish place nestled in GK II is not only an exquisite salon but also a speakeasy fashion house. They specialize in hair colouring techniques like balayage, ombre and global and other treatments like Loreal Mythic Oil Royal Spa, Ola Plex Bond Multiplying and lots more that are enough to give your hair the much-needed nourishment and care!",
      address: "M 28, M Block Market, GK II",
      timings: "10:30 AM - 8:30 PM",
    },
  ],

};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
   
  },
});

export const modalActions = modalSlice.actions;

const store = configureStore({
  reducer: modalSlice.reducer,
});

export default store;
