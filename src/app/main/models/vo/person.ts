export class Person {
    public id: string = undefined;

  public name: string = undefined;
  public surname: string = undefined;
  public age: number = undefined;
  public birthdate: Date = undefined;



    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: Person) => string = item => item.id;
}
