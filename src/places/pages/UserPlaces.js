import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Khalid Khizar Chock",
    description: "One of the famous and unique chock in the world.",
    imageUrl:
      "https://images.unsplash.com/photo-1528291151377-165f5107c82a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    address: "Gali No 2, Peoples Colony",
    location: {
      lat: 30.1737288,
      lng: 71.4952033,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Khalid Khizar Chock",
    description: "One of the famous and unique chock in the world.",
    imageUrl:
      "https://images.unsplash.com/photo-1528291151377-165f5107c82a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    address: "Gali No 2, Peoples Colony",
    location: {
      lat: 30.1737288,
      lng: 71.4952033,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
