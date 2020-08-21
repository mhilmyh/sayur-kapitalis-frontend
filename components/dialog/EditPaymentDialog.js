import DialogWrapper from "../wrapper/DialogWrapper";
import { payOrder, paymentUpdate } from "../../redux/actions/creator/order";
import { useTheme } from "@material-ui/core/styles";
import EasyInputImage from "../input/EasyInputImage";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const OrderDialog = ({ open = false, onClose = () => {}, payment = {} }) => {
	const loading = useSelector((state) => state.loading);
	const dispatch = useDispatch();

	const [img, setImg] = React.useState(null);

	const router = useRouter();
	const handleChangeBukti = () => {
		if (!loading) {
			const data = new FormData();
			data.set("image", img);
			dispatch(
				paymentUpdate(!!payment ? payment.id : "", data, () => router.reload())
			);
		}
	};

	return (
		<DialogWrapper
			open={open}
			onClose={onClose}
			textYes="Ganti"
			title="Bayar Pesanan"
			onClickYes={() => handleChangeBukti()}
		>
			{/* Upload Bukti Pembayaran */}
			<div className="p-4 w-full">
				<EasyInputImage
					title="Gambar"
					desc="Bukti Pembayaran"
					onChange={(v) => setImg(v)}
					initSrc={!!payment ? payment.image_url : ""}
				></EasyInputImage>
			</div>
		</DialogWrapper>
	);
};

export default React.memo(OrderDialog);
