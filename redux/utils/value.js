// Handler for set value for form data
export const setValueFormData = (
	data = { form: new FormData() },
	label = "",
	key = "",
	value = null,
	callbackError = (label) => {}
) => {
	// check if value is exist
	if (!!value) {
		data.form.set(key, value);
		return true;
	} else {
		callbackError(label);
		return false;
	}
};
