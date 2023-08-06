export interface GenericResponse<D> {
  success: boolean;
  message: string;
  data: D;
}

export type GenericRequestPayload<B, P> = {
  body?: B;
  params?: P;
};
