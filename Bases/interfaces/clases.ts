(() => {
  interface Xmen {
    name: string;
    realname: string;
    mutantPower(id: number): string;
  }

  interface Human {
    age: number;
  }

  class Mutant implements Xmen, Human {
    public age: number;
    public name: string;
    public realname: string;
    mutantPower(id: number): string {
      return this.name + ' ' + this.realname;
    }
  }
})();
