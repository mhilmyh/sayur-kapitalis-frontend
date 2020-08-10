import EasyCard from "../card/EasyCard";
import { TextField } from "@material-ui/core";
const ChangePassSection = () => {
	return (
		<EasyCard>
			<form noValidate>
				<div className="mb-4 mt-2">
					<TextField
						label="Password Lama"
						fullWidth={true}
						InputLabelProps={{ shrink: true }}
					/>
				</div>
				<div className="mb-4 mt-2">
					<TextField
						label="Password Baru"
						fullWidth={true}
						InputLabelProps={{ shrink: true }}
					/>
				</div>
			</form>
		</EasyCard>
	);
};

export default React.memo(ChangePassSection);
