export class AxcelData {
  id: string;
  name: string;
  age: string;
  sex: boolean; // true: man, false: woman
  monthly: number;
  bonus: number;
  bank: number;

  constructor (data) {
    this.id = data.id;
    this.name = data.name;
    this.age = data.age;
    this.sex = data.sex;
    this.monthly = data.monthly;
    this.bonus = data.bonus;
    this.bank = data.bank;
  }

  get annual (): number {
    return this.monthly * 12 + this.bonus;
  }

  recieveIncome (amount: number) {
    this.bank += amount ? amount : this.monthly;
  }

  recieveBonus (amount: number) {
    this.bank += amount ? amount : this.bonus;
  }

  pay (amount: number) {
    this.bank -= amount;
  }

}
