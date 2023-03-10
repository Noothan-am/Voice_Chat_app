import otpService from "../service/otpService.js";
import hashServices from "../service/hashServices.js";
// we are creating collection of all the callbacks and exporting, it can be done by array, classes 
const controllers = {
     auth: (req, res) => {
          const otp = otpService.generate();
          const hash = hashServices.hash(otp);
          console.log(hash);
          res.send(`your phone no is ${otp}`);
     },
}

export default controllers;