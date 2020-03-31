/* To handle required validation */
export function requireValidate(fieldName, value) {
  if (value === '' || value === undefined || value === null || value === false) {
    return { status: false, message: `Please enter ${fieldName}` };
  }
  return { status: true, message: '' };
}

/* To handle firstname, lastname validation */
export function requireNameValidate(fieldName, value) {
  const regx = /^[a-zA-Z_\s.-]+$/gim;
  if (value === '' || value === undefined || value === null) {
    return {
      status: false,
      message: `Please enter ${fieldName}`
    };
  }
  if (!regx.test(value)) {
    return {
      status: false,
      message: `Please enter valid ${fieldName}`
    };
  }

  return { status: true, message: '' };
}

/* To handle email validation */
export function emailValidate(fieldName, value, isRequired = true) {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (isRequired && (value === '' || value === undefined || value === null)) {
    return {
      status: false,
      message: `Please enter ${fieldName}`
    };
  }
  if (value && !emailRegex.test(value)) {
    return {
      status: false,
      message: `Please enter valid ${fieldName}`
    };
  }

  return { status: true, message: '' };
}
