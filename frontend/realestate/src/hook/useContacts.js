import { useState, useEffect, useCallback } from "react";
import { getContacts } from "../outGoing/RealEstate";
import places from "../dummyDB/db";

export default function useContacts() {
  const [items, setItems] = useState();
  let contacts = [];

  const listContacts = useCallback(async function () {
    try {
      const { data } = await getContacts();
      if (data) {
        setItems(data);
      }
    } catch (error) {
      places.map((onePlace) => contacts.push(onePlace.person));
      setItems(contacts);
    }
  }, []);

  useEffect(() => {
    listContacts();
  }, [listContacts]);

  return {
    items,
    listContacts,
  };
}
