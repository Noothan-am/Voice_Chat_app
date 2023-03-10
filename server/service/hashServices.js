import crypto from "crypto"
const hastServices = {
     hash: (otp) => {
          const hash = crypto.createHmac("sha256", "secreteKey").update(`${otp}`).digest("hex");
          return hash;
     }
}

export default hastServices;