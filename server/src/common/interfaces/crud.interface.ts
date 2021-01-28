export interface CRUD {
  list: (limit: number, page: number) => Promise<unknown>;
  create: (resource: unknown) => Promise<unknown>;
  updateById: (resourceId: unknown) => Promise<unknown>;
  readById: (resourceId: unknown) => Promise<unknown>;
  deleteById: (resourceId: unknown) => Promise<string>;
  patchById: (resourceId: unknown) => Promise<string>;
}
