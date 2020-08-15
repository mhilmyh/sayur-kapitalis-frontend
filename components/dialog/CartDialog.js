import DialogWrapper from "../wrapper/DialogWrapper";
import LocalTable from "../table/LocalTable";
import { useSelector, useDispatch } from "react-redux";
import {
	cartsChangeQuantity,
	cartsRemove,
} from "../../redux/actions/creator/cart";
import { convertToRupiah } from "../../redux/utils/format";
import { ordersBuyProduct } from "../../redux/actions/creator/order";

const CartDialog = ({ open = false, onClose = () => {} }) => {
	const carts = useSelector((state) => state.carts);
	const dispatch = useDispatch();
	return (
		<DialogWrapper
			open={open}
			onClose={onClose}
			textYes="Pesan Produk"
			title="Keranjang"
			onClickYes={() => dispatch(ordersBuyProduct(carts))}
		>
			<LocalTable
				title=" "
				columns={[
					{ title: "Produk", field: "name" },
					{ title: "Kuantitas", field: "quantity" },
				]}
				actions={[
					{
						icon: "add",
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
						icon: "remove",
						tooltip: "Hapus",
						onClick: (_, row) =>
							dispatch(
								cartsChangeQuantity(row.id, Math.max(0, row.quantity - 1))
							),
					},
				]}
				detailPanel={(row) => {
					return (
						<div className="w-full px-8 py-2">
							<table className="w-full">
								<tbody className="w-full flex flex-wrap justify-center items-center">
									<tr className="flex w-full justify-between border-b-2 border-green-200">
										<td className="font-bold">Produk</td>
										<td>{row.name}</td>
									</tr>
									<tr className="flex w-full justify-between border-b-2 border-green-200">
										<td className="font-bold">Harga</td>
										<td>{convertToRupiah(row.price)}</td>
									</tr>
									<tr className="flex w-full justify-between border-b-2 border-green-200">
										<td className="font-bold">Unit</td>
										<td>{row.unit}</td>
									</tr>
									<tr className="flex w-full justify-between border-b-2 border-green-200">
										<td className="font-bold">Stock</td>
										<td>{row.stock}</td>
									</tr>
									<tr className="flex w-full justify-between border-b-2 border-green-200">
										<td className="font-bold">Kategori</td>
										<td>{row.category.name}</td>
									</tr>
									<tr className="flex w-full justify-between border-b-2 border-green-200">
										<td className="font-bold">Sub Kategori</td>
										<td>{row.sub_category.name}</td>
									</tr>
									<tr className="flex w-full justify-between border-b-2 border-green-200">
										<td className="font-bold">Deskripsi</td>
										<td className="text-right ml-4">{row.descriptions}</td>
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
