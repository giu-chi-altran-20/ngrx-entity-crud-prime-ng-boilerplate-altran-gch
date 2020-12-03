export class Car {
    public id: string = undefined;

  public brand: string = undefined;
  public name: string = undefined;
  public kilowatt: number = undefined;
  public doors: number = undefined;
  // public builddate: Date = undefined;


    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: Car) => string = item => item.id;
}
