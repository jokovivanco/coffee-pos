const prefix = "/api";

export const Path = {
  CreateUser: prefix + "/users",
  LoginUser: prefix + "/users/login",
  CreateCategory: prefix + "/categories",
  SearchCategory: prefix + "/categories",
  UpdateCategory: prefix + "/categories/:id",
  RemoveCategory: prefix + "/categories/:id",
  CreateProduct: prefix + "/products",
  SearchProduct: prefix + "/products",
};
