import crypto from "crypto"
const otpService = {
     generate: () => {
          const otp = crypto.randomInt(10000, 99999);
          return otp;
     }
}

export default otpService; 