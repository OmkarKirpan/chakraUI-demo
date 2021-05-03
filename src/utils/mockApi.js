// const userSubmit = async ({
//   name,
//   address,
//   email,
//   tel,
//   alttel,
//   gstNum,
//   website
// }) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(
//         `Company Details: \n name=${name}, address=${address}, email=${email}, tel=${tel}, alttel=${alttel}, gstNum=${gstNum}, website=${website}`
//       );
//       //save to localstorage
//       localStorage.setItem(
//         "company",
//         JSON.stringify({
//           name,
//           address,
//           email,
//           tel,
//           alttel,
//           gstNum,
//           website
//         })
//       );
//       if (email === "okirpan@gmail.com") {
//         resolve();
//       } else {
//         reject("Email is wrong");
//       }
//     }, 3000);
//   });
// };

const userSubmit = async ({
  name,
  code,
  buyPrice,
  salePrice,
  unit,
  defaultQty,
  stock,
  isTaxable,
  description,
  note,
}) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("New Product", {
        name,
        code,
        buyPrice,
        salePrice,
        unit,
        defaultQty,
        stock,
        isTaxable,
        description,
        note,
      });
      //save to localstorage
      localStorage.setItem(
        "products",
        JSON.stringify({
          name,
          code,
          buyPrice,
          salePrice,
          unit,
          defaultQty,
          stock,
          isTaxable,
          description,
          note,
        })
      );
      resolve();
    }, 3000);
  });
};

export default userSubmit;
