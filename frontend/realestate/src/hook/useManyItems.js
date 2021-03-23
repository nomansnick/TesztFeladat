import { useState, useEffect, useCallback } from "react";
import { getItems } from "../outGoing/RealEstate";
import places from "../dummyDB/db";

export default function useManyItems() {
  const [items, setItems] = useState();

  const listEstates = useCallback(async function () {
    try {
      const { data } = await getItems();
      if (data) {
        setItems(data);
      }
    } catch (error) {
      setItems(places);
    }
  }, []);

  useEffect(() => {
    listEstates();
  }, [listEstates]);

  return {
    items,
    listEstates,
  };
}
