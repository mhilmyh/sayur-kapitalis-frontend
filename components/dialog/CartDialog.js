import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DialogWrapper from "../wrapper/DialogWrapper";
import LocalTable from "../table/LocalTable";
import { useSelector, useDispatch } from "react-redux";
import {
	cartsChangeQuantity,
	cartsRemove,
	cartsChangeBuyer,
} from "../../redux/actions/creator/cart";
import { convertToRupiah } from "../../redux/utils/format";
import { ordersBuyProduct } from "../../redux/actions/creator/order";
import EasySelection from "../input/EasySelection";
import { customerFetch } from "../../redux/actions/creator/user";

const CartDialog = ({ open = false, onClose = () => {} }) => {
	const carts = useSelector((state) => state.carts);
	const customers = useSelector((state) => state.customers);
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(customerFetch());
	}, []);
	return (
		<DialogWrapper
			open={open}
			onClose={onClose}
			textYes="Pesan Produk"
			title="Keranjang"
			onClickYes={() => dispatch(ordersBuyProduct(carts, user.id))}
		>
			<LocalTable
				title="List Produk"
				columns={[
					{ title: "Nama Produk", field: "name" },
					{ title: "Kuantitas", field: "quantity" },
				]}
				options={{
					rowStyle: {
						fontSize: "0.8rem",
						fontWeight: 600,
						padding: 0,
						color: "#718096",
					},
				}}
				actions={[
					{
						icon: () => (
							<div className="bg-green-500 rounded-full text-gray-100 text-xs">
								<AddIcon />
							</div>
						),
						tooltip: "Tambah",
						onClick: (_, row) =>
							dispatch(
								cartsChangeQuantity(
									row.id,
									Math.min(row.stock, row.quantity + 1)
								)
							),
					},
					{
						icon: () => (
							<div className="bg-green-500 rounded-full text-gray-100 text-xs">
								<RemoveIcon />
							</div>
						),
						tooltip: "Hapus",
						onClick: (_, row) =>
							dispatch(
								cartsChangeQuantity(row.id, Math.max(0, row.quantity - 1))
							),
					},
				]}
				onRowClick={(event, rowData, togglePanel) => togglePanel()}
				detailPanel={(row) => {
					return (
						<div className="w-full px-8 pt-2 pb-8">
							<div className="pb-4">
								<EasySelection
									label="Pembeli"
									notChoosenText="Saya sendiri"
									value={row.user_id}
									val="id"
									data={customers}
									onChange={(e) => {
										dispatch(cartsChangeBuyer(row.id, e.target.value));
									}}
									printFunc={(item) => `${item.first_name} ${item.last_name}`}
								></EasySelection>
							</div>
							<table className="w-full pb-2">
								<tbody className="w-full flex flex-wrap justify-center items-center">
									<tr className="flex w-full justify-between border-b-2 border-green-200">
										<td className="font-semibold text-gray-700">Produk</td>
										<td className="text-gray-600">{row.name}</td>
									</tr>
									<tr className="flex w-full justify-between border-b-2 border-green-200">
										<td className="font-semibold text-gray-700">Harga</td>
										<td className="text-gray-600">
											{convertToRupiah(row.price)}
										</td>
									</tr>
									<tr className="flex w-full justify-between border-b-2 border-green-200">
										<td className="font-semibold text-gray-700">Unit</td>
										<td className="text-gray-600">{row.unit}</td>
									</tr>
									<tr className="flex w-full justify-between border-b-2 border-green-200">
										<td className="font-semibold text-gray-700">Stock</td>
										<td className="text-gray-600">{row.stock}</td>
									</tr>
									<tr className="flex w-full justify-between border-b-2 border-green-200">
										<td className="font-semibold text-gray-700">Kategori</td>
										<td className="text-gray-600">{row.category.name}</td>
									</tr>
									<tr className="flex w-full justify-between border-b-2 border-green-200">
										<td className="font-semibold text-gray-700">
											Sub Kategori
										</td>
										<td className="text-gray-600">{row.sub_category.name}</td>
									</tr>
									<tr className="flex w-full justify-between border-b-2 border-green-200">
										<td className="font-semibold text-gray-700">Deskripsi</td>
										<td className="text-gray-600 text-right ml-4">
											{row.descriptions}
										</td>
									</tr>
								</tbody>
							</table>
							{parseInt(row.quantity, 10) === 0 && (
								<button
									className="bg-red-600 text-gray-100 rounded shadow px-4 py-2 my-2 float-right"
									onClick={() => dispatch(cartsRemove(row.id))}
								>
									Hapus
								</button>
							)}
						</div>
					);
				}}
				data={carts}
			></LocalTable>
		</DialogWrapper>
	);
};

export default React.memo(CartDialog);
