// import { useDispatch, useSelector } from 'react-redux';
import Modal from '@mui/material/Modal';
// import { selectContacts } from 'redux/contacts/selectors';

export const LearnMoreModal = ({ open, close, advert }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    // rentalPrice,
    // rentalCompany,
    address,
    rentalConditions,
    // mileage,
  } = advert;
  // const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);

  // const onApply = editedContactValues => {
  //   const isExistName = contacts.some(
  //     contact =>
  //       contact.name.toLowerCase() === editedContactValues.name.toLowerCase() &&
  //       id !== contact.id
  //   );
  //   const isExistNumber = contacts.some(
  //     contact =>
  //       contact.number === editedContactValues.number && id !== contact.id
  //   );
  //   const isSameName =
  //     name.toLowerCase() === editedContactValues.name.toLowerCase();
  //   const isSameNumber = number === editedContactValues.number;

  //   if (isSameName && isSameNumber) {
  //     alert(`Please enter new values`);
  //     return;
  //   }
  //   if (isExistName) {
  //     alert(`Name ${editedContactValues.name} is already in contacts.`);
  //     return;
  //   }
  //   if (isExistNumber) {
  //     alert(`Number ${editedContactValues.number} is already in contacts.`);
  //     return;
  //   }

  //   dispatch(editContact(editedContactValues));
  //   close();
  // };

  return (
    <Modal open={open} onClose={close}>
      <div>
        <>
          <div>
            <button type="button" onClick={close}>
              Close
            </button>
            <img src={img} alt={make} />
            <h2>{`${make} ${model}, ${year}`}</h2>
            <p>{address}</p>
            <p>id: {id}</p>
            <p>Year: {year}</p>
            <p>Type: {type}</p>
            <p>Fuel Consumption: {fuelConsumption}</p>
            <p>Engine Size: {engineSize}</p>
            <p>{description}</p>
            <h3>Accessories and functionalities:</h3>
            <ul>
              {accessories.map(item => (
                <li key={item}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
            <ul>
              {functionalities.map(item => (
                <li key={item}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
            <p>{rentalConditions}</p>
            {/* <Link>Rental car</Link> */}
          </div>
        </>
      </div>
    </Modal>
  );
};
