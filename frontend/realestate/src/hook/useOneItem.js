import { useState, useEffect, useCallback } from "react";
import { getOneItem } from "../outGoing/RealEstate";
import { useParams } from "react-router-dom";
import places from "../dummyDB/db";

export default function useOneItem() {
  const [oneItemData, setOneItemData] = useState();
  const { id } = useParams();

  const loadOneItem = useCallback(
    async function () {
      if (id !== undefined) {
        try {
          console.log("futok");
          const resp = await getOneItem(id);
          let address = addressToString(resp.data);
          setOneItemData({ ...resp.data, addressString: address });
        } catch (error) {
          console.log(places);
          let answer = places[Math.floor(Math.random() * Math.floor(2))];
          console.log(answer);
          let address = addressToString(answer);
          setOneItemData({ ...answer, addressString: address });
        }
      }
    },
    [id]
  );

  function addressToString(received) {
    return " "
      .concat(received.address.name)
      .concat(" ")
      .concat(received.address.type)
      .concat(" ")
      .concat(received.address.number)
      .concat(", ")
      .concat(received.address.county)
      .concat(" ")
      .concat(received.address.country)
      .concat(" ")
      .concat(received.address.postal);
  }

  useEffect(() => {
    console.log("FUTOK");
    loadOneItem();
  }, [loadOneItem]);

  return {
    loadOneItem,
    oneItemData,
  };
}
