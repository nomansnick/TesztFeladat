import React from 'react'
import SearchWithIcon from '../SearchWithIcon'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import useContacts from '../hook/useContacts'
import { Image } from 'react-bootstrap'
import LinkBack from '../LinkBack'
import NavBottom from '../browseAll/NavBottom'

const thumbnailFix = {
  maxWidth: '4rem',
  position: 'relative',
}

export default function Connections() {
  const { items } = useContacts()
  return (
    <>
      {items ? (
        <div className="h-100">
          <div className="d-flex justify-content-center h-100 w-100 marginBottomCust">
            <div className="d-flex flex-column justify-content-around align-items-center w-100 h-100 p-5 bg-white rounded1Rem">
              <div className="mt-n5">
                <h3>Connections</h3>
                <div>NOT IMPLEMENTED!!!</div>
                <div>
                  <LinkBack />
                </div>
              </div>
              <div className="w-100 mt-n5">
                <SearchWithIcon
                  placeholder="&#xF002; Who are you looking for?"
                  label="people"
                  type="text"
                  name="connections"
                />
              </div>
              <div className="d-flex flex-column w-100 mt-n5">
                <div className="w-100">Dummy Contacts:</div>
                <div className="w-100 d-flex justify-content-between align-items-center w-50">
                  <div className="d-flex flex-column align-items-start h-100">
                    {items.map((onePerson) => (
                      <Image
                        src={onePerson.picUrl}
                        className="img-thumbnail"
                        roundedCircle
                        variant="left"
                        style={{ ...thumbnailFix }}
                      />
                    ))}
                  </div>
                  <div className="d-flex flex-column align-items-start justify-content-around w-50 h-100">
                    {items.map((onePerson) => (
                      <div className="d-flex align-items-center justify-content-start w-100">
                        <div>{onePerson.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <NavBottom />
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  )
}
