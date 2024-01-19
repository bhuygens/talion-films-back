export interface UseCase<IParams, IResponse> {
  execute(params: IParams): Promise<IResponse>;
}
