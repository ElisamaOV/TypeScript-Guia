(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log('Constructor Avenger llamado');
    }

    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realname: string, public isMutant: boolean) {
      super(name, realname);
      console.log('Constructor Xmen llamado');
    }

    get fullName() {
      return `${this.name} - ${this.realName}`;
    }

    set fullName(name: string) {
      if (name.length < 3) {
        throw 'El nombre debe ser mayor a tres letras';
      } else {
        this.name = name;
      }
    }

    getFullNameDesdeXmen() {
      console.log(super.getFullName());
    }
  }

  // const wolverine = new Xmen('Wolverine', 'Logan', true);
  // wolverine.fullName = 'Elisama';
  // console.log(wolverine.fullName);
})();
