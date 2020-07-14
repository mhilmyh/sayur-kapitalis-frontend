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
				className={"w-full text-center justify-center pt-2 pb-1 text-green-500"}
			>
				{props.children}
				<span
					className={
						"tab tab-account block text-xs " + (props.active ? "font-bold" : "")
					}
				>
					{props.title || "Menu"}
				</span>
			</a>
		</Link>
	);
};
