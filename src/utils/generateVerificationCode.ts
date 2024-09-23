export const generateVerificationCode = (length = 6) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let verficationCode = "";
  for (let i = 0; i < length; i++) {
    verficationCode += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return verficationCode;
};
