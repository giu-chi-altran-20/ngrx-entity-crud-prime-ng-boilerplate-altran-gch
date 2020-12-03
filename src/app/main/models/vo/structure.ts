export class Structure {
  public id: string = undefined;

  public city: string = undefined;
  public address: string = undefined;
  public coordinates: string = undefined;
  public dimensions: number = undefined;  // Metri cubi

  /**
   * metodo statico utilizzato per recuperare l'id dell'entita.
   * @param item
   */
  static selectId: (item: Structure) => string = item => item.id;
}
