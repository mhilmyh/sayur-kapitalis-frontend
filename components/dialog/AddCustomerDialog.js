import DialogWrapper from "../wrapper/DialogWrapper";

const AddCustomerDialog = ({ open, onClose }) => {
	return (
		<DialogWrapper open={open} onClose={onClose}>
			Add Customer
		</DialogWrapper>
	);
};
export default React.memo(AddCustomerDialog);
