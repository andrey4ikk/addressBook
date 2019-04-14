
// export interface User {
//   id?: number;
//   data: Data;
// }
// export interface Data {
//   type: string;
//   id?: number;
//   attributes: Attributes;
// }
// export interface Attributes {
//   name_first: string;
//   name_last: string;
//   birthday: string;
//   email: string;
// }
export interface User {
  data: {
    id?: number;
    type: string;
    attributes: {
      name_first: string;
      name_last: string;
      birthday: string;
      email: string;
    }
  }

  }

// }

