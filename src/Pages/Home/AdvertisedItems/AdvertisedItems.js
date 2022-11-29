import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import AdvertisedItem from "./AdvertisedItem";

const AdvertisedItems = () => {
  // const [data, setData] = useState()
  const { data = [] } = useQuery({
    queryKey: [],
    queryFn: () =>
      fetch(
        "https://final-project-server-drab.vercel.app/advertisedItems"
      ).then((res) => res.json()),
  });
  return (
    <div>
      <div>
        <h2 className="text-yellow-800 text-3xl text-center p-6 mt-12">
          Advertised Items
        </h2>
      </div>
      <div className="grid grid-cols-01 md:grid-cols-3 lg:grid-cols-3 ">
        {data.map((item) => (
          <AdvertisedItem key={item._id} item={item}></AdvertisedItem>
        ))}
      </div>
    </div>
  );
};

export default AdvertisedItems;
