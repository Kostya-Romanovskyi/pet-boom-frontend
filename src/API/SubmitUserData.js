import axios from 'axios';
import swal from 'sweetalert';

const MAIN_URL = 'https://pet-shop-36ob.onrender.com/';

// const baseUrl = `https://api.novaposhta.ua/v1.0/json/`;
// const apiKey = `a042593dd8aa2da3f9bfaf53d464288d`;
// const modelName = "Address";
// const calledMethod = "searchSettlements";
// const methodProperties = {
//   CityName: "київ",
//   Limit: "50",
//   Page: "2",
// };

// export const poshta = async () => {
//   try {
//     const apiUrl = "https://api.novaposhta.ua/v2.0/json/";
//     const apiKey = "a042593dd8aa2da3f9bfaf53d464288d";
//     const modelName = "AddressGeneral";
//     const calledMethod = "searchSettlementStreets";
//     const methodProperties = {
//       StreetName: "Хрещатик",
//       SettlementRef: "00000000-0000-0000-0000-000000000000",
//       Limit: "50",
//     };

//     const headers = {
//       "Accept-Charset": "utf-8",
//     };

//     const response = await axios.get(apiUrl, {
//       params: {
//         apiKey,
//         modelName,
//         calledMethod,
//         methodProperties: JSON.stringify(methodProperties),
//       },
//       headers,
//     });

//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

export const submitUserData = async userData => {
  try {
    const response = await axios.post(`${MAIN_URL}api/orders`, userData);
    if (response.status === 201 || response.status === 204) {
      swal(
        'Дякуєм за замовлення!',
        'Очікуйте дзвінка для уточнення інформації',
        'success'
      );
    }
    console.log(response);
    return response.data;
  } catch (error) {
    swal('Відбулась помилка!', 'Спробуйте ще раз!', 'error');
    console.error(error);
  }
};

export const changeStatus = async userStatus => {
  const { _id, status } = userStatus;

  try {
    const response = await axios.patch(`${MAIN_URL}api/orders/${_id}`, {
      status: !status,
    });

    location.reload();

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
