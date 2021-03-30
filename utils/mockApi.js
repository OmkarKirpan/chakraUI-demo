const userSubmit = async ({
  name,
  address,
  email,
  tel,
  alttel,
  gstNum,
  website
}) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(
        `Company Details: \n name=${name}, address=${address}, email=${email}, tel=${tel}, alttel=${alttel}, gstNum=${gstNum}, website=${website}`
      );
      //save to localstorage
      localStorage.setItem("company", {
        name,
        address,
        email,
        tel,
        alttel,
        gstNum,
        website
      });
      if (email === "okirpan@gmail.com") {
        resolve();
      } else {
        reject("Email is wrong");
      }
    }, 3000);
  });
};

export default userSubmit;
