import React from "react";
import SearchWithIcon from "../SearchWithIcon";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import useContacts from "../hook/useContacts";
import { Image } from "react-bootstrap";

const thumbnailFix = {
  maxWidth: "8rem",
  position: "relative",
};

export default function Connections() {
  const { items } = useContacts();
  return (
    <>
      {items ? (
        <div className="d-flex justify-content-center h-100 w-100">
          <div className="d-flex flex-column align-items-center p-4 col-xs-12 col-md-6 bg-primary rounded1Rem">
            <div className="mb-5">
              <h3>Connections</h3>
              <div>NOT IMPLEMENTED!!!</div>
            </div>
            <div className="mb-5 w-100">
              <SearchWithIcon
                placeHolder="&#xF002; Who are you looking for?"
                label="people"
              />
            </div>
            <div className="d-flex flex-column align-items-start w-100">
              <div className="mb-5 w-100">Dummy Contacts:</div>
              <div className="w-100">
                {items.map((onePerson) => (
                  <div className="d-flex align-items-center justify-content-around w-100 ml-n4">
                    <Image
                      src={onePerson.picUrl}
                      className="img-thumbnail"
                      roundedCircle
                      variant="left"
                      style={{ ...thumbnailFix }}
                    />
                    <div>{onePerson.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}
