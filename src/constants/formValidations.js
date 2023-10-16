const NAME_VALIDATIONS = {
    required: {
        value: true,
        message: "Este campo es requerido",
    },
    maxLength: {
        value: 25,
        message: "Este campo acepta 25 caracteres como máximo",
    },
};

const LAST_NAME_VALIDATIONS = {
    required: {
        value: true,
        message: "Este campo es requerido",
    },
    maxLength: {
        value: 25,
        message: "Este campo acepta 25 caracteres como máximo",
    },
};

const EMAIL_VALIDATIONS = {
    required: {
        value: true,
        message: "Este campo es requerido",
    },
    maxLength: {
        value: 150,
        message: "Este campo acepta 150 caracteres como máximo",
    },
    pattern: {
        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Ingrese un correo válido",
    },
};

const PASSWORD_VALIDATIONS = {
    required: {
        value: true,
        message: "Este campo es requerido",
    },
    minLength: {
        value: 8,
        message: "Este campo acepta 8 caracteres como mínimo",
    },
    maxLength: {
        value: 25,
        message: "Este campo acepta 25 caracteres como máximo",
    },
};

export {
    NAME_VALIDATIONS,
    LAST_NAME_VALIDATIONS,
    EMAIL_VALIDATIONS,
    PASSWORD_VALIDATIONS,
};
