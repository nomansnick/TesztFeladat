import { useState, useEffect, useCallback } from "react";
import { getItems } from "../outGoing/RealEstate";

export default function useManyItems() {
  const [items, setItems] = useState();

  const listEstestes = useCallback(async function () {
    const { data } = await getItems();
    if (data) {
      setItems(data);
    }
  }, []);

  useEffect(() => {
    listEstestes();
  }, [listEstestes]);

  return {
    items,
    listEstates,
  };
}
