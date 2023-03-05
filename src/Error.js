import React from 'react'
import { CCard} from 'react-bootstrap';

const Error = () => {
  return (
    <div>
        <CCard className="mb-3 bg-dark text-white">
  <CCardImage src="/images/react.jpg" />
  <CCardImageOverlay>
    <CCardTitle>Card title</CCardTitle>
    <CCardText>
      This is a wider card with supporting text below as a natural lead-in to additional content.
      This content is a little bit longer.
    </CCardText>
    <CCardText>Last updated 3 mins ago</CCardText>
  </CCardImageOverlay>
</CCard>
    </div>
  )
}

export default Error
