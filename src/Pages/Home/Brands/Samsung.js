import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../../BookingModal/BookingModal";
import SamsungCard from "./SamsungCard";

const Samsung = () => {
  const { data = [] } = useQuery({
    queryKey: [],
    queryFn: () =>
      fetch("http://localhost:5000/samsung").then((res) => res.json()),
  });
  const [item, setItem] = useState(null);
  return (
    <div className="mx-auto">
      <div>
        <h1 className="text-center text-3xl text-primary mt-12 mb-6">
          All Samsung products are here
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((samsung) => (
          <SamsungCard
            key={samsung._id}
            setItem={setItem}
            samsung={samsung}
          ></SamsungCard>
        ))}
      </div>
      {item && <BookingModal item={item}></BookingModal>}
    </div>
  );
};

export default Samsung;
