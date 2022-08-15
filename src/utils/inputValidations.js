export const emailPattern = {
	value:
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	message: "Ingresa una dirección de correo válida",
};

export const namePattern = {
	value: /^[a-zA-Z\u00C0-\u017F\s]+$/,
	message: "Ingresa únicamente letras",
};

export const floorPattern = {
	value: 50,
	message: "Ingresa un número menor igual a 50",
};
