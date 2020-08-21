import DialogWrapper from "../wrapper/DialogWrapper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { payOrder } from "../../redux/actions/creator/order";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import PaymentForm from "../form/PaymentForm";
import PaymentTable from "../table/PaymentTable";
import { useDispatch, useSelector } from "react-redux";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && <Box p={3}>{children}</Box>}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

const OrderDialog = ({ open = false, onClose = () => {}, order = {} }) => {
	const loading = useSelector((state) => state.loading);
	const dispatch = useDispatch();

	const [paidDate, setPaidDate] = React.useState(null);
	const [accountID, setAccountID] = React.useState(-1);
	const [shipmentDate, setShipmentDate] = React.useState(-1);
	const [shipmentTimeID, setShipmentTimeID] = React.useState(-1);
	const [img, setImg] = React.useState(null);

	const handleClickPay = () => {
		if (!loading) {
			const data = new FormData();
			data.set("date", paidDate);
			data.set("image", img);
			data.set("order_header_id", order.id);
			data.set("account_id", accountID);
			data.set("shipment_date", shipmentDate);
			data.set("shipment_time_id", shipmentTimeID);
			dispatch(payOrder(data));
		}
	};

	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	return (
		<DialogWrapper
			open={open}
			onClose={onClose}
			textYes="Bayar"
			title="Bayar Pesanan"
			onClickYes={() => handleClickPay()}
		>
			{/* <Tabs
				value={value}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				variant="fullWidth"
			>
				<Tab label="Pembayaran" />
				<Tab label="List Bukti Pembayaran" />
			</Tabs>
			<SwipeableViews
				axis={theme.direction === "rtl" ? "x-reverse" : "x"}
				index={value}
				onChangeIndex={handleChangeIndex}
			>
				<TabPanel value={value} index={0} dir={theme.direction}> */}
			<PaymentForm
				paidDate={paidDate}
				accountID={accountID}
				shipmentDate={shipmentDate}
				shipmentTimeID={shipmentTimeID}
				setPaidDate={setPaidDate}
				setAccountID={setAccountID}
				setShipmentDate={setShipmentDate}
				setShipmentTimeID={setShipmentTimeID}
				setImg={setImg}
			></PaymentForm>
			{/* </TabPanel>
				<TabPanel value={value} index={1} dir={theme.direction}>
					<PaymentTable payments={order.order_payment}></PaymentTable>
				</TabPanel>
			</SwipeableViews> */}
		</DialogWrapper>
	);
};

export default React.memo(OrderDialog);
