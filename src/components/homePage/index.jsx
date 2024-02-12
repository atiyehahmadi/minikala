import React from "react";
import Slider from "./slider/Slider";
import Parts from "./optionParts/parts";
import OfferBox from "./offerBox/OfferBox";
import SupermarketBanner from "./SupermarketBanner/SupermarketBanner ";
import Category from "./categories/Category";
import Offer from "./Offer/Offer";
import Brands from "./popularBrands/Brands";
import Advertisement from "./advertisementParts/Advertisement";
import PopularProducts from "./popularProducts/popularProducts";
import MainLayout from "../shared/layouts/MainLayout";
import AdvertisementList1 from "../../data/jsonFiles/advertisement/advertisementList1.json";
import AdvertisementList2 from "../../data/jsonFiles/advertisement/advertisementList2.json";
import AdvertisementList3 from "../../data/jsonFiles/advertisement/advertisementList3.json";
import advertisementList4 from "../../data/jsonFiles/advertisement/advertisementList4.json";

const HomePage = () => {
  return (
    <MainLayout>
      <div className="mt-[-1px]  bg-white">
        <Slider />
        <div className="container grid grid-cols-1 mx-auto gap-y-6">
          <Parts />
          <OfferBox />
          <SupermarketBanner />
          <Advertisement list={AdvertisementList1} />
          <Category />
          <Advertisement list={AdvertisementList2} />
          <Offer />
          <Brands />
          <Advertisement list={AdvertisementList3} />
          <PopularProducts />
          <Advertisement list={advertisementList4} />
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
