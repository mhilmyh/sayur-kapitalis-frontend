const BottomNavigation = () => {
	return (
		<div class="w-full h-screen">
			<section
				id="bottom-navigation"
				class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
			>
				<div id="tabs" class="flex justify-between">
					<a
						href="#"
						class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
					>
						<span class="tab tab-home block text-xs">Produk</span>
					</a>
					<a
						href="#"
						class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
					>
						<span class="tab tab-explore block text-xs">Pesanan</span>
					</a>
					<a
						href="#"
						class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
					>
						<span class="tab tab-account block text-xs">Akun</span>
					</a>
				</div>
			</section>
		</div>
	);
};

export default BottomNavigation;
