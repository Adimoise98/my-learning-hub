function SimpleClassLog(target: Function) {
  console.log(`Class ${target.name} a fost creata.`);
}

@SimpleClassLog
class ExempluTest {
  constructor(public nume: string) {}
}

const exemplu = new ExempluTest("Vlad");
