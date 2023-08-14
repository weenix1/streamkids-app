const isProduction = import.meta.env['PROD'] as boolean;

const log = (message: string, ...parameters: object[]) => {
  if (isProduction) return;
  console.log(message, ...parameters);
};

const debug = (message: string, ...parameters: object[]) => {
  if (isProduction) return;
  console.debug(message, ...parameters);
};

const error = (message: string, ...parameters: object[]) => {
  console.error(message, ...parameters);
};

const warn = (message: string, ...parameters: object[]) => {
  console.warn(message, ...parameters);
};

const LogS = {
  log,
  debug,
  error,
  warn,
};

export default LogS;
