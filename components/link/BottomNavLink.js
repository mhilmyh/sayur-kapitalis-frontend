import Link from "next/link";

export default (props) => {
	return (
		<Link
			href={props.href}
			as={props.as}
			passHref={props.passHref}
			prefetch={props.prefetch}
			replace={props.replace}
			scroll={props.scroll}
			shallow={props.shallow}
		>
			<a
				className={
					"w-full focus:text-green-500 hover:text-green-300 justify-center inline-block text-center pt-2 pb-1 " +
					(props.active ? "text-green-500" : "")
				}
			>
				{props.children}
				<span className="tab tab-account block text-xs font-bold">
					{props.title || "Menu"}
				</span>
			</a>
		</Link>
	);
};
